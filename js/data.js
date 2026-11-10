/* 语径 LingoPath —— 基础命名空间与工具 */
window.LP = window.LP || {};

(function () {
  var courses = {};

  LP.registerCourse = function (c) {
    if (c && c.id) courses[c.id] = c;
  };

  LP.getBuiltinCourses = function () {
    return Object.keys(courses).map(function (k) { return courses[k]; });
  };

  LP.getBuiltinCourse = function (id) {
    return courses[id] || null;
  };

  /* 发音课：给内置课程挂上音系数据（字母 / 假名 / 谚文 / 粤拼） */
  LP.registerSounds = function (langId, stages) {
    var c = courses[langId];
    if (c) c.sounds = stages;
  };

  LP.soundsOf = function (course, level) {
    return (course && course.sounds ? course.sounds : []).filter(function (s) {
      return (s.level || 'A1') === level;
    });
  };

  /* 等级体系：CEFR A1–C2，每一级都能对应到真实考试 */
  LP.LEVELS = [
    { id: 'A1', name: 'A1 入门', hours: '约 80–100 小时', desc: '自我介绍、点餐、问路、购物，能应付最基础的生存场景' },
    { id: 'A2', name: 'A2 基础', hours: '约 180–200 小时', desc: '日常事务、简单叙事、出行看病，能进行简单而直接的交流' },
    { id: 'B1', name: 'B1 进阶', hours: '约 350–400 小时', desc: '熟悉话题能连贯表达，旅行、工作、学习中的大多数情况都能应对' },
    { id: 'B2', name: 'B2 高阶', hours: '约 500–600 小时', desc: '能流利自然地讨论广泛话题，看懂专业文章并写出清晰的长文' },
    { id: 'C1', name: 'C1 流利', hours: '约 700–800 小时', desc: '能灵活有效地用于社交、学术与职业目的，表达准确且有层次' },
    { id: 'C2', name: 'C2 精通', hours: '1000 小时以上', desc: '接近母语者，几乎能轻松理解听到与读到的一切内容' }
  ];
  LP.LEVEL_IDS = LP.LEVELS.map(function (l) { return l.id; });

  /* 每门语言每个等级对应的真实考试口径（用于告诉学习者“这一级等于什么水平”） */
  LP.EXAM_MAP = {
    en: {
      A1: '剑桥 KET 入门 / 小升初 / 中考基础',
      A2: '剑桥 KET 通过 / 四级 300–400',
      B1: '雅思 4.5–5.5 / 四级 425 / 六级 400',
      B2: '雅思 6.0–6.5 / 六级 425+ / 剑桥 FCE',
      C1: '雅思 7.0–8.0 / 剑桥 CAE',
      C2: '雅思 8.5–9.0 / 剑桥 CPE'
    },
    ja: {
      A1: 'JLPT N5',
      A2: 'JLPT N4',
      B1: 'JLPT N3',
      B2: 'JLPT N2',
      C1: 'JLPT N1',
      C2: 'N1 高分 / 商务日语 BJT'
    },
    ko: {
      A1: 'TOPIK 1 级',
      A2: 'TOPIK 2 级',
      B1: 'TOPIK 3 级',
      B2: 'TOPIK 4 级',
      C1: 'TOPIK 5 级',
      C2: 'TOPIK 6 级'
    },
    es: {
      A1: 'DELE A1',
      A2: 'DELE A2',
      B1: 'DELE B1',
      B2: 'DELE B2',
      C1: 'DELE C1',
      C2: 'DELE C2'
    },
    fr: {
      A1: 'DELF A1',
      A2: 'DELF A2',
      B1: 'DELF B1',
      B2: 'DELF B2',
      C1: 'DALF C1',
      C2: 'DALF C2'
    },
    yue: {
      A1: '粤语基础会话 / 港澳日常沟通',
      A2: '粤语生活流利 / 茶餐厅、逛街、问路无障碍',
      B1: '粤语工作沟通 / 听懂港剧日常对白',
      B2: '粤语深度讨论 / 看懂港剧不靠字幕',
      C1: '粤语接近母语 / 俗语与语气词自然',
      C2: '粤语母语级 / 幽默、俚语、口音全通'
    }
  };

  LP.examMap = function (langId, lv) {
    var m = LP.EXAM_MAP[langId];
    return (m && m[lv]) || '';
  };

  LP.levelIndex = function (lv) {
    return LP.LEVEL_IDS.indexOf(lv);
  };

  LP.levelInfo = function (lv) {
    for (var i = 0; i < LP.LEVELS.length; i++) if (LP.LEVELS[i].id === lv) return LP.LEVELS[i];
    return null;
  };

  LP.util = {
    esc: function (s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
      });
    },
    pad: function (n) { return String(n).padStart(2, '0'); },
    dayStr: function (offset) {
      var d = new Date();
      if (offset) d.setDate(d.getDate() + offset);
      return d.getFullYear() + '-' + LP.util.pad(d.getMonth() + 1) + '-' + LP.util.pad(d.getDate());
    },
    shuffle: function (arr) {
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
      }
      return arr;
    },
    pct: function (a, b) { return b > 0 ? Math.min(100, Math.round(a / b * 100)) : 0; },
    mmss: function (ms) {
      var s = Math.max(0, Math.round(ms / 1000));
      return Math.floor(s / 60) + ':' + LP.util.pad(s % 60);
    }
  };
})();
