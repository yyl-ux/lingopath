/* 练习引擎：出题 / 作答 / 判定 / 口语 / 情景对话 / 等级考核 / 结算 */
(function () {
  var cur = null;

  function esc(s) { return LP.util.esc(s); }

  function levelLabel(lv) {
    var info = LP.levelInfo(lv);
    return info ? info.name : lv;
  }

  /* ---------------- 通用外壳 ---------------- */

  function shell(title, sub) {
    LP.root.innerHTML =
      '<div class="lesson">' +
        '<div class="lesson-head">' +
          '<button class="icon-btn" id="quit">✕</button>' +
          '<div class="track"><i id="fill" style="width:0%"></i></div>' +
          '<div class="qcount" id="qcount">1/1</div>' +
        '</div>' +
        '<div class="lesson-titlebar" id="ltb">' + esc(title || '') +
          (sub ? '<span>' + esc(sub) + '</span>' : '') + '</div>' +
        '<div class="lesson-body" id="lbody"></div>' +
      '</div>' +
      '<div class="foot" id="foot"></div>';

    LP.root.querySelector('#quit').addEventListener('click', function () {
      if (confirm('退出本次练习？本次进度不会保存。')) {
        var langId = cur ? cur.langId : 'en';
        cur = null;
        LP.go('#/' + langId);
      }
    });
  }

  function setProgress(done) {
    if (!cur) return;
    var total = cur.exercises ? cur.exercises.length : 1;
    var p = Math.min(100, Math.round(((cur.i + (done ? 1 : 0)) / total) * 100));
    var fill = LP.root.querySelector('#fill');
    if (fill) fill.style.width = p + '%';
    var qc = LP.root.querySelector('#qcount');
    if (qc) qc.textContent = Math.min(cur.i + 1, total) + '/' + total;
  }

  function defaultFoot(text) {
    var foot = LP.root.querySelector('#foot');
    foot.className = 'foot';
    foot.innerHTML = '<button class="btn" id="check" disabled>' + (text || '检查') + '</button>';
    return foot.querySelector('#check');
  }

  /* ---------------- 开始练习 ---------------- */

  function start(langId, lessonId, mode, opts) {
    opts = opts || {};
    mode = mode || 'lesson';
    var course = LP.store.getCourse(langId);
    if (!course) return;

    var lesson = null, flatIdx = -1, level = opts.level || null, stage = null;
    var flat = LP.store.flatLessons(course);
    var exercises = [];

    if (mode === 'review') {
      var due = LP.store.dueItems(langId).slice(0, 16);
      if (!due.length) { LP.toast('今天没有到期复习'); return; }
      lesson = {
        id: '__review',
        title: '到期复习',
        items: due.map(function (r) { return { w: r.w, t: r.t, e: r.e, et: r.et, p: r.p }; })
      };
      exercises = LP.ex.buildReview(course, lesson.items);
    } else if (mode === 'speak') {
      var recs = Object.keys(LP.store.getLang(langId).items)
        .map(function (k) { return LP.store.getLang(langId).items[k]; })
        .filter(function (r) { return r.seen > 0 && (r.e || r.w); });
      recs.sort(function (a, b) { return LP.store.strength(a) - LP.store.strength(b); });
      var sitems = recs.slice(0, 8).map(function (r) {
        return { w: r.w, t: r.t, e: r.e, et: r.et, p: r.p };
      });
      if (!sitems.length) { LP.toast('先上几关，学点句子再来练口语'); return; }
      lesson = { id: '__speak', title: '口语跟读', items: sitems };
      exercises = LP.ex.buildSpeaking(course, sitems);
    } else if (mode === 'exam') {
      level = level || LP.LEVEL_IDS[0];
      exercises = LP.ex.buildExam(course, level);
      if (!exercises.length) { LP.toast('这一级的题库还不够，先多学几关'); return; }
      lesson = { id: '__exam_' + level, title: levelLabel(level) + ' 等级考核', items: [] };
    } else if (mode === 'sound') {
      (course.sounds || []).forEach(function (st) { if (st.id === opts.stageId) stage = st; });
      if (!stage) return;
      if (!LP.store.levelOpen(langId, stage.level || 'A1')) {
        LP.toast('先把上一级的单元和考核完成，再回来学这一节');
        return;
      }
      level = stage.level || 'A1';
      lesson = { id: '__sound_' + stage.id, title: stage.title, items: [] };
      exercises = LP.ex.buildSound(course, stage);
    } else {
      flat.forEach(function (row, i) {
        if (row.lesson.id === lessonId) { lesson = row.lesson; flatIdx = i; }
      });
      if (!lesson) return;
      exercises = LP.ex.buildLesson(course, lesson.items);
    }

    if (!exercises.length) { LP.toast('这一关还没有可练的内容'); return; }

    cur = {
      langId: langId,
      course: course,
      lesson: lesson,
      mode: mode,
      level: level,
      flatIdx: flatIdx,
      exercises: exercises,
      i: 0,
      answers: 0,
      correct: 0,
      mistakes: [],
      requeued: 0,
      speakCount: 0,
      speakScores: [],
      stageId: stage ? stage.id : null,
      start: Date.now(),
      answered: false
    };

    LP.setLessonMode(true);
    if (mode === 'exam') shell(lesson.title, '听读说混合 · 80 分及格');
    else if (mode === 'speak') shell('口语跟读', '开口 8 句 · 录音回放自评');
    else if (mode === 'sound') shell(lesson.title, level + ' 发音课 · 学完能自己拼读');
    else shell(lesson.title, mode === 'review' ? '复习到期词' : '学新课');
    renderQuestion();
  }

  function renderQuestion() {
    if (!cur) return;
    if (cur.i >= cur.exercises.length) { finish(); return; }

    cur.answered = false;
    setProgress(false);

    var ex = cur.exercises[cur.i];
    var body = LP.root.querySelector('#lbody');
    var foot = LP.root.querySelector('#foot');

    if (ex.type === 'choice') renderChoice(body, foot, ex);
    else if (ex.type === 'listen') renderListen(body, foot, ex);
    else if (ex.type === 'order') renderOrder(body, foot, ex);
    else if (ex.type === 'type') renderType(body, foot, ex);
    else if (ex.type === 'match') renderMatch(body, foot, ex);
    else if (ex.type === 'speak') renderSpeak(body, foot, ex);
    else if (ex.type === 'card') renderCard(body, foot, ex);
    else { cur.i++; renderQuestion(); }
  }

  /* ---------------- 发音卡片 ---------------- */

  function renderCard(body, foot, ex) {
    var so = ex.sound || {};
    body.innerHTML =
      '<div class="ex">' +
        '<div class="ex-kicker">' + (ex.prompt || '认识这个音') + '</div>' +
        '<div class="snd-card snd-card-view">' +
          '<div class="snd-big">' + esc(so.k) + '</div>' +
          '<div class="snd-ipa">' + esc(so.ipa || '') + '</div>' +
          '<div class="snd-hint">' + esc(so.hint || '') + '</div>' +
          '<div class="snd-ex">' +
            '<span class="snd-word">' + esc(so.ex || '') + '</span>' +
            '<em>' + esc(so.tr || '') + '</em>' +
            '<button class="speak" id="sndPlay">🔊</button>' +
            '<button class="speak" id="sndSlow">🐢</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    var rate = LP.store.getState().profile.rate;
    function play(slow) {
      if (!cur) return;
      LP.ex.speak(so.ex, cur.course.tts, slow ? Math.min(0.7, (rate || 0.95) - 0.15) : rate);
    }
    body.querySelector('#sndPlay').addEventListener('click', function () { play(false); });
    body.querySelector('#sndSlow').addEventListener('click', function () { play(true); });

    foot.className = 'foot';
    foot.innerHTML =
      '<button class="btn primary" id="nextCard">记住了 · 下一个</button>' +
      '<button class="ghost sm" id="cardPlay">再听一遍</button>';
    foot.querySelector('#nextCard').addEventListener('click', function () { cur.i++; renderQuestion(); });
    foot.querySelector('#cardPlay').addEventListener('click', function () { play(false); });
    setTimeout(function () { play(false); }, 260);
  }

  function feedback(ok, ex, correctText) {
    cur.answered = true;
    cur.answers++;
    if (ok) cur.correct++;
    if (!ok && ex.item) cur.mistakes.push(ex.item);
    if (ex.item && ex.type !== 'match') LP.store.recordAnswer(cur.langId, ex.item, ok);
    setProgress(true);

    cur.combo = ok ? (cur.combo || 0) + 1 : 0;
    if (ok) {
      LP.sfx.correct();
      if (cur.combo > 0 && cur.combo % 5 === 0) LP.sfx.combo();
    } else {
      LP.sfx.wrong();
    }

    var bodyEl = LP.root.querySelector('#lbody');
    if (bodyEl) {
      bodyEl.classList.remove('fx-ok', 'fx-bad');
      void bodyEl.offsetWidth;
      bodyEl.classList.add(ok ? 'fx-ok' : 'fx-bad');
    }
    var lessonEl = LP.root.querySelector('.lesson');
    if (lessonEl) {
      lessonEl.classList.remove('fx-combo');
      if (ok && cur.combo >= 5) {
        lessonEl.classList.add('fx-combo');
        setTimeout(function () {
          if (lessonEl) lessonEl.classList.remove('fx-combo');
        }, 900);
      }
    }

    var npc = LP.game.npc(cur.langId);
    var foot = LP.root.querySelector('#foot');
    var isLast = cur.i >= cur.exercises.length - 1;
    var combo = ok && cur.combo >= 3 ? '连对 ' + cur.combo + ' 题' : '';
    foot.className = 'foot ' + (ok ? 'ok' : 'bad');
    foot.innerHTML =
      '<div class="fb">' +
        '<div class="fb-npc">' + npc.emoji + '</div>' +
        '<div class="fb-txt">' +
          '<div class="fb-title">' + (ok ? '✅ ' + esc(LP.game.react(true)) : '❌ 正确答案：' + esc(correctText || '')) + '</div>' +
          '<div class="fb-sub">' + (ok
            ? (combo ? '<span class="fb-combo">' + combo + '</span>' : '记住了，继续')
            : esc(LP.game.react(false)) + ' · 已把它安排进复习计划') + '</div>' +
        '</div>' +
      '</div>' +
      '<button class="btn ' + (ok ? 'primary' : 'danger') + '" id="next">' + (isLast ? '完成' : '继续') + '</button>';
    foot.querySelector('#next').addEventListener('click', function () {
      var wrong = !ok;
      var exNow = cur.exercises[cur.i];
      if (wrong && exNow.type !== 'match' && !exNow.requeued && cur.requeued < 8) {
        var clone = Object.assign({}, exNow, { requeued: true });
        cur.exercises.splice(Math.min(cur.i + 3, cur.exercises.length), 0, clone);
        cur.requeued++;
      }
      cur.i++;
      renderQuestion();
    });
  }

  /* ---------------- 选择题 ---------------- */

  function renderChoice(body, foot, ex) {
    var front = ex.dir === 'zh2t'
      ? '<div class="ex-word">' + esc(ex.item.t) + '</div>'
      : '<div class="ex-word">' + esc(ex.item.w) + '</div>' +
        '<button class="speak big" id="play">🔊</button>';

    body.innerHTML =
      '<div class="ex">' +
        '<div class="ex-kicker">' + ex.prompt + '</div>' +
        '<div class="ex-prompt">' + front + '</div>' +
        '<div class="choices">' +
          ex.options.map(function (o, i) {
            return '<button class="choice" data-opt="' + i + '">' + esc(o) + '</button>';
          }).join('') +
        '</div>' +
      '</div>';

    var play = body.querySelector('#play');
    if (play) play.addEventListener('click', function () {
      LP.ex.speak(ex.item.w, cur.course.tts, LP.store.getState().profile.rate);
    });

    var selected = null;
    var check = defaultFoot();
    body.querySelectorAll('[data-opt]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (cur.answered) return;
        selected = Number(b.getAttribute('data-opt'));
        body.querySelectorAll('[data-opt]').forEach(function (x) { x.classList.remove('sel'); });
        b.classList.add('sel');
        check.disabled = false;
      });
    });

    check.addEventListener('click', function () {
      if (cur.answered || selected === null) return;
      var ok = LP.ex.norm(ex.options[selected]) === LP.ex.norm(ex.answer);
      body.querySelectorAll('[data-opt]').forEach(function (b, i) {
        var o = ex.options[i];
        if (LP.ex.norm(o) === LP.ex.norm(ex.answer)) b.classList.add('ok');
        else if (i === selected) b.classList.add('bad');
        b.disabled = true;
      });
      feedback(ok, ex, ex.answer);
    });
  }

  /* ---------------- 听力 ---------------- */

  function renderListen(body, foot, ex) {
    body.innerHTML =
      '<div class="ex">' +
        '<div class="ex-kicker">' + ex.prompt + '</div>' +
        '<button class="listen-btn" id="play"><span class="huge">🔊</span><span>点击重听</span></button>' +
        '<div class="choices">' +
          ex.options.map(function (o, i) {
            return '<button class="choice center" data-opt="' + i + '">' + esc(o) + '</button>';
          }).join('') +
        '</div>' +
      '</div>';

    function play() {
      if (!cur) return;
      LP.ex.speak(ex.item.w, cur.course.tts, LP.store.getState().profile.rate);
    }
    body.querySelector('#play').addEventListener('click', play);
    setTimeout(play, 320);

    var selected = null;
    var check = defaultFoot();
    body.querySelectorAll('[data-opt]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (cur.answered) return;
        selected = Number(b.getAttribute('data-opt'));
        body.querySelectorAll('[data-opt]').forEach(function (x) { x.classList.remove('sel'); });
        b.classList.add('sel');
        check.disabled = false;
      });
    });
    check.addEventListener('click', function () {
      if (cur.answered || selected === null) return;
      var ok = LP.ex.norm(ex.options[selected]) === LP.ex.norm(ex.answer);
      body.querySelectorAll('[data-opt]').forEach(function (b, i) {
        var o = ex.options[i];
        if (LP.ex.norm(o) === LP.ex.norm(ex.answer)) b.classList.add('ok');
        else if (i === selected) b.classList.add('bad');
        b.disabled = true;
      });
      feedback(ok, ex, ex.answer);
    });
  }

  /* ---------------- 连词成句 ---------------- */

  function renderOrder(body, foot, ex) {
    var tokens = ex.tokens;
    var placed = [];

    body.innerHTML =
      '<div class="ex">' +
        '<div class="ex-kicker">' + ex.prompt + '</div>' +
        '<div class="ex-hint">把下面打乱的词排成：' + esc(ex.hint) + '</div>' +
        '<div class="order-answer" id="oa"></div>' +
        '<div class="bank" id="bank"></div>' +
      '</div>';

    var oa = body.querySelector('#oa');
    var bank = body.querySelector('#bank');
    var check = defaultFoot();

    function draw() {
      oa.innerHTML = placed.map(function (id, k) {
        return '<button class="tok placed" data-back="' + k + '">' + esc(tokens[id]) + '</button>';
      }).join('');
      bank.innerHTML = tokens.map(function (t, id) {
        if (placed.indexOf(id) >= 0) return '';
        return '<button class="tok" data-add="' + id + '">' + esc(t) + '</button>';
      }).join('');

      bank.querySelectorAll('[data-add]').forEach(function (b) {
        b.addEventListener('click', function () {
          if (cur.answered) return;
          placed.push(Number(b.getAttribute('data-add')));
          draw();
          check.disabled = placed.length !== tokens.length;
        });
      });
      oa.querySelectorAll('[data-back]').forEach(function (b) {
        b.addEventListener('click', function () {
          if (cur.answered) return;
          placed.splice(Number(b.getAttribute('data-back')), 1);
          draw();
          check.disabled = placed.length !== tokens.length;
        });
      });
    }

    draw();
    check.addEventListener('click', function () {
      if (cur.answered || placed.length !== tokens.length) return;
      var made = placed.map(function (id) { return tokens[id]; }).join(' ');
      var ok = LP.ex.norm(made) === LP.ex.norm(ex.answer);
      check.disabled = true;
      feedback(ok, ex, ex.answer);
    });
  }

  /* ---------------- 拼写 ---------------- */

  function renderType(body, foot, ex) {
    body.innerHTML =
      '<div class="ex">' +
        '<div class="ex-kicker">' + ex.prompt + '</div>' +
        '<div class="ex-word">' + esc(ex.hint) + '</div>' +
        '<input class="text-input big" id="tin" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="用外语写出来…">' +
      '</div>';

    var input = body.querySelector('#tin');
    var check = defaultFoot();
    input.addEventListener('input', function () { check.disabled = !input.value.trim(); });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !check.disabled) check.click(); });
    setTimeout(function () { input.focus(); }, 60);

    check.addEventListener('click', function () {
      if (cur.answered) return;
      var ok = LP.ex.norm(input.value) === LP.ex.norm(ex.answer);
      input.disabled = true;
      check.disabled = true;
      feedback(ok, ex, ex.answer);
    });
  }

  /* ---------------- 配对 ---------------- */

  function renderMatch(body, foot, ex) {
    var left = ex.pairs.map(function (p, i) {
      return '<button class="mtile" data-f="' + i + '">' + esc(p.front) + '</button>';
    }).join('');
    var backs = ex.pairs.map(function (p, i) { return { t: p.back, i: i }; });
    LP.util.shuffle(backs);
    var right = backs.map(function (b) {
      return '<button class="mtile" data-b="' + b.i + '">' + esc(b.t) + '</button>';
    }).join('');

    body.innerHTML =
      '<div class="ex">' +
        '<div class="ex-kicker">' + ex.prompt + '</div>' +
        '<div class="ex-hint">先点左边，再点右边，连对的会自动消失</div>' +
        '<div class="match"><div class="mcol">' + left + '</div><div class="mcol">' + right + '</div></div>' +
      '</div>';

    foot.className = 'foot';
    foot.innerHTML = '<button class="btn" disabled>全部配对后继续</button>';

    var selF = null;
    var matched = 0;
    var errors = 0;

    function record(i, ok) { LP.store.recordAnswer(cur.langId, ex.pairs[i].item, ok); }

    body.querySelectorAll('[data-f]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.classList.contains('matched') || cur.answered) return;
        selF = Number(b.getAttribute('data-f'));
        body.querySelectorAll('[data-f]').forEach(function (x) { x.classList.remove('sel'); });
        b.classList.add('sel');
      });
    });

    body.querySelectorAll('[data-b]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.classList.contains('matched') || cur.answered) return;
        if (selF === null) { LP.toast('先点左边的一个词'); return; }
        var i = Number(b.getAttribute('data-b'));
        if (i === selF) {
          matched++;
          body.querySelector('[data-f="' + selF + '"]').classList.add('matched');
          b.classList.add('matched');
          record(i, true);
          selF = null;
          if (matched === ex.pairs.length) {
            cur.answered = true;
            cur.answers++;
            if (errors === 0) cur.correct++; else cur.mistakes.push(ex.pairs[0].item);
            setProgress(true);
            var f = LP.root.querySelector('#foot');
            f.className = 'foot ' + (errors === 0 ? 'ok' : 'bad');
            f.innerHTML = '<div class="fb"><div class="fb-title">' +
              (errors === 0 ? '✅ 全部配对正确！' : '配对完成，错了 ' + errors + ' 次') +
              '</div><div class="fb-sub">' + (errors === 0 ? '继续' : '错过的词已安排复习') + '</div></div>' +
              '<button class="btn primary" id="next">' + (cur.i >= cur.exercises.length - 1 ? '完成' : '继续') + '</button>';
            f.querySelector('#next').addEventListener('click', function () { cur.i++; renderQuestion(); });
          }
        } else {
          errors++;
          b.classList.add('badflash');
          body.querySelector('[data-f="' + selF + '"]').classList.add('badflash');
          record(selF, false);
          selF = null;
          setTimeout(function () {
            body.querySelectorAll('.badflash').forEach(function (x) { x.classList.remove('badflash'); });
          }, 420);
        }
      });
    });
  }

  /* ---------------- 口语跟读组件 ---------------- */

  function speakWidget(mount, ex, opts) {
    opts = opts || {};
    var caps = LP.speech.caps();
    var st = { phase: 'idle', url: '', timer: null, t0: 0, ms: 0, score: null, heard: '', self: 0, recog: null };

    mount.innerHTML =
      '<div class="spk">' +
        '<div class="say-card">' +
          '<div class="say-text">' + esc(ex.text) + '</div>' +
          '<div class="say-tr">' + esc(ex.tr || '') + '</div>' +
        '</div>' +
        '<div class="spk-actions">' +
          '<button class="spk-listen" id="sListen">🔊 听标准读法</button>' +
          '<button class="spk-listen slow" id="sSlow">🐢 慢速</button>' +
        '</div>' +
        '<button class="rec" id="sRec"><span class="rec-ico">🎤</span><span class="rec-txt">点击开始跟读</span></button>' +
        '<div class="rec-tip" id="sTip">对着手机或电脑大声读出来</div>' +
        '<div class="rec-res" id="sRes" hidden>' +
          '<audio class="s-audio" id="sAudio" controls hidden></audio>' +
          '<div class="s-dur" id="sDur"></div>' +
          '<div class="s-score" id="sScore"></div>' +
          '<div class="rate-label">自己听一遍，像不像？</div>' +
          '<div class="rate-row">' +
            '<button data-self="3">👍 很像</button>' +
            '<button data-self="2">🙂 还行</button>' +
            '<button data-self="1">😅 不太像</button>' +
          '</div>' +
          '<button class="ghost sm s-again" id="sAgain">再录一次</button>' +
        '</div>' +
        '<button class="ghost sm s-skip" id="sSkip" hidden>本机不支持录音 · 跳过跟读</button>' +
        '<div class="mic-note" id="sNote"></div>' +
      '</div>';

    var recBtn = mount.querySelector('#sRec');
    var tip = mount.querySelector('#sTip');
    var resBox = mount.querySelector('#sRes');
    var note = mount.querySelector('#sNote');
    var skip = mount.querySelector('#sSkip');
    var audio = mount.querySelector('#sAudio');

    if (!caps.record) {
      recBtn.style.display = 'none';
      skip.hidden = false;
      if (caps.reason === 'secure') note.textContent = '当前不是安全环境（https / localhost），浏览器禁止麦克风；部署到 https 后再练口语才稳定。';
      else if (caps.reason === 'browser') note.textContent = '这个浏览器不支持网页录音；安卓用 Chrome、iOS 用 Safari 打开即可。';
      else note.textContent = '这台设备暂时无法录音。';
    } else if (!caps.recognize) {
      note.textContent = '本浏览器不支持语音识别，会先用「录音 + 回放自评」，这不影响练习。';
    }

    mount.querySelector('#sListen').addEventListener('click', function () {
      LP.ex.speak(ex.text, cur.course.tts, LP.store.getState().profile.rate);
    });
    mount.querySelector('#sSlow').addEventListener('click', function () {
      LP.ex.speak(ex.text, cur.course.tts, Math.min(0.7, (LP.store.getState().profile.rate || 0.95) - 0.15));
    });

    function paintTip() {
      var s = Math.round(st.ms / 100) / 10;
      tip.textContent = '录音中 ' + s.toFixed(1) + ' 秒 · 再点一下结束';
    }

    function begin() {
      st.phase = 'busy';
      recBtn.classList.add('rec-on');
      recBtn.querySelector('.rec-txt').textContent = '正在打开麦克风…';
      if (st.url) { try { URL.revokeObjectURL(st.url); } catch (e) {} st.url = ''; }
      resBox.hidden = true;
      skip.hidden = true;
      LP.speech.startRecord().then(function (r) {
        if (!r.ok) {
          st.phase = 'idle';
          recBtn.classList.remove('rec-on');
          recBtn.querySelector('.rec-txt').textContent = '🎤 再试一次';
          tip.textContent = r.reason === 'denied'
            ? '麦克风权限被拒绝，请在浏览器设置里允许后重试'
            : '麦克风打不开，换个浏览器或用 https 访问再试';
          skip.hidden = false;
          return;
        }
        st.phase = 'recording';
        st.t0 = Date.now();
        st.ms = 0;
        paintTip();
        st.timer = setInterval(function () { st.ms = Date.now() - st.t0; paintTip(); }, 200);
        if (caps.recognize) st.recog = LP.speech.recognize(cur.course.tts, 9000);
      });
    }

    function end() {
      if (st.timer) { clearInterval(st.timer); st.timer = null; }
      st.phase = 'busy';
      recBtn.classList.remove('rec-on');
      recBtn.querySelector('.rec-txt').textContent = '处理录音…';
      tip.textContent = '正在保存…';
      LP.speech.stopRecord().then(function (r) {
        if (!r.ok || r.ms < 400) {
          st.phase = 'idle';
          recBtn.querySelector('.rec-txt').textContent = '🎤 再试一次';
          tip.textContent = '这次太短了，完整读一遍再结束';
          return;
        }
        st.ms = r.ms;
        st.url = r.url;
        if (r.url) { audio.src = r.url; audio.hidden = false; }
        var wait = st.recog || Promise.resolve(null);
        wait.then(function (rr) {
          if (rr && rr.ok && rr.text) {
            st.heard = rr.text;
            var sc = LP.speech.scoreSay(ex.text, rr.text);
            st.score = sc.pct;
          }
          showResult();
        });
      });
    }

    function showResult() {
      st.phase = 'done';
      recBtn.style.display = 'none';
      resBox.hidden = false;
      mount.querySelector('#sDur').textContent = '你录了 ' + (st.ms / 1000).toFixed(1) + ' 秒';

      var scoreEl = mount.querySelector('#sScore');
      if (st.score != null) {
        scoreEl.textContent = '识别到：' + st.heard + ' · 匹配 ' + st.score + '%';
        scoreEl.className = 's-score ' + (st.score >= 60 ? 'good' : 'meh');
      } else {
        scoreEl.textContent = caps.recognize
          ? '这次没识别到文字，听一遍自己的录音再评价'
          : '这台设备没有语音识别，听一遍自己的录音再评价';
        scoreEl.className = 's-score';
      }

      mount.querySelectorAll('[data-self]').forEach(function (b) {
        b.addEventListener('click', function () {
          st.self = Number(b.getAttribute('data-self'));
          mount.querySelectorAll('[data-self]').forEach(function (x) { x.classList.remove('on'); });
          b.classList.add('on');
          if (opts.onReady) {
            opts.onReady({
              ok: st.self >= 2 || (st.score != null && st.score >= 60),
              score: st.score,
              self: st.self,
              ms: st.ms,
              heard: st.heard,
              skipped: false
            });
          }
        });
      });
    }

    recBtn.addEventListener('click', function () {
      if (st.phase === 'recording') end();
      else if (st.phase === 'idle') begin();
    });

    mount.querySelector('#sAgain').addEventListener('click', function () {
      resBox.hidden = true;
      recBtn.style.display = '';
      recBtn.querySelector('.rec-txt').textContent = '🎤 再录一次';
      st.phase = 'idle';
      st.url = '';
    });

    skip.addEventListener('click', function () {
      if (st.phase === 'done' && st.self) return;
      if (opts.onReady) opts.onReady({ ok: true, score: null, self: 0, ms: 0, heard: '', skipped: true });
    });
  }

  /* ---------------- 口语题 ---------------- */

  function renderSpeak(body, foot, ex) {
    body.innerHTML =
      '<div class="ex">' +
        '<div class="ex-kicker">' + ex.prompt + '</div>' +
        '<div id="spkMount"></div>' +
      '</div>';

    var check = defaultFoot();
    check.textContent = '检查';
    check.disabled = true;

    speakWidget(body.querySelector('#spkMount'), ex, {
      onReady: function (r) {
        ex.result = r;
        check.disabled = false;
      }
    });

    check.addEventListener('click', function () {
      if (cur.answered || !ex.result) return;
      check.disabled = true;
      var r = ex.result;
      var ok = r.skipped ? true : !!(r.ok);
      var sub = r.skipped
        ? '本机没有麦克风，这次只做了听读；换设备后可以补练口语'
        : '录音 ' + (r.ms / 1000).toFixed(1) + ' 秒 · ' +
          (r.score != null ? '匹配 ' + r.score + '%' : '已自评 ' + (r.self === 3 ? '很像' : r.self === 2 ? '还行' : '不太像'));
      speakAnswer(ex, ok, sub);
    });
  }

  function speakAnswer(ex, ok, sub) {
    cur.answered = true;
    cur.answers++;
    cur.speakCount++;
    if (ok) cur.correct++;
    var score = 0;
    if (ex.result) {
      if (ex.result.score != null) score = ex.result.score;
      else if (ex.result.self) score = ex.result.self * 33;
    }
    cur.speakScores.push(score);
    LP.store.addSpeak(cur.langId, score, ok);
    setProgress(true);

    var foot = LP.root.querySelector('#foot');
    var isLast = cur.i >= cur.exercises.length - 1;
    foot.className = 'foot ' + (ok ? 'ok' : 'bad');
    foot.innerHTML =
      '<div class="fb">' +
        '<div class="fb-title">' + (ok ? '🎤 跟读完成！' : '🎤 录完了，但还不太像') + '</div>' +
        '<div class="fb-sub">' + esc(sub) + '</div>' +
      '</div>' +
      '<button class="btn ' + (ok ? 'primary' : 'danger') + '" id="next">' + (isLast ? '完成' : '继续') + '</button>';
    foot.querySelector('#next').addEventListener('click', function () { cur.i++; renderQuestion(); });
  }

  /* ---------------- 情景对话 ---------------- */

  function startDialogue(langId, dlgId) {
    var course = LP.store.getCourse(langId);
    if (!course) return;
    var dlg = null;
    (course.dialogues || []).forEach(function (d) { if (d.id === dlgId) dlg = d; });
    if (!dlg) { LP.toast('找不到这个情景'); return; }

    cur = {
      langId: langId,
      course: course,
      dialogue: dlg,
      mode: 'dialogue',
      step: 0,
      turns: {},
      answers: 0,
      correct: 0,
      speakCount: 0,
      speakScores: [],
      start: Date.now(),
      answered: false
    };

    LP.setLessonMode(true);
    LP.root.innerHTML =
      '<div class="lesson">' +
        '<div class="lesson-head">' +
          '<button class="icon-btn" id="quit">✕</button>' +
          '<div class="track"><i id="fill" style="width:0%"></i></div>' +
          '<div class="qcount" id="qcount">1/' + dlg.lines.length + '</div>' +
        '</div>' +
        '<div class="lesson-titlebar">' + esc(dlg.title) +
          '<span>' + esc(dlg.scene || '') + '</span></div>' +
        '<div class="lesson-body dlg-body">' +
          '<div class="dlg-scene">🗣️ ' + esc(dlg.setup || '进入场景，跟着提示对话') + '</div>' +
          '<div id="dlgHist"></div>' +
          '<div id="dlgTurn"></div>' +
        '</div>' +
      '</div>' +
      '<div class="foot" id="foot"></div>';

    LP.root.querySelector('#quit').addEventListener('click', function () {
      if (confirm('退出这个情景？本次对话不记录。')) {
        var id = cur ? cur.langId : 'en';
        cur = null;
        LP.go('#/' + id);
      }
    });
    renderDlgStep();
  }

  function dlgBubble(b) {
    return '<div class="bub ' + (b.who === 'npc' ? 'npc' : 'me') + '">' +
      '<div class="bub-who">' + (b.who === 'npc' ? '对方' : '你') + '</div>' +
      '<div class="bub-text">' + esc(b.text) + '</div>' +
      (b.tr ? '<div class="bub-tr">' + esc(b.tr) + '</div>' : '') +
      '</div>';
  }

  function renderDlgHistory() {
    var dlg = cur.dialogue;
    var out = '';
    for (var i = 0; i < cur.step; i++) {
      var line = dlg.lines[i];
      if (line.npc) out += dlgBubble({ who: 'npc', text: line.npc, tr: line.tr });
      else if (cur.turns[i]) out += dlgBubble({ who: 'me', text: cur.turns[i].text, tr: cur.turns[i].tr });
    }
    LP.root.querySelector('#dlgHist').innerHTML = out;
    var body = LP.root.querySelector('.dlg-body');
    if (body) body.scrollTop = body.scrollHeight;
  }

  function renderDlgStep() {
    var dlg = cur.dialogue;
    var turn = LP.root.querySelector('#dlgTurn');
    var foot = LP.root.querySelector('#foot');
    var qc = LP.root.querySelector('#qcount');
    var fill = LP.root.querySelector('#fill');

    if (cur.step >= dlg.lines.length) { finishDialogue(); return; }

    cur.answered = false;
    if (qc) qc.textContent = (cur.step + 1) + '/' + dlg.lines.length;
    if (fill) fill.style.width = Math.round(cur.step / dlg.lines.length * 100) + '%';
    renderDlgHistory();

    var line = dlg.lines[cur.step];
    foot.className = 'foot';
    foot.innerHTML = '';
    turn.innerHTML = '';

    if (line.npc) {
      turn.innerHTML = dlgBubble({ who: 'npc', text: line.npc, tr: line.tr });
      LP.ex.speak(line.npc, cur.course.tts, LP.store.getState().profile.rate);
      foot.innerHTML = '<button class="btn primary" id="dlgNext">继续</button>';
      foot.querySelector('#dlgNext').addEventListener('click', function () { cur.step++; renderDlgStep(); });
      return;
    }

    if (line.me) renderDlgChoice(line, turn, foot);
    else if (line.say) renderDlgSay(line, turn, foot);
    else { cur.step++; renderDlgStep(); }
  }

  function renderDlgChoice(line, turn, foot) {
    var opts = line.me;
    var order = opts.map(function (o, i) { return i; });
    LP.util.shuffle(order);

    turn.innerHTML =
      '<div class="dlg-ask">' + esc(line.ask || '你会怎么回答？') + '</div>' +
      order.map(function (i) {
        return '<button class="dchoice" data-ci="' + i + '">' + esc(opts[i].t) + '</button>';
      }).join('');

    foot.innerHTML = '<button class="btn" disabled id="dlgWait">选一句回答</button>';

    turn.querySelectorAll('[data-ci]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (cur.answered) return;
        var i = Number(b.getAttribute('data-ci'));
        var chosen = opts[i];
        var best = null;
        opts.forEach(function (o) { if (o.best) best = o; });
        cur.answered = true;
        cur.answers++;
        if (chosen.best) cur.correct++;
        cur.turns[cur.step] = { text: chosen.t, tr: chosen.tr };

        turn.querySelectorAll('[data-ci]').forEach(function (x) { x.classList.remove('sel', 'best', 'weak'); });
        b.classList.add(chosen.best ? 'best' : 'weak');

        foot.className = 'foot ' + (chosen.best ? 'ok' : 'bad');
        foot.innerHTML =
          '<div class="fb">' +
            '<div class="fb-title">' + (chosen.best ? '✅ 很自然' : '💡 对方能听懂，但更自然的说法是') + '</div>' +
            '<div class="fb-sub">' + (chosen.best ? esc(chosen.tr || '') :
              esc(best ? best.t : '') + ' · ' + esc(best ? (best.tr || '') : '')) + '</div>' +
          '</div>' +
          '<button class="btn primary" id="dlgNext">继续</button>';
        foot.querySelector('#dlgNext').addEventListener('click', function () { cur.step++; renderDlgStep(); });
      });
    });
  }

  function renderDlgSay(line, turn, foot) {
    turn.innerHTML =
      '<div class="dlg-say-hint">🗣️ 轮到你说：' + esc(line.hint || '照着这句话说出来') + '</div>' +
      '<div id="dlgSpk"></div>';

    var check = defaultFoot();
    check.textContent = '完成跟读';
    check.disabled = true;
    var done = false;

    speakWidget(turn.querySelector('#dlgSpk'), { text: line.say, tr: line.tr }, {
      onReady: function (r) {
        if (done) return;
        done = true;
        cur.turns[cur.step] = { text: line.say, tr: line.tr };
        cur.answers++;
        cur.speakCount++;
        var score = r.score != null ? r.score : (r.self || 0) * 33;
        cur.speakScores.push(score);
        LP.store.addSpeak(cur.langId, score, true);
        if (r.ok) cur.correct++;
        check.disabled = false;
        check.setAttribute('data-sub', r.skipped ? '本机没有麦克风，已跳过跟读' :
          ('录音 ' + (r.ms / 1000).toFixed(1) + ' 秒 · ' + (r.score != null ? '匹配 ' + r.score + '%' : '已自评')));
      }
    });

    check.addEventListener('click', function () {
      if (done === false) return;
      foot.className = 'foot ok';
      foot.innerHTML =
        '<div class="fb"><div class="fb-title">🎤 接上了！</div>' +
        '<div class="fb-sub">' + esc(check.getAttribute('data-sub') || '') + '</div></div>' +
        '<button class="btn primary" id="dlgNext">继续</button>';
      foot.querySelector('#dlgNext').addEventListener('click', function () { cur.step++; renderDlgStep(); });
    });
  }

  function finishDialogue() {
    var d = cur.dialogue;
    var acc = cur.answers ? Math.round(cur.correct / cur.answers * 100) : 100;
    var xp = 15 + (acc >= 90 ? 5 : 0) + cur.speakCount * 3;
    var speakCount = cur.speakCount;
    var avg = cur.speakScores.length
      ? Math.round(cur.speakScores.reduce(function (a, b) { return a + b; }, 0) / cur.speakScores.length)
      : 0;
    var langId = cur.langId;

    LP.store.markDialogueDone(langId, d.id, acc);
    LP.store.addXp(xp);
    cur = null;

    LP.root.innerHTML =
      '<div class="result">' +
        '<div class="res-emoji">' + (acc >= 90 ? '🌟' : '🗣️') + '</div>' +
        '<h1>情景通关！</h1>' +
        '<div class="res-sub">' + esc(d.title) + ' · ' + esc(d.scene || '') + '</div>' +
        '<div class="res-stats">' +
          '<div><b>+' + xp + '</b><span>XP</span></div>' +
          '<div><b>' + acc + '%</b><span>应对质量</span></div>' +
          '<div><b>' + speakCount + '</b><span>开口轮数</span></div>' +
        '</div>' +
        '<div class="card res-words"><div class="card-title">口语反馈</div>' +
          '<div class="rw"><span>跟读匹配/自评平均</span><em>' + (avg ? avg + ' 分' : '未启用录音') + '</em></div>' +
          '<div class="rw"><span>这一段情景</span><em>' + esc(d.title) + '</em></div>' +
        '</div>' +
        '<button class="btn primary" id="resBack">返回路径</button>' +
        '<button class="ghost" id="resAgain">再说一次</button>' +
      '</div>';

    LP.root.querySelector('#resBack').addEventListener('click', function () { LP.go('#/' + langId); });
    LP.root.querySelector('#resAgain').addEventListener('click', function () { LP.startDialogue(langId, d.id); });
  }

  /* ---------------- 结算 ---------------- */

  function finish() {
    var total = cur.exercises.length;
    var acc = cur.answers ? Math.round(cur.correct / cur.answers * 100) : 100;
    var speakAvg = cur.speakScores.length
      ? Math.round(cur.speakScores.reduce(function (a, b) { return a + b; }, 0) / cur.speakScores.length)
      : 0;
    var took = Date.now() - cur.start;
    var mode = cur.mode;
    var level = cur.level;

    var xp = 10;
    if (mode === 'review') xp = 5;
    else if (mode === 'speak') xp = 8;
    else if (mode === 'sound') xp = 10;
    else if (mode === 'exam') xp = 30;
    if (acc === 100) xp += 5;

    var examPassedNow = null;
    if (mode === 'exam') {
      examPassedNow = acc >= 80;
      LP.store.saveExam(cur.langId, level, acc, examPassedNow);
      if (examPassedNow) xp += 20;
    }
    var soundPassedNow = null;
    if (mode === 'sound') {
      soundPassedNow = acc >= 80;
      LP.store.markSoundDone(cur.langId, cur.stageId, acc, soundPassedNow);
    }

    LP.store.addXp(xp);
    if (examPassedNow) LP.sfx.levelUp();
    if (mode === 'lesson') LP.store.markLessonDone(cur.langId, cur.lesson.id, acc);
    else LP.store.touchStreak();

    var nextLesson = null;
    if (mode === 'lesson' && cur.flatIdx >= 0) {
      var flat = LP.store.flatLessons(cur.course);
      if (flat[cur.flatIdx + 1]) nextLesson = flat[cur.flatIdx + 1].lesson;
    }

    var langId = cur.langId;
    var nextId = nextLesson ? nextLesson.id : null;
    var speakCount = cur.speakCount;
    var title = cur.lesson.title;
    var stageId = cur.stageId;
    cur = null;

    var speakLine = speakCount
      ? '<div class="res-speak">🎤 本关开口 ' + speakCount + ' 次' +
        (speakAvg ? ' · 平均匹配/自评 ' + speakAvg + ' 分' : '') + '</div>'
      : '';

    if (mode === 'exam') {
      LP.root.innerHTML =
        '<div class="result">' +
          '<div class="res-emoji">' + (examPassedNow ? '🏅' : '📉') + '</div>' +
          '<h1>' + (examPassedNow ? level + ' 认证通过' : '还差一点') + '</h1>' +
          '<div class="res-sub">' + esc(title) + ' · ' + acc + ' 分' +
            (examPassedNow ? '，已解锁下一级内容' : '，80 分及格，再练一轮就能过') + '</div>' +
          '<div class="res-stats">' +
            '<div><b>' + acc + '</b><span>总分</span></div>' +
            '<div><b>' + speakAvg + '</b><span>口语分</span></div>' +
            '<div><b>' + LP.util.mmss(took) + '</b><span>用时</span></div>' +
          '</div>' +
          '<div class="card res-words"><div class="card-title">对应水平</div>' +
            '<div class="rw"><span>' + esc(level) + '</span><em>' + esc(LP.examMap(langId, level) || '') + '</em></div>' +
          '</div>' +
          (examPassedNow ? '' : '<button class="btn primary" id="resAgain">再考一次</button>') +
          '<button class="btn' + (examPassedNow ? ' primary' : '') + '" id="resBack">返回路径</button>' +
        '</div>';
      var again = LP.root.querySelector('#resAgain');
      if (again) again.addEventListener('click', function () { LP.startExam(langId, level); });
      LP.root.querySelector('#resBack').addEventListener('click', function () { LP.go('#/' + langId); });
      return;
    }

    if (mode === 'sound') {
      var cs = LP.store.getCourse(langId);
      var stg = null;
      (cs && cs.sounds ? cs.sounds : []).forEach(function (st) { if (st.id === stageId) stg = st; });
      var stageLevel = stg ? (stg.level || 'A1') : 'A1';
      var prog = LP.store.levelProgress(langId, stageLevel);
      LP.root.innerHTML =
        '<div class="result">' +
          '<div class="res-emoji">' + (soundPassedNow ? '🎧' : '🔁') + '</div>' +
          '<h1>' + (soundPassedNow ? '发音关完成！' : '再练一次就过了') + '</h1>' +
          '<div class="res-sub">' + esc(title) + ' · ' + acc + ' 分' +
            (soundPassedNow ? '，已计入 ' + stageLevel + ' 进度' : '，80 分及格') + '</div>' +
          '<div class="res-stats">' +
            '<div><b>+' + xp + '</b><span>XP</span></div>' +
            '<div><b>' + acc + '%</b><span>正确率</span></div>' +
            '<div><b>' + LP.util.mmss(took) + '</b><span>用时</span></div>' +
          '</div>' +
          '<div class="card res-words"><div class="card-title">' + stageLevel + ' 完成条件</div>' +
            '<div class="rw"><span>单元</span><em>' + prog.lessonsDone + '/' + prog.lessonsTotal + ' 关</em></div>' +
            '<div class="rw"><span>发音课</span><em>' + prog.soundsDone + '/' + prog.soundsTotal + ' 节合格</em></div>' +
            '<div class="rw"><span>等级考核</span><em>' + (prog.examPassed ? '已通过' : '未通过') + '</em></div>' +
          '</div>' +
          '<button class="btn ' + (soundPassedNow ? '' : 'primary') + '" id="resAgain">再练这一节</button>' +
          '<button class="btn ' + (soundPassedNow ? 'primary' : '') + '" id="resBack">返回路径</button>' +
        '</div>';
      LP.root.querySelector('#resAgain').addEventListener('click', function () {
        LP.startSound(langId, stageId);
      });
      LP.root.querySelector('#resBack').addEventListener('click', function () { LP.go('#/' + langId); });
      return;
    }

    LP.root.innerHTML =
      '<div class="result">' +
        '<div class="res-emoji">' + (acc >= 100 ? '🏆' : '🎉') + '</div>' +
        '<h1>' + (mode === 'review' ? '复习完成！' : mode === 'speak' ? '口语练习完成！' : '关卡完成！') + '</h1>' +
        '<div class="res-sub">' + esc(title) + ' · ' + (acc >= 100 ? '全对，太强了' : '继续保持') + '</div>' +
        '<div class="res-stats">' +
          '<div><b>+' + xp + '</b><span>XP</span></div>' +
          '<div><b>' + acc + '%</b><span>正确率</span></div>' +
          '<div><b>' + LP.util.mmss(took) + '</b><span>用时</span></div>' +
        '</div>' +
        speakLine +
        '<button class="btn" id="resNext">' + (nextId ? '继续下一关' : '返回路径') + '</button>' +
        '<button class="ghost" id="resBack">返回路径</button>' +
        '<div class="res-streak">🔥 连续学习 ' + LP.store.streakNow() + ' 天</div>' +
      '</div>';

    LP.root.querySelector('#resNext').addEventListener('click', function () {
      if (nextId) LP.startLesson(langId, nextId, 'lesson');
      else LP.go('#/' + langId);
    });
    LP.root.querySelector('#resBack').addEventListener('click', function () { LP.go('#/' + langId); });
  }

  LP.startLesson = start;
  LP.startDialogue = startDialogue;
  LP.startExam = function (langId, level) { start(langId, null, 'exam', { level: level }); };
  LP.startSound = function (langId, stageId) { start(langId, null, 'sound', { stageId: stageId }); };
})();
