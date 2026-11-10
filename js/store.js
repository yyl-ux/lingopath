/* 本机存档 + 间隔重复（SM-2 简化版） */
(function () {
  var KEY = 'lingopath.state.v1';
  var state = null;

  function defaults() {
    return {
      v: 1,
      onboarded: false,
      profile: { xp: 0, streak: 0, bestStreak: 0, lastDay: '', goal: 30, rate: 0.95 },
      days: {},
      langs: {},
      custom: {}
    };
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      if (LP.toast) LP.toast('保存失败：本机存储空间不足');
    }
  }

  function load() {
    var base = defaults();
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        state = Object.assign(base, parsed);
        state.profile = Object.assign(defaults().profile, parsed.profile || {});
        state.days = parsed.days || {};
        state.langs = parsed.langs || {};
        state.custom = parsed.custom || {};
      } else {
        state = base;
      }
    } catch (e) {
      state = defaults();
    }
    return state;
  }

  function S() { return state || load(); }

  function getLang(id) {
    if (!S().langs[id]) S().langs[id] = { lessons: {}, items: {} };
    var l = S().langs[id];
    if (!l.lessons) l.lessons = {};
    if (!l.items) l.items = {};
    if (!l.exams) l.exams = {};
    if (!l.dialogues) l.dialogues = {};
    if (!l.sounds) l.sounds = {};
    if (!l.speak) l.speak = { tries: 0, ok: 0, best: 0, last: 0 };
    return l;
  }

  function dayRec() {
    var t = LP.util.dayStr(0);
    if (!S().days[t]) S().days[t] = { xp: 0, lessons: 0 };
    return S().days[t];
  }

  function todayXp() {
    var t = LP.util.dayStr(0);
    return (S().days[t] && S().days[t].xp) || 0;
  }

  function streakNow() {
    var p = S().profile;
    var t = LP.util.dayStr(0), y = LP.util.dayStr(-1);
    return (p.lastDay === t || p.lastDay === y) ? (p.streak || 0) : 0;
  }

  function touchStreak() {
    var p = S().profile;
    var t = LP.util.dayStr(0);
    if (p.lastDay === t) return;
    p.streak = (p.lastDay === LP.util.dayStr(-1)) ? (p.streak || 0) + 1 : 1;
    p.lastDay = t;
    p.bestStreak = Math.max(p.bestStreak || 0, p.streak);
    save();
  }

  function addXp(n) {
    n = Math.round(n);
    if (!n) return 0;
    S().profile.xp = (S().profile.xp || 0) + n;
    dayRec().xp = (dayRec().xp || 0) + n;
    save();
    return n;
  }

  /* ---------- 间隔重复 ---------- */

  function srsFor(langId, item) {
    var l = getLang(langId);
    var rec = l.items[item.w];
    if (!rec) {
      rec = l.items[item.w] = {
        w: item.w, t: item.t, e: item.e || '', et: item.et || '', p: item.p || '',
        reps: 0, ease: 2.5, interval: 0, due: 0, lapses: 0, seen: 0, right: 0
      };
    }
    if (item.e && !rec.e) rec.e = item.e;
    if (item.et && !rec.et) rec.et = item.et;
    return rec;
  }

  function recordAnswer(langId, item, ok) {
    if (!item || !item.w) return;
    var rec = srsFor(langId, item);
    rec.seen++;
    if (ok) rec.right++;
    if (ok) {
      rec.reps++;
      if (rec.reps === 1) rec.interval = 1;
      else if (rec.reps === 2) rec.interval = 3;
      else rec.interval = Math.min(365, Math.round(rec.interval * rec.ease));
      rec.ease = Math.min(2.9, rec.ease + 0.08);
    } else {
      rec.reps = 0;
      rec.lapses++;
      rec.interval = 0.0104; /* 约 15 分钟后再练 */
      rec.ease = Math.max(1.3, rec.ease - 0.2);
    }
    rec.due = Date.now() + rec.interval * 86400000;
    save();
  }

  function dueItems(langId) {
    var l = getLang(langId);
    var now = Date.now();
    var out = [];
    Object.keys(l.items).forEach(function (k) {
      var r = l.items[k];
      if (r.seen > 0 && r.due <= now) out.push(r);
    });
    out.sort(function (a, b) { return a.due - b.due; });
    return out;
  }

  function strength(r) {
    if (!r || !r.seen) return 0;
    return Math.min(1, (r.reps || 0) / 4 + (r.right ? 0.05 : 0));
  }

  /* ---------- 课程与关卡 ---------- */

  function getCourse(langId) {
    var b = LP.getBuiltinCourse(langId);
    var custom = (S().custom && S().custom[langId]) || [];
    if (!b && !custom.length) return null;
    if (!b) {
      return { id: langId, name: langId, native: '', flag: '📚', tts: 'en-US', typing: false, order: true, units: custom };
    }
    if (!custom.length) return b;
    return Object.assign({}, b, { units: b.units.concat(custom) });
  }

  function flatLessons(course) {
    var out = [];
    if (!course) return out;
    course.units.forEach(function (u) {
      (u.lessons || []).forEach(function (l) {
        out.push({ unit: u, lesson: l });
      });
    });
    return out;
  }

  function stats(langId) {
    var course = getCourse(langId);
    var flat = flatLessons(course);
    var l = getLang(langId);
    var done = 0, learned = 0, examCount = 0, soundsDone = 0;
    flat.forEach(function (row) {
      if (l.lessons[row.lesson.id] && l.lessons[row.lesson.id].done) done++;
    });
    Object.keys(l.items).forEach(function (k) { if (l.items[k].seen > 0) learned++; });
    Object.keys(l.exams).forEach(function (k) { if (l.exams[k].passed) examCount++; });
    (course && course.sounds ? course.sounds : []).forEach(function (st) {
      if (l.sounds[st.id] && l.sounds[st.id].passed) soundsDone++;
    });
    return {
      total: flat.length,
      done: done,
      due: dueItems(langId).length,
      learned: learned,
      flat: flat,
      course: course,
      speak: l.speak,
      exams: l.exams,
      dialogues: l.dialogues,
      examCount: examCount,
      soundsDone: soundsDone,
      soundsTotal: (course && course.sounds ? course.sounds.length : 0)
    };
  }

  /* 本级完成度：单元全完成 + 发音课全合格 + 考核通过 */
  function levelProgress(langId, level) {
    var course = getCourse(langId);
    var l = getLang(langId);
    var lessonsTotal = 0, lessonsDone = 0, soundsTotal = 0, soundsDone = 0;
    if (course) {
      course.units.forEach(function (u) {
        if (u.custom || (u.level || 'A1') !== level) return;
        (u.lessons || []).forEach(function (les) {
          lessonsTotal++;
          if (l.lessons[les.id] && l.lessons[les.id].done) lessonsDone++;
        });
      });
      LP.soundsOf(course, level).forEach(function (st) {
        soundsTotal++;
        if (l.sounds[st.id] && l.sounds[st.id].passed) soundsDone++;
      });
    }
    return {
      lessonsDone: lessonsDone,
      lessonsTotal: lessonsTotal,
      soundsDone: soundsDone,
      soundsTotal: soundsTotal,
      examPassed: examPassed(langId, level),
      done: lessonsDone === lessonsTotal && soundsDone === soundsTotal
    };
  }

  function levelReady(langId, level) {
    var p = levelProgress(langId, level);
    return p.done && p.examPassed;
  }

  /* ---------- 等级 / 考核 / 口语 / 情景 ---------- */

  function examPassed(langId, level) {
    var l = getLang(langId);
    return !!(l.exams[level] && l.exams[level].passed);
  }

  function getExam(langId, level) {
    return getLang(langId).exams[level] || null;
  }

  function saveExam(langId, level, score, passed) {
    var l = getLang(langId);
    var rec = l.exams[level] || { tries: 0 };
    rec.tries = (rec.tries || 0) + 1;
    rec.last = score;
    rec.score = Math.max(rec.score || 0, score);
    rec.passed = !!(rec.passed || passed);
    rec.ts = Date.now();
    l.exams[level] = rec;
    save();
  }

  /* 发音课：过关（≥80 分）才算这一节完成 */
  function getSound(langId, stageId) {
    return getLang(langId).sounds[stageId] || null;
  }

  function markSoundDone(langId, stageId, acc, passed) {
    var l = getLang(langId);
    var rec = l.sounds[stageId] || { tries: 0 };
    rec.tries = (rec.tries || 0) + 1;
    rec.acc = Math.max(rec.acc || 0, acc || 0);
    rec.passed = !!(rec.passed || passed);
    rec.ts = Date.now();
    l.sounds[stageId] = rec;
    dayRec().lessons = (dayRec().lessons || 0) + 1;
    touchStreak();
    save();
  }

  function soundPassed(langId, stageId) {
    var r = getSound(langId, stageId);
    return !!(r && r.passed);
  }

  /* 上一级的单元、发音课、考核三项全部完成，下一级才解锁；A1 永远开放 */
  function levelOpen(langId, level) {
    var i = LP.levelIndex(level);
    if (i <= 0) return true;
    return levelReady(langId, LP.LEVEL_IDS[i - 1]);
  }

  function addSpeak(langId, score, ok) {
    var l = getLang(langId);
    var s = l.speak;
    s.tries = (s.tries || 0) + 1;
    if (ok) s.ok = (s.ok || 0) + 1;
    s.last = Math.round(score || 0);
    s.best = Math.max(s.best || 0, s.last);
    save();
  }

  function markDialogueDone(langId, id, acc) {
    var l = getLang(langId);
    var rec = l.dialogues[id] || { tries: 0 };
    rec.tries = (rec.tries || 0) + 1;
    rec.acc = Math.max(rec.acc || 0, acc || 0);
    rec.done = true;
    rec.ts = Date.now();
    l.dialogues[id] = rec;
    dayRec().lessons = (dayRec().lessons || 0) + 1;
    touchStreak();
    save();
  }

  function getDialogue(langId, id) {
    return getLang(langId).dialogues[id] || null;
  }

  function isUnlocked(flat, index, langId) {
    if (index <= 0) return true;
    var prev = flat[index - 1];
    var l = getLang(langId);
    return !!(l.lessons[prev.lesson.id] && l.lessons[prev.lesson.id].done);
  }

  function markLessonDone(langId, lessonId, acc) {
    var l = getLang(langId);
    var rec = l.lessons[lessonId] || { attempts: 0, acc: 0 };
    rec.attempts = (rec.attempts || 0) + 1;
    rec.acc = Math.max(rec.acc || 0, acc || 0);
    rec.done = true;
    rec.ts = Date.now();
    l.lessons[lessonId] = rec;
    dayRec().lessons = (dayRec().lessons || 0) + 1;
    touchStreak();
    save();
  }

  /* ---------- 自定义词表 ---------- */

  function parseWordList(text) {
    var items = [];
    String(text || '').split(/\r?\n/).forEach(function (line) {
      var s = line.trim();
      if (!s || s.charAt(0) === '#') return;
      var cols;
      if (s.indexOf('|') >= 0) cols = s.split('|');
      else if (s.indexOf('\t') >= 0) cols = s.split('\t');
      else cols = s.split(',');
      cols = cols.map(function (c) { return c.trim(); });
      if (!cols[0] || !cols[1]) return;
      var it = { w: cols[0], t: cols[1] };
      if (cols[2]) it.e = cols[2];
      if (cols[3]) it.et = cols[3];
      var p = cols[4];
      if (p) it.p = p;
      items.push(it);
    });
    return items;
  }

  function addCustomUnit(langId, title, items) {
    var units = S().custom[langId] || (S().custom[langId] = []);
    var n = 1;
    units.forEach(function (u) { n++; });
    var uid = 'cu' + Date.now() + n;
    var lessons = [];
    var size = 8;
    for (var i = 0; i < items.length; i += size) {
      var part = items.slice(i, i + size);
      var no = Math.floor(i / size) + 1;
      lessons.push({
        id: uid + '-l' + no,
        title: title + ' ' + no,
        items: part
      });
    }
    units.push({
      id: uid,
      title: title,
      desc: '你自己导入的词表 · ' + items.length + ' 词',
      color: '#1cb0f6',
      custom: true,
      lessons: lessons
    });
    save();
    return lessons.length;
  }

  function removeCustomUnit(langId, unitId) {
    var units = (S().custom && S().custom[langId]) || [];
    S().custom[langId] = units.filter(function (u) { return u.id !== unitId; });
    save();
  }

  /* ---------- 存档迁移 ---------- */

  function exportText() {
    return JSON.stringify({ app: 'LingoPath', version: 1, exportedAt: new Date().toISOString(), state: S() });
  }

  function importText(text) {
    var parsed = JSON.parse(text);
    var inc = parsed && parsed.state ? parsed.state : parsed;
    if (!inc || !inc.profile || !inc.langs) throw new Error('存档格式不正确');
    state = Object.assign(defaults(), inc);
    state.profile = Object.assign(defaults().profile, inc.profile || {});
    state.days = inc.days || {};
    state.langs = inc.langs || {};
    state.custom = inc.custom || {};
    save();
    return true;
  }

  function importCourseFile(text, langId) {
    var data = text && text.replace(/^\uFEFF/, '');
    var parsed = JSON.parse(data);
    var units = Array.isArray(parsed) ? parsed : (parsed.units || [parsed]);
    var added = 0;
    units.forEach(function (u) {
      if (!u || !u.lessons) return;
      var n = addCustomUnit(langId, u.title || '导入课程', flattenUnitItems(u));
      added += n;
    });
    return added;
  }

  function flattenUnitItems(u) {
    var items = [];
    (u.lessons || []).forEach(function (l) {
      (l.items || []).forEach(function (it) {
        if (it && it.w && it.t) items.push(it);
      });
    });
    return items;
  }

  function resetLang(langId) {
    delete S().langs[langId];
    save();
  }

  function setGoal(n) { S().profile.goal = n; save(); }
  function setRate(r) { S().profile.rate = r; save(); }

  LP.store = {
    load: load,
    save: save,
    getState: S,
    getLang: getLang,
    getCourse: getCourse,
    flatLessons: flatLessons,
    stats: stats,
    isUnlocked: isUnlocked,
    markLessonDone: markLessonDone,
    examPassed: examPassed,
    getExam: getExam,
    saveExam: saveExam,
    levelOpen: levelOpen,
    levelProgress: levelProgress,
    levelReady: levelReady,
    getSound: getSound,
    markSoundDone: markSoundDone,
    soundPassed: soundPassed,
    addSpeak: addSpeak,
    markDialogueDone: markDialogueDone,
    getDialogue: getDialogue,
    recordAnswer: recordAnswer,
    dueItems: dueItems,
    strength: strength,
    todayXp: todayXp,
    streakNow: streakNow,
    touchStreak: touchStreak,
    addXp: addXp,
    parseWordList: parseWordList,
    addCustomUnit: addCustomUnit,
    removeCustomUnit: removeCustomUnit,
    importCourseFile: importCourseFile,
    exportText: exportText,
    importText: importText,
    resetLang: resetLang,
    setGoal: setGoal,
    setRate: setRate
  };
})();
