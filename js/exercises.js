/* 发音（浏览器自带语音合成，零成本） + 出题引擎 */
(function () {
  var voices = [];

  function loadVoices() {
    try { voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : []; } catch (e) { voices = []; }
  }
  if (window.speechSynthesis) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  function speak(text, langCode, rate) {
    if (!text) return false;
    if (!('speechSynthesis' in window)) return false;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = langCode || 'en-US';
      u.rate = rate || 0.95;
      var base = u.lang.split('-')[0];
      var v = voices.filter(function (x) { return x.lang === u.lang; })[0]
        || voices.filter(function (x) { return x.lang && x.lang.indexOf(base) === 0; })[0];
      if (v) u.voice = v;
      window.speechSynthesis.speak(u);
      return true;
    } catch (e) {
      return false;
    }
  }

  function hasVoice(langCode) {
    if (!window.speechSynthesis) return false;
    var base = (langCode || '').split('-')[0];
    return voices.some(function (v) { return v.lang && v.lang.indexOf(base) === 0; });
  }

  function norm(s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[.!?。！？,，、;；:：¡¿"“”]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function allItems(course) {
    var out = [];
    if (!course) return out;
    course.units.forEach(function (u) {
      (u.lessons || []).forEach(function (l) {
        (l.items || []).forEach(function (it) {
          out.push({ w: it.w, t: it.t, e: it.e || '', et: it.et || '', p: it.p || '', lessonId: l.id });
        });
      });
    });
    return out;
  }

  function pickTexts(item, all, field, n) {
    var seen = [norm(item[field])];
    var cand = [];
    all.forEach(function (o) {
      if (!o[field]) return;
      if (o.w === item.w) return;
      var k = norm(o[field]);
      if (!k) return;
      if (seen.indexOf(k) >= 0) return;
      seen.push(k);
      cand.push(o[field]);
    });
    LP.util.shuffle(cand);
    return cand.slice(0, n);
  }

  function makeChoice(item, all, dir) {
    var correct = dir === 'zh2t' ? item.w : item.t;
    var opts = [correct].concat(pickTexts(item, all, dir === 'zh2t' ? 'w' : 't', 3));
    LP.util.shuffle(opts);
    return {
      type: 'choice',
      item: item,
      dir: dir,
      options: opts,
      answer: correct,
      prompt: dir === 'zh2t' ? '选择正确的外语' : '选择正确的中文意思'
    };
  }

  function makeListen(item, all, langCode) {
    var opts = [item.w].concat(pickTexts(item, all, 'w', 3));
    LP.util.shuffle(opts);
    return {
      type: 'listen',
      item: item,
      options: opts,
      answer: item.w,
      audio: item.w,
      lang: langCode,
      prompt: '听发音，选出你听到的词'
    };
  }

  /* 听整句选意思：练的是“听懂一段话”，不是听写单词 */
  function makeListenSentence(item, all, langCode) {
    var correct = item.et || item.t;
    var opts = [correct].concat(pickTexts(item, all, 'et', 3).filter(function (o) { return o; }));
    LP.util.shuffle(opts);
    return {
      type: 'listen',
      item: item,
      options: opts,
      answer: correct,
      audio: item.e || item.w,
      lang: langCode,
      prompt: '听句子，选出最接近的意思'
    };
  }

  function tokensOf(sentence) {
    var s = String(sentence || '').replace(/[.!?。！？,，、;；:：]/g, ' ').replace(/\s+/g, ' ').trim();
    if (!s) return [];
    return s.split(' ');
  }

  function hasSentence(item) {
    return item && item.e && tokensOf(item.e).length >= 2;
  }

  function makeOrder(item) {
    var tokens = tokensOf(item.e);
    return {
      type: 'order',
      item: item,
      tokens: tokens,
      answer: tokens.join(' '),
      prompt: '连词成句',
      hint: item.et || item.t
    };
  }

  function canType(item) {
    return item && item.w && item.w.length <= 26;
  }

  function makeType(item) {
    return {
      type: 'type',
      item: item,
      answer: item.w,
      prompt: '写出对应的外语',
      hint: item.t
    };
  }

  function makeMatch(items) {
    var pairs = items.slice(0, 4).map(function (it) {
      return { item: it, front: it.w, back: it.t };
    });
    return { type: 'match', item: pairs[0].item, pairs: pairs, prompt: '点击配对' };
  }

  function makeSpeak(item) {
    var text = item.say || item.e || item.w;
    return {
      type: 'speak',
      item: item,
      text: text,
      tr: item.et || item.t,
      answer: text,
      prompt: '跟读 · 大声说出来'
    };
  }

  function itemsOfLevel(course, level) {
    var out = [];
    if (!course) return out;
    course.units.forEach(function (u) {
      if ((u.level || 'A1') !== level) return;
      (u.lessons || []).forEach(function (l) {
        (l.items || []).forEach(function (it) { out.push(it); });
      });
    });
    return out;
  }

  function countLevel(course, level) {
    return itemsOfLevel(course, level).length;
  }

  function buildByMode(mode, item, all, course) {
    if (mode === 'order' && hasSentence(item)) return makeOrder(item);
    if (mode === 'type' && course.typing !== false && canType(item)) return makeType(item);
    if (mode === 'listen') return makeListen(item, all, course.tts);
    return makeChoice(item, all, mode === 'zh2t' ? 'zh2t' : 't2zh');
  }

  function buildLesson(course, items) {
    var all = allItems(course);
    var ex = [];
    if (items.length >= 3) ex.push(makeMatch(items));
    items.forEach(function (it) { ex.push(makeChoice(it, all, 'zh2t')); });
    var second = items.slice();
    second.forEach(function (it, idx) {
      var modes = ['t2zh', 'listen'];
      if (course.order !== false && hasSentence(it)) modes.push('order');
      if (course.typing !== false && canType(it)) modes.push('type');
      ex.push(buildByMode(modes[idx % modes.length], it, all, course));
    });
    /* 每关 1–2 道跟读题：不开口就过不了关 */
    var speakable = items.filter(function (it) { return it && (it.say || it.e || it.w); });
    if (speakable.length) ex.push(makeSpeak(speakable[0]));
    if (speakable.length >= 5) ex.push(makeSpeak(speakable[speakable.length - 1]));
    return ex;
  }

  function buildReview(course, items) {
    var all = allItems(course);
    var ex = items.map(function (it, idx) {
      var modes = ['t2zh', 'listen'];
      if (course.order !== false && hasSentence(it)) modes.push('order');
      if (course.typing !== false && canType(it)) modes.push('type');
      return buildByMode(modes[idx % modes.length], it, all, course);
    });
    var withSentence = items.filter(function (it) { return it && (it.e || it.w); });
    if (withSentence.length) ex.push(makeSpeak(withSentence[0]));
    return ex;
  }

  /* 口语专项：只练“开口”，先听标准音，再跟读，再回放自评 */
  function buildSpeaking(course, items) {
    return items.slice(0, 8).map(makeSpeak);
  }

  /* 等级考核：听、读、写、说混合，80 分及格 */
  function buildExam(course, level) {
    var pool = itemsOfLevel(course, level).slice();
    if (pool.length < 6) return [];
    LP.util.shuffle(pool);
    var all = allItems(course);
    var ex = [];

    pool.slice(0, 6).forEach(function (it, i) {
      ex.push(makeChoice(it, all, i % 2 ? 'zh2t' : 't2zh'));
    });
    pool.slice(6, 10).forEach(function (it) { ex.push(makeListen(it, all, course.tts)); });

    var typePool = course.typing !== false ? pool.slice(10, 13) : pool.slice(10, 13);
    typePool.forEach(function (it) {
      if (course.typing !== false && canType(it)) ex.push(makeType(it));
      else ex.push(makeChoice(it, all, 't2zh'));
    });

    pool.filter(hasSentence).slice(0, 3).forEach(function (it) {
      if (course.order !== false) ex.push(makeOrder(it));
    });

    var matchPool = pool.slice(13, 17);
    if (matchPool.length < 4) matchPool = pool.slice(0, 4);
    ex.push(makeMatch(matchPool));

    var speakPool = pool.slice(17, 19);
    if (speakPool.length < 2) speakPool = pool.slice(0, 2);
    speakPool.forEach(function (it) { ex.push(makeSpeak(it)); });
    return ex;
  }

  /* 顶阶听力：整句精听，答完再跟读一遍 */
  function buildDrill(course, stage) {
    var all = allItems(course);
    var items = (stage && stage.items) || [];
    var ex = [];
    items.forEach(function (it) { ex.push(makeListenSentence(it, all, course.tts)); });
    if (items.length) ex.push(makeSpeak(items[0]));
    return ex;
  }

  /* 句型卡：能排语序的排语序，排不了（中日韩粤）就听整句选意思 */
  function buildPattern(course, items) {
    var all = allItems(course);
    var ex = [];
    items.forEach(function (it) {
      if (course.order !== false && hasSentence(it)) ex.push(makeOrder(it));
      else ex.push(makeListenSentence(it, all, course.tts));
    });
    if (items.length) ex.push(makeSpeak(items[0]));
    return ex;
  }

  /* 发音课：卡片认音 → 听例词辨音 → 拼读没学过的新词 */
  function soundLabel(it) {
    return it.ipa ? it.k + ' ' + it.ipa : it.k;
  }

  function makeRead(rw) {
    return {
      type: 'speak',
      item: { w: rw.w, t: rw.tr },
      text: rw.w,
      tr: rw.tr,
      answer: rw.w,
      prompt: '拼读 · 先拼再读，把这个新词念出来'
    };
  }

  function buildSound(course, stage) {
    var items = (stage && stage.items) || [];
    var ex = [];

    items.forEach(function (it) {
      ex.push({
        type: 'card',
        item: { w: it.ex, t: it.tr },
        sound: it,
        prompt: '认识这个音'
      });
    });

    items.slice(0, 4).forEach(function (it) {
      var options = [soundLabel(it)];
      items.forEach(function (o) {
        if (o === it) return;
        var lb = soundLabel(o);
        if (options.indexOf(lb) < 0) options.push(lb);
      });
      var rest = options.slice(1);
      LP.util.shuffle(rest);
      options = [soundLabel(it)].concat(rest.slice(0, 3));
      LP.util.shuffle(options);
      ex.push({
        type: 'listen',
        item: { w: it.ex, t: it.tr },
        options: options,
        answer: soundLabel(it),
        prompt: '听例词，选出它包含的音'
      });
    });

    (stage.read || []).slice(0, 3).forEach(function (rw) { ex.push(makeRead(rw)); });
    return ex;
  }

  LP.ex = {
    norm: norm,
    speak: speak,
    hasVoice: hasVoice,
    allItems: allItems,
    buildLesson: buildLesson,
    buildReview: buildReview,
    buildSpeaking: buildSpeaking,
    buildExam: buildExam,
    buildSound: buildSound,
    buildDrill: buildDrill,
    buildPattern: buildPattern,
    itemsOfLevel: itemsOfLevel,
    countLevel: countLevel,
    makeSpeak: makeSpeak,
    tokensOf: tokensOf,
    hasSentence: hasSentence
  };
})();
