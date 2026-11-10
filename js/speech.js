/* 口语引擎：录音回放（全平台）+ 浏览器识别（可用时增强）+ 跟读匹配度
   事实说明：
   - MediaRecorder / 麦克风需要安全环境（https 或 localhost）且用户授权；
   - SpeechRecognition 仅 Chrome/Edge/安卓 Chrome 较好，iOS Safari 与部分 PWA 会失败，所以只当加分项；
   - 识别失败时自动降级为「录音 + 回放自评」，不依赖任何付费服务。 */
(function () {
  var hasWindow = typeof window !== 'undefined';
  var nav = hasWindow && typeof navigator !== 'undefined' ? navigator : null;
  var MR = hasWindow ? (window.MediaRecorder || window.webkitMediaRecorder || null) : null;
  var SR = hasWindow ? (window.SpeechRecognition || window.webkitSpeechRecognition || null) : null;

  function mediaDevices() {
    return nav && nav.mediaDevices ? nav.mediaDevices : null;
  }

  function caps() {
    var md = mediaDevices();
    var secure = hasWindow ? (window.isSecureContext !== false) : false;
    var record = !!(md && md.getUserMedia && MR && secure);
    var reason = '';
    if (!record) {
      if (!md || !md.getUserMedia) reason = 'browser';
      else if (!secure) reason = 'secure';
      else reason = 'recorder';
    }
    return {
      record: record,
      recognize: !!SR,
      synth: !!(hasWindow && 'speechSynthesis' in window),
      secure: secure,
      reason: reason
    };
  }

  var rec = null;
  var lastUrl = null;

  function startRecord() {
    return new Promise(function (resolve) {
      var c = caps();
      if (!c.record) return resolve({ ok: false, reason: c.reason });
      mediaDevices().getUserMedia({ audio: true }).then(function (stream) {
        var mime = '';
        var types = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus'];
        for (var i = 0; i < types.length; i++) {
          if (MR.isTypeSupported && MR.isTypeSupported(types[i])) { mime = types[i]; break; }
        }
        var mr = null;
        try { mr = new MR(stream, mime ? { mimeType: mime } : undefined); }
        catch (e) {
          try { mr = new MR(stream); } catch (e2) {
            try { stream.getTracks().forEach(function (t) { t.stop(); }); } catch (e3) {}
            return resolve({ ok: false, reason: 'recorder' });
          }
        }
        rec = { mr: mr, stream: stream, chunks: [], t0: Date.now(), mime: mime };
        mr.ondataavailable = function (ev) {
          if (ev.data && ev.data.size && rec) rec.chunks.push(ev.data);
        };
        try { mr.start(200); } catch (e) { return resolve({ ok: false, reason: 'start' }); }
        resolve({ ok: true });
      }).catch(function (err) {
        var name = err && err.name;
        resolve({ ok: false, reason: (name === 'NotAllowedError' || name === 'SecurityError') ? 'denied' : 'mic' });
      });
    });
  }

  function stopRecord() {
    return new Promise(function (resolve) {
      var r = rec;
      if (!r) return resolve({ ok: false, reason: 'no-recording' });
      rec = null;
      var done = false;

      function finish() {
        if (done) return;
        done = true;
        var blob = null, url = '', ms = Date.now() - r.t0;
        try { blob = new window.Blob(r.chunks, { type: r.mime || 'audio/webm' }); } catch (e) {}
        try {
          if (blob && window.URL && window.URL.createObjectURL) url = window.URL.createObjectURL(blob);
        } catch (e) {}
        try { r.stream.getTracks().forEach(function (t) { t.stop(); }); } catch (e) {}
        if (lastUrl) { try { window.URL.revokeObjectURL(lastUrl); } catch (e) {} }
        lastUrl = url;
        resolve({ ok: true, url: url, ms: ms, blob: blob });
      }

      r.mr.onstop = finish;
      try { r.mr.stop(); } catch (e) { finish(); }
    });
  }

  function recognize(lang, timeoutMs) {
    return new Promise(function (resolve) {
      if (!SR) return resolve({ ok: false, reason: 'unsupported' });
      var text = '';
      var settled = false;
      var r = null;
      var timer = setTimeout(function () { finish({ ok: true, text: text, timeout: true }); }, timeoutMs || 8000);

      function finish(res) {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        try { if (r) r.abort(); } catch (e) {}
        resolve(res);
      }

      try { r = new SR(); } catch (e) { return finish({ ok: false, reason: 'ctor' }); }
      r.lang = lang || 'en-US';
      r.interimResults = true;
      r.continuous = false;
      r.maxAlternatives = 1;
      r.onresult = function (ev) {
        var s = '';
        for (var i = ev.resultIndex; i < ev.results.length; i++) {
          s += ev.results[i][0].transcript;
        }
        if (s) text = s;
      };
      r.onerror = function (ev) { finish({ ok: false, reason: (ev && ev.error) || 'error' }); };
      r.onend = function () { finish({ ok: true, text: text }); };
      try { r.start(); } catch (e) { finish({ ok: false, reason: 'start' }); }
    });
  }

  function normFlat(s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[\u2019']/g, '')
      .replace(/[^a-z0-9\u4e00-\u9fff]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function wordsOf(s) {
    var n = normFlat(s);
    return n ? n.split(' ') : [];
  }

  function fuzzy(a, b) {
    if (a === b) return true;
    if (Math.abs(a.length - b.length) > Math.max(2, Math.floor(Math.min(a.length, b.length) / 3))) return false;
    var dp = [], i, j;
    for (i = 0; i <= a.length; i++) dp[i] = [i];
    for (j = 0; j <= b.length; j++) dp[0][j] = j;
    for (i = 1; i <= a.length; i++) {
      for (j = 1; j <= b.length; j++) {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + (a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1)
        );
      }
    }
    return dp[a.length][b.length] / Math.max(a.length, b.length) <= 0.3;
  }

  /* 目标句 vs 识别文本 → 匹配度百分比（中文按字、拼音文字按词，允许小错） */
  function scoreSay(target, heard) {
    var T = wordsOf(target), H = wordsOf(heard);
    if (!T.length || !H.length) return { pct: 0, total: T.length, matched: 0 };

    if (/[\u4e00-\u9fff]/.test(target)) {
      var tc = normFlat(target).replace(/ /g, '').split('');
      var hs = normFlat(heard).replace(/ /g, '');
      var hit = 0;
      tc.forEach(function (ch) { if (hs.indexOf(ch) >= 0) hit++; });
      return { pct: Math.round(hit / tc.length * 100), total: tc.length, matched: hit };
    }

    var used = [], matched = 0;
    T.forEach(function (w) {
      var found = -1;
      for (var k = 0; k < H.length; k++) {
        if (used.indexOf(k) >= 0) continue;
        if (fuzzy(w, H[k])) { found = k; break; }
      }
      if (found >= 0) { used.push(found); matched++; }
    });
    return { pct: Math.round(matched / T.length * 100), total: T.length, matched: matched };
  }

  LP.speech = {
    caps: caps,
    startRecord: startRecord,
    stopRecord: stopRecord,
    recognize: recognize,
    scoreSay: scoreSay,
    normFlat: normFlat
  };
})();
