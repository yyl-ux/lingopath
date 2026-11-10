/* 游戏化：成就徽章 / 周联赛 / 陪练角色 */
(function () {
  var ACH = [
    { id: 'first', icon: '🌱', name: '第一步', desc: '完成第一关', check: function (c) { return c.lessonsDone >= 1; } },
    { id: 'streak3', icon: '🔥', name: '三天不断', desc: '最长连续学习 3 天', check: function (c) { return c.bestStreak >= 3; } },
    { id: 'streak7', icon: '🌈', name: '一周不断', desc: '最长连续学习 7 天', check: function (c) { return c.bestStreak >= 7; } },
    { id: 'words100', icon: '📚', name: '百词斩', desc: '累计学过 100 个词', check: function (c) { return c.words >= 100; } },
    { id: 'words300', icon: '📖', name: '三百词', desc: '累计学过 300 个词', check: function (c) { return c.words >= 300; } },
    { id: 'sound1', icon: '🔤', name: '发音入门', desc: '完成第一节发音课', check: function (c) { return c.soundsPassed >= 1; } },
    { id: 'soundAll', icon: '🎼', name: '音标通', desc: '完成 5 节发音课', check: function (c) { return c.soundsPassed >= 5; } },
    { id: 'exam1', icon: '🎖', name: '首个认证', desc: '通过一次等级考核', check: function (c) { return c.exams >= 1; } },
    { id: 'exam3', icon: '🏅', name: '三连认证', desc: '通过 3 个等级考核', check: function (c) { return c.exams >= 3; } },
    { id: 'perfect', icon: '💯', name: '接近满分', desc: '等级考核拿到 90 分以上', check: function (c) { return c.bestExam >= 90; } },
    { id: 'speak10', icon: '🎤', name: '敢开口', desc: '完成 10 次口语录音', check: function (c) { return c.speaks >= 10; } },
    { id: 'dlg3', icon: '💬', name: '能聊天', desc: '通关 3 个情景对话', check: function (c) { return c.dialogues >= 3; } },
    { id: 'chest1', icon: '🎁', name: '开箱手气', desc: '打开第一个宝箱', check: function (c) { return c.chests >= 1; } },
    { id: 'xp1000', icon: '⚡', name: '千分选手', desc: '累计获得 1000 XP', check: function (c) { return c.xp >= 1000; } }
  ];

  function collect() {
    var st = LP.store.getState();
    var out = {
      lessonsDone: 0, words: 0, soundsPassed: 0, exams: 0, bestExam: 0,
      dialogues: 0, chests: 0, speaks: 0,
      xp: st.profile.xp || 0, bestStreak: st.profile.bestStreak || 0
    };
    LP.getBuiltinCourses().forEach(function (c) {
      var l = LP.store.getLang(c.id);
      Object.keys(l.lessons || {}).forEach(function (k) { if (l.lessons[k].done) out.lessonsDone++; });
      Object.keys(l.items || {}).forEach(function (k) { if (l.items[k].seen > 0) out.words++; });
      Object.keys(l.sounds || {}).forEach(function (k) { if (l.sounds[k].passed) out.soundsPassed++; });
      Object.keys(l.exams || {}).forEach(function (k) {
        if (l.exams[k].passed) {
          out.exams++;
          out.bestExam = Math.max(out.bestExam, l.exams[k].score || 0);
        }
      });
      out.dialogues += Object.keys(l.dialogues || {}).length;
      out.chests += Object.keys(l.chests || {}).length;
      out.speaks += (l.speak && l.speak.tries) || 0;
    });
    return out;
  }

  function achievements() {
    var c = collect();
    return ACH.map(function (a) {
      return { id: a.id, icon: a.icon, name: a.name, desc: a.desc, unlocked: !!a.check(c) };
    });
  }

  function seedRand(seed) {
    var x = Math.sin(seed * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  }

  /* 周联赛：同榜 7 个陪练，XP 按日期稳定生成，不是随机跳动 */
  function league() {
    var names = [
      ['小林', '🐨'], ['Mia', '🦊'], ['阿哲', '🐯'], ['Lena', '🐼'],
      ['田中', '🐧'], ['苏苏', '🐰'], ['Diego', '🦁']
    ];
    var day = Math.floor(Date.now() / 86400000);
    var myXp = LP.store.weekXp();
    var list = names.map(function (n, i) {
      return { name: n[0], emoji: n[1], xp: Math.round(40 + seedRand(day * 31 + i * 7) * 360) };
    });
    list.push({ name: '我', emoji: '🙂', xp: myXp, me: true });
    list.sort(function (a, b) { return b.xp - a.xp; });
    return list;
  }

  var NPCS = {
    en: { emoji: '🦉', name: 'Ollie', hello: '今天也一起练几句英语吧！' },
    ja: { emoji: '🐱', name: 'みけ', hello: '一緒に日本語を練習しましょう。' },
    ko: { emoji: '🐯', name: '호랑', hello: '오늘도 화이팅!' },
    es: { emoji: '🦜', name: 'Lola', hello: '¡Vamos a practicar!' },
    fr: { emoji: '🥐', name: 'Coco', hello: 'On commence ?' },
    yue: { emoji: '🐼', name: '阿宝', hello: '今日一齊練幾句啦！' }
  };

  var GOOD = ['不错！', '就是这样！', '漂亮！', '这题稳了'];
  var BAD = ['没关系，再来一次', '差一点点～', '记下来就好', '这题有点绕'];

  function npc(langId) {
    return NPCS[langId] || { emoji: '🙂', name: '陪练', hello: '开始练习吧！' };
  }

  function react(ok) {
    var arr = ok ? GOOD : BAD;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  LP.game = {
    ACH: ACH,
    collect: collect,
    achievements: achievements,
    league: league,
    npc: npc,
    react: react
  };
})();
