/* 界面：语言选择 / 学习路径 / 词表 / 设置 */
(function () {
  var vocabLang = null;
  var vocabQuery = '';

  function bar(p, cls) {
    return '<div class="bar' + (cls ? ' ' + cls : '') + '"><i style="width:' + p + '%"></i></div>';
  }

  function topbar(left, mid, right) {
    return '<header class="topbar">' + (left || '<span class="tb-sp"></span>') +
      '<div class="brand">' + mid + '</div>' + (right || '<span class="tb-sp"></span>') + '</header>';
  }

  /* ---------------- 语言选择 ---------------- */

  function showChest(xp, done) {
    var el = document.createElement('div');
    el.className = 'chest-modal';
    el.innerHTML = '<div class="chest-box">' +
      '<div class="chest-emoji">🎁</div>' +
      '<div class="chest-title">宝箱打开！</div>' +
      '<div class="chest-xp">+' + xp + ' XP</div>' +
      '<button class="btn primary" id="chestOk">收下</button></div>';
    document.body.appendChild(el);
    el.addEventListener('click', function (e) {
      if (e.target === el || (e.target && e.target.id === 'chestOk')) {
        if (el.parentNode) el.parentNode.removeChild(el);
        if (done) done();
      }
    });
  }

  function courses(root) {
    var st = LP.store.getState();
    var goal = st.profile.goal || 30;
    var txp = LP.store.todayXp();
    var streak = LP.store.streakNow();
    var xp = st.profile.xp || 0;
    var langs = LP.getBuiltinCourses();
    var cards = langs.map(function (c) {
      var s = LP.store.stats(c.id);
      var p = LP.util.pct(s.done, s.total);
      var lvs = c.levels && c.levels.length ? c.levels : ['A1'];
      var range = lvs.length > 1 ? lvs[0] + '–' + lvs[lvs.length - 1] : lvs[0];
      var certs = LP.LEVEL_IDS.filter(function (l) { return LP.store.examPassed(c.id, l); }).join(' ');
      return '<button class="lang-card" data-lang="' + c.id + '">' +
        '<div class="flag">' + c.flag + '</div>' +
        '<div class="lc-name">' + LP.util.esc(c.name) + '</div>' +
        '<div class="lc-sub">' + LP.util.esc(c.native) + ' · ' + s.total + ' 关 · ' + range + '</div>' +
        bar(p, 'sm') +
        '<div class="lc-meta"><span>' + s.done + '/' + s.total + '</span>' +
        (s.due > 0 ? '<span class="due">待复习 ' + s.due + '</span>' : '<span>' + p + '%</span>') +
        '</div>' +
        (certs ? '<div class="lc-cert">🎖 已认证 ' + certs + '</div>' : '') +
        '</button>';
    }).join('');

    var board = LP.game.league();
    var myRank = 1;
    board.forEach(function (r, i) { if (r.me) myRank = i + 1; });
    var boardHtml = board.map(function (r, i) {
      return '<div class="lg-row' + (r.me ? ' me' : '') + '">' +
        '<span class="lg-rank">' + (i + 1) + '</span>' +
        '<span class="lg-ava">' + r.emoji + '</span>' +
        '<span class="lg-name">' + LP.util.esc(r.name) + '</span>' +
        '<span class="lg-xp">' + r.xp + '</span></div>';
    }).join('');

    root.innerHTML =
      topbar('<span class="tb-sp"></span>',
        '<div class="brand-name">语径</div><div class="brand-sub">LingoPath</div>',
        '<div class="topstats"><span class="pill fire">🔥<b>' + streak + '</b></span>' +
        '<span class="pill gem">⚡<b>' + xp + '</b></span></div>') +
      '<section class="goal-card">' +
        '<div class="goal-top"><div>' +
          '<div class="goal-label">今日目标</div>' +
          '<div class="goal-num">' + txp + ' / ' + goal + ' XP</div>' +
        '</div><div class="goal-emoji">' + (txp >= goal ? '🎉' : '🎯') + '</div></div>' +
        bar(LP.util.pct(txp, goal)) +
        '<div class="goal-tip">' + (txp >= goal
          ? '今天达标了，多学也不算白学。'
          : '再赚 ' + (goal - txp) + ' XP 就达标，一关大约 10 XP。') + '</div>' +
      '</section>' +
      '<div class="sec-title">本周联赛 <span>第 ' + myRank + ' 名 · 共 ' + board.length + ' 人 · 7 天累计 XP</span></div>' +
      '<div class="league">' + boardHtml + '</div>' +
      '<div class="sec-title">选一门语言 <span>' + langs.length + ' 门 · 进度各自独立</span></div>' +
      '<div class="lang-grid">' + cards + '</div>' +
      '<div class="note">学习记录只保存在这台设备。换设备时用「我的 → 导出存档」把进度带走。</div>';

    root.querySelectorAll('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { LP.go('#/' + b.getAttribute('data-lang')); });
    });
  }

  /* ---------------- 学习路径 ---------------- */

  function soundSection(langId, lv, open, course) {
    var stages = LP.soundsOf(course, lv);
    if (!stages.length) return '';
    var cards = stages.map(function (st) {
      var rec = LP.store.getSound(langId, st.id);
      var passed = rec && rec.passed;
      return '<button class="snd-card" data-sound="' + st.id + '" data-open="' + (open ? 1 : 0) + '">' +
        '<div class="snd-tag">🎧 ' + LP.util.esc(st.level || lv) + '</div>' +
        '<div class="snd-name">' + LP.util.esc(st.title) + '</div>' +
        '<div class="snd-sub">' + (st.items || []).length + ' 个音 · ' + (st.read || []).length + ' 个拼读词</div>' +
        '<div class="snd-st' + (passed ? ' ok' : '') + '">' +
          (passed ? '✓ ' + (rec.acc || 0) + ' 分' : rec ? '最高 ' + (rec.acc || 0) + ' 分' : open ? '未开始' : '未解锁') +
        '</div></button>';
    }).join('');
    return '<div class="snd-sec"><div class="snd-sec-head">发音课 <span>学会音标，生词自己就能读</span></div>' +
      '<div class="snd-grid">' + cards + '</div></div>';
  }

  function examCard(langId, lv, open, course) {
    var rec = LP.store.getExam(langId, lv);
    var words = LP.ex.countLevel(course, lv);
    var dlgCount = (course.dialogues || []).filter(function (d) { return (d.level || 'A1') === lv; }).length;
    var ready = words >= 8;
    var prog = LP.store.levelProgress(langId, lv);
    var canRun = open && ready && prog.done;
    var map = LP.examMap(langId, lv);
    var btnText = !open ? '先完成上一级（单元 + 发音 + 考核）'
      : !ready ? '这一级内容准备中'
      : !prog.done ? (prog.lessonsDone < prog.lessonsTotal ? '先学完本级所有单元和发音课' : '先完成本级发音课')
      : rec ? '再考一次' : '开始考核';
    return '<section class="exam-card' + (rec && rec.passed ? ' passed' : '') + '">' +
      '<div class="exam-top">' +
        '<div><div class="exam-title"><span class="lv-tag">' + lv + '</span> 等级考核</div>' +
        '<div class="exam-map">' + LP.util.esc(map || '该等级题库扩充中') + '</div></div>' +
        '<div class="exam-score ' + (rec && rec.passed ? 'ok' : '') + '">' +
          (rec ? (rec.passed ? '✓ ' + rec.score + ' 分' : '最高 ' + (rec.score || 0) + ' 分')
            : (canRun ? '待考' : open ? '未达标' : '🔒')) +
        '</div>' +
      '</div>' +
      '<div class="exam-meta">' + words + ' 个词条 · ' + dlgCount + ' 个情景 · 听读说混合，80 分及格</div>' +
      '<div class="exam-req">' +
        '<span class="' + (prog.lessonsDone === prog.lessonsTotal ? 'ok' : '') + '">单元 ' + prog.lessonsDone + '/' + prog.lessonsTotal + '</span>' +
        '<span class="' + (prog.soundsDone === prog.soundsTotal ? 'ok' : '') + '">发音 ' + prog.soundsDone + '/' + prog.soundsTotal + '</span>' +
        '<span class="' + (prog.examPassed ? 'ok' : '') + '">' + (prog.examPassed ? '考核已过' : '考核未过') + '</span>' +
      '</div>' +
      '<button class="exam-run" data-exam="' + lv + '" data-open="' + (canRun ? 1 : 0) + '">' + btnText + '</button>' +
      '</section>';
  }

  function path(root, langId) {
    var course = LP.store.getCourse(langId);
    if (!course) { LP.go('#/'); return; }
    var s = LP.store.stats(langId);
    var flat = s.flat;
    var flatIdxOf = {};
    flat.forEach(function (row, i) { flatIdxOf[row.lesson.id] = i; });

    var grouped = {};
    course.units.forEach(function (u) {
      var lv = u.level || 'A1';
      (grouped[lv] = grouped[lv] || []).push(u);
    });
    var lvList = LP.LEVEL_IDS.filter(function (l) { return grouped[l]; });

    var ribbon = lvList.map(function (lv) {
      var passed = LP.store.levelReady(langId, lv);
      var open = LP.store.levelOpen(langId, lv);
      return '<div class="lv-step ' + (passed ? 'done' : open ? 'now' : 'lock') + '">' +
        '<b>' + lv + '</b><span>' + (passed ? '已认证' : open ? '学习中' : '未解锁') + '</span></div>';
    }).join('');

    var dlgs = course.dialogues || [];
    var dlgByLv = {};
    dlgs.forEach(function (d) {
      var k = d.level || 'A1';
      (dlgByLv[k] = dlgByLv[k] || []).push(d);
    });
    function dlgCards(list) {
      return '<div class="dlg-grid">' + list.map(function (d) {
        var rec = LP.store.getDialogue(langId, d.id);
        var open = LP.store.levelOpen(langId, d.level || 'A1');
        var sayTurns = d.lines.filter(function (l) { return l.say; }).length;
        return '<button class="dlg-card' + (rec ? ' done' : '') + '" data-dlg="' + d.id + '" data-open="' + (open ? 1 : 0) + '">' +
          '<div class="dlg-lv">' + (d.level || 'A1') + '</div>' +
          '<div class="dlg-name">' + LP.util.esc(d.title) + '</div>' +
          '<div class="dlg-sub">' + LP.util.esc(d.scene || '') + ' · ' + d.lines.length + ' 轮 · 开口 ' + sayTurns + ' 次</div>' +
          '<div class="dlg-st">' + (rec ? '已通关 ' + rec.acc + ' 分' : open ? '未开始' : '未解锁') + '</div>' +
          '</button>';
      }).join('') + '</div>';
    }

    var unitBlocks = lvList.map(function (lv) {
      var open = LP.store.levelOpen(langId, lv);
      var info = LP.levelInfo(lv);
      var units = grouped[lv].map(function (u) {
        var uDone = 0, uTotal = (u.lessons || []).length;
        var wDone = 0, wTotal = 0;
        var learned = [];
        var langState = LP.store.getLang(langId);
        (u.lessons || []).forEach(function (l) {
          var r = langState.lessons[l.id];
          if (r && r.done) uDone++;
          (l.items || []).forEach(function (it) {
            wTotal++;
            var wr = langState.items[it.w];
            if (wr && wr.seen > 0) { wDone++; learned.push(it); }
          });
        });
        var rows = (u.lessons || []).map(function (l) {
          var idx = flatIdxOf[l.id] || 0;
          var rec = LP.store.getLang(langId).lessons[l.id];
          var done = !!(rec && rec.done);
          var unlocked = open && LP.store.isUnlocked(flat, idx, langId);
          var cls = done ? 'done' : (unlocked ? 'next' : 'locked');
          var off = [0, 58, 0, -58][idx % 4];
          var ico = done ? '✓' : (unlocked ? '▶' : '🔒');
          return '<div class="prow" style="transform:translateX(' + off + 'px)">' +
            '<button class="node ' + cls + '" data-lesson="' + l.id + '" data-unlocked="' + (unlocked ? 1 : 0) + '">' +
            '<span class="node-ico">' + ico + '</span></button>' +
            '<div class="node-label">' + LP.util.esc(l.title) + '</div></div>';
        }).join('');
        var chips = learned.slice(0, 3).map(function (it) {
          return '<span class="uw"><b>' + LP.util.esc(it.w) + '</b>' + LP.util.esc(it.t) + '</span>';
        }).join('');
        if (learned.length > 3) chips += '<span class="uw more">+' + (learned.length - 3) + '</span>';
        var wordsBox = learned.length
          ? '<div class="unit-words">' + chips + '</div>'
          : '<div class="unit-words empty">还没开始学，这一单元共 ' + wTotal + ' 个词</div>';
        var chestRec = LP.store.getLang(langId).chests[u.id];
        var chestHtml = (!u.custom && uTotal > 0 && uDone === uTotal)
          ? '<div class="chest-wrap">' + (chestRec
              ? '<div class="chest opened"><span>🎁</span> 已领取 +' + (chestRec.xp || 0) + ' XP</div>'
              : '<button class="chest" data-chest="' + u.id + '"><span>🎁</span> 开启本单元宝箱</button>')
            + '</div>'
          : '';
        var uPct = LP.util.pct(uDone, uTotal);
        return '<section class="unit' + (uDone === uTotal && uTotal ? ' cleared' : '') +
          '" style="--ucc:' + (u.color || '#58cc02') + ';--up:' + uPct + '">' +
          '<div class="unit-head"><div class="unit-head-l">' +
            '<div class="unit-title">' + LP.util.esc(u.title) + '</div>' +
            '<div class="unit-desc">' + LP.util.esc(u.desc || '') + '</div>' +
          '</div><div class="unit-ring"><i>' + uPct + '%</i></div></div>' +
          '<div class="unit-bars">' +
            '<div class="unit-bar"><span class="ub-label">学习进度</span>' +
            bar(LP.util.pct(uDone, uTotal), 'sm') +
            '<span class="ub-num">' + uDone + '/' + uTotal + ' 关</span></div>' +
            '<div class="unit-bar"><span class="ub-label">已学单词</span>' +
            bar(LP.util.pct(wDone, wTotal), 'sm') +
            '<span class="ub-num">' + wDone + '/' + wTotal + ' 词</span></div>' +
          '</div>' +
          wordsBox +
          '<div class="unit-meta">' +
            (uDone === uTotal ? '✓ 本单元已通关' : uDone === 0 ? '尚未开始' : '已完成 ' + uDone + ' 关') +
          '</div></div>' +
          '<div class="path">' + rows + '</div>' +
          chestHtml +
          (u.custom ? '<div class="unit-del"><button class="ghost sm" data-delunit="' + u.id + '">删除这个词表</button></div>' : '') +
          '</section>';
      }).join('');

      var lvDlgs = dlgByLv[lv] || [];
      var lvDlgBlock = lvDlgs.length
        ? '<div class="sec-title sub">情景对话 <span>' + lvDlgs.length +
          ' 个场景 · 学完上面这些单元再来实战</span></div>' + dlgCards(lvDlgs)
        : '';
      return '<div class="lvl-block' + (open ? '' : ' shut') + '">' +
        '<div class="lvl-head"><span class="lv-tag big">' + lv + '</span>' +
          '<div class="lvl-txt"><b>' + (info ? info.name : lv) + '</b>' +
          '<span>' + (info ? info.desc : '') + '</span></div></div>' +
        soundSection(langId, lv, open, course) +
        units + lvDlgBlock + examCard(langId, lv, open, course) +
        '</div>';
    }).join('');

    var speakCard = '<button class="review-card speak-card" data-speak>' +
      '<div class="rc-left"><div class="rc-title">🎤 口语跟读练习</div>' +
      '<div class="rc-sub">用你学过的句子开口：听标准音 → 录音 → 回放自评</div></div>' +
      '<div class="rc-badge speak">8 句</div></button>';

    /* 继续学习：找到第一关没过的单元与关卡 */
    var langState = LP.store.getLang(langId);
    var nextLesson = null, nextUnit = null;
    course.units.forEach(function (u) {
      if (nextLesson) return;
      (u.lessons || []).forEach(function (l) {
        if (nextLesson) return;
        var r = langState.lessons[l.id];
        if (!(r && r.done)) { nextLesson = l; nextUnit = u; }
      });
    });
    var npc = LP.game.npc(langId);
    var hero = nextLesson
      ? '<div class="hero" style="--hcc:' + (nextUnit.color || '#58cc02') + '">' +
          '<div class="hero-top"><span class="hero-k">继续学习</span>' +
          '<span class="hero-lv">' + (nextUnit.level || 'A1') + '</span></div>' +
          '<div class="hero-t">' + LP.util.esc(nextLesson.title) + '</div>' +
          '<div class="hero-s">' + LP.util.esc(nextUnit.title) + ' · ' +
            (nextLesson.items || []).length + ' 个词</div>' +
          '<div class="hero-npc"><span class="hero-ava">' + npc.emoji + '</span>' +
            '<span class="hero-say">' + LP.util.esc(npc.hello) + '</span></div>' +
          '<button class="hero-btn" data-hero="' + nextLesson.id + '">开始这一关</button>' +
        '</div>'
      : '<div class="hero cleared" style="--hcc:#58cc02">' +
          '<div class="hero-top"><span class="hero-k">全部完成</span></div>' +
          '<div class="hero-t">🎉 这一门课你已经走完了</div>' +
          '<div class="hero-s">去练口语和情景，或者换一门语言</div></div>';

    root.innerHTML =
      topbar('<button class="icon-btn" data-back>←</button>',
        '<div class="brand-name">' + course.flag + ' ' + LP.util.esc(course.name) + '</div>' +
        '<div class="brand-sub">' + s.done + '/' + s.total + ' 关 · ' + s.learned + ' 词 · 发音 ' +
          s.soundsDone + '/' + s.soundsTotal + ' · 认证 ' + s.examCount + ' 级</div>',
        '<div class="topstats"><span class="pill fire">🔥<b>' + LP.store.streakNow() + '</b></span>' +
        '<span class="pill gem">⚡<b>' + (LP.store.getState().profile.xp || 0) + '</b></span></div>') +
      '<div class="lv-ribbon">' + ribbon + '</div>' +
      hero +
      '<div class="path-wrap">' + unitBlocks + '</div>' +
      '<div class="sec-title top-gap">巩固练习 <span>把学过的词练牢</span></div>' +
      (s.due > 0
        ? '<button class="review-card" data-review><div class="rc-left">' +
          '<div class="rc-title">复习到期词</div>' +
          '<div class="rc-sub">' + s.due + ' 个词到复习时间了，趁热打铁</div></div>' +
          '<div class="rc-badge">' + s.due + '</div></button>'
        : '<div class="review-card idle"><div class="rc-left"><div class="rc-title">今天没有到期复习</div>' +
          '<div class="rc-sub">按计划学习新内容就好</div></div><div class="rc-badge ok">✓</div></div>') +
      speakCard;

    root.querySelector('[data-back]').addEventListener('click', function () { LP.go('#/'); });
    root.querySelectorAll('[data-hero]').forEach(function (b) {
      b.addEventListener('click', function () {
        LP.startLesson(langId, b.getAttribute('data-hero'), 'lesson');
      });
    });
    root.querySelectorAll('[data-chest]').forEach(function (b) {
      b.addEventListener('click', function () {
        var res = LP.store.openChest(langId, b.getAttribute('data-chest'));
        if (!res) return;
        LP.sfx.chest();
        showChest(res.xp, function () { path(root, langId); });
      });
    });
    root.querySelectorAll('[data-review]').forEach(function (b) {
      b.addEventListener('click', function () { LP.startLesson(langId, null, 'review'); });
    });
    root.querySelectorAll('[data-speak]').forEach(function (b) {
      b.addEventListener('click', function () { LP.startLesson(langId, null, 'speak'); });
    });
    root.querySelectorAll('[data-sound]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.getAttribute('data-open') !== '1') { LP.toast('先完成上一级的内容再解锁这一节发音课'); return; }
        LP.startSound(langId, b.getAttribute('data-sound'));
      });
    });
    root.querySelectorAll('[data-lesson]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.getAttribute('data-unlocked') === '1') {
          LP.startLesson(langId, b.getAttribute('data-lesson'), 'lesson');
        } else {
          LP.toast('先完成上一关才能解锁');
        }
      });
    });
    root.querySelectorAll('[data-exam]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.getAttribute('data-open') !== '1') {
          LP.toast('本级单元和发音课全部完成，才能参加等级考核');
          return;
        }
        LP.startExam(langId, b.getAttribute('data-exam'));
      });
    });
    root.querySelectorAll('[data-dlg]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.getAttribute('data-open') !== '1') { LP.toast('先完成对应等级的单元、发音课与考核，情景才解锁'); return; }
        LP.startDialogue(langId, b.getAttribute('data-dlg'));
      });
    });
    root.querySelectorAll('[data-delunit]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (confirm('删除这个词表？已学的记录会保留在词表里。')) {
          LP.store.removeCustomUnit(langId, b.getAttribute('data-delunit'));
          LP.screens.path(root, langId);
        }
      });
    });
  }

  /* ---------------- 词表 ---------------- */

  function vocab(root) {
    var langs = LP.getBuiltinCourses();
    if (!vocabLang || !langs.some(function (c) { return c.id === vocabLang; })) vocabLang = langs[0].id;
    var course = LP.store.getCourse(vocabLang);
    var items = Object.keys(LP.store.getLang(vocabLang).items)
      .map(function (k) { return LP.store.getLang(vocabLang).items[k]; })
      .filter(function (r) { return r.seen > 0; });
    var q = vocabQuery.trim().toLowerCase();
    if (q) {
      items = items.filter(function (r) {
        return (r.w + ' ' + r.t).toLowerCase().indexOf(q) >= 0;
      });
    }
    items.sort(function (a, b) { return a.due - b.due; });

    var chips = langs.map(function (c) {
      var s = LP.store.stats(c.id);
      return '<button class="chip' + (c.id === vocabLang ? ' on' : '') + '" data-vlang="' + c.id + '">' +
        c.flag + ' ' + LP.util.esc(c.name) + '<i>' + s.learned + '</i></button>';
    }).join('');

    var rows = items.map(function (r) {
      var str = Math.round(LP.store.strength(r) * 100);
      return '<div class="vrow">' +
        '<button class="speak" data-speak="' + LP.util.esc(r.w) + '">🔊</button>' +
        '<div class="vmain">' +
          '<div class="vtop"><span class="vw">' + LP.util.esc(r.w) + '</span>' +
          '<span class="vt">' + LP.util.esc(r.t) + '</span></div>' +
          (r.p ? '<div class="vpy">' + LP.util.esc(r.p) + '</div>' : '') +
          (r.e ? '<div class="vex">' + LP.util.esc(r.e) + '<span>' + LP.util.esc(r.et || '') + '</span></div>' : '') +
          bar(str, 'sm') +
        '</div></div>';
    }).join('');

    root.innerHTML =
      topbar('<span class="tb-sp"></span>',
        '<div class="brand-name">我的词表</div><div class="brand-sub">按到期时间排序</div>',
        '<span class="tb-sp"></span>') +
      '<div class="chips">' + chips + '</div>' +
      '<div class="search"><input id="vq" placeholder="搜外语或中文…" value="' + LP.util.esc(vocabQuery) + '"></div>' +
      '<div class="vlist">' + (rows || '<div class="empty"><div class="empty-emoji">🌱</div>' +
        '<div>还没有学过的词<br><span>去路径里上第一关吧</span></div></div>') + '</div>';

    root.querySelectorAll('[data-vlang]').forEach(function (b) {
      b.addEventListener('click', function () {
        vocabLang = b.getAttribute('data-vlang');
        vocabQuery = '';
        vocab(root);
      });
    });
    var input = root.querySelector('#vq');
    input.addEventListener('input', function () {
      vocabQuery = input.value;
      var pos = input.selectionStart;
      vocab(root);
      var el = root.querySelector('#vq');
      if (el) { el.focus(); try { el.setSelectionRange(pos, pos); } catch (e) {} }
    });
    root.querySelectorAll('[data-speak]').forEach(function (b) {
      b.addEventListener('click', function () {
        LP.ex.speak(b.getAttribute('data-speak'), course.tts, LP.store.getState().profile.rate);
      });
    });
  }

  /* ---------------- 设置 ---------------- */

  function settings(root) {
    var st = LP.store.getState();
    var langs = LP.getBuiltinCourses();
    var goals = [10, 20, 30, 50, 100];
    var rates = [0.7, 0.85, 1];
    var goalPills = goals.map(function (g) {
      return '<button class="chip' + (st.profile.goal === g ? ' on' : '') + '" data-goal="' + g + '">' + g + ' XP</button>';
    }).join('');
    var ratePills = rates.map(function (r) {
      return '<button class="chip' + (st.profile.rate === r ? ' on' : '') + '" data-rate="' + r + '">' +
        (r < 0.8 ? '慢' : r < 0.95 ? '正常' : '快') + '</button>';
    }).join('');

    var ach = LP.game.achievements();
    var achUnlocked = ach.filter(function (a) { return a.unlocked; }).length;
    var achHtml = ach.map(function (a) {
      return '<div class="ach' + (a.unlocked ? ' on' : '') + '">' +
        '<span class="ach-ico">' + (a.unlocked ? a.icon : '🔒') + '</span>' +
        '<span class="ach-name">' + LP.util.esc(a.name) + '</span>' +
        '<span class="ach-desc">' + LP.util.esc(a.desc) + '</span></div>';
    }).join('');
    var sfxOn = st.profile.sfx !== false;

    root.innerHTML =
      topbar('<span class="tb-sp"></span>',
        '<div class="brand-name">我的</div><div class="brand-sub">全程免费 · 数据在本机</div>',
        '<span class="tb-sp"></span>') +
      '<section class="card"><div class="card-title">每日目标</div>' +
        '<div class="chips">' + goalPills + '</div>' +
        '<div class="card-tip">达标后会记入连续天数。当前连续 ' + LP.store.streakNow() + ' 天，最长 ' +
        (st.profile.bestStreak || 0) + ' 天。</div></section>' +
      '<section class="card"><div class="card-title">成就徽章 <span class="ct-num">' +
        achUnlocked + '/' + ach.length + '</span></div>' +
        '<div class="ach-grid">' + achHtml + '</div></section>' +
      '<section class="card"><div class="card-title">音效</div>' +
        '<div class="chips">' +
          '<button class="chip' + (sfxOn ? ' on' : '') + '" data-sfx="1">开</button>' +
          '<button class="chip' + (!sfxOn ? ' on' : '') + '" data-sfx="0">关</button>' +
        '</div>' +
        '<div class="card-tip">答对的“叮”、答错的“嗡”、升级的小号声，全部现场合成，不下载任何音频文件。</div></section>' +
      '<section class="card"><div class="card-title">发音</div>' +
        '<div class="chips">' + ratePills + '</div>' +
        '<div class="row"><span>测试你的设备有没有语音包</span>' +
        '<button class="ghost sm" data-test="en-US">英语</button>' +
        '<button class="ghost sm" data-test="ja-JP">日语</button>' +
        '<button class="ghost sm" data-test="ko-KR">韩语</button>' +
        '<button class="ghost sm" data-test="zh-HK">粤语</button></div>' +
        '<div class="card-tip">发音用的是浏览器自带的语音合成，不产生任何费用；若某个语言没声音，说明设备缺该语音包。</div></section>' +
      '<section class="card"><div class="card-title">口语设备自检</div>' +
        '<div class="diag"><span>语音合成（听）</span><b id="dgSynth">—</b></div>' +
        '<div class="diag"><span>麦克风录音（说）</span><b id="dgRec">—</b></div>' +
        '<div class="diag"><span>语音识别（评分）</span><b id="dgRecog">—</b></div>' +
        '<div class="row" style="margin-top:10px">' +
        '<button class="ghost sm" data-diagnose>录 2 秒试试麦克风</button></div>' +
        '<div class="card-tip">实话实说：录音在手机电脑上都可用（需要 https 或本机 localhost，并允许麦克风）；语音识别只有 Chrome / Edge / 安卓 Chrome 比较可靠，iOS 会自动降级成「录音 + 回放自评」。录音和评分都在本机完成，不上传、不花钱。</div></section>' +
      '<section class="card"><div class="card-title">存档</div>' +
        '<div class="row"><button class="ghost" data-export>导出存档</button>' +
        '<button class="ghost" data-import>导入存档</button></div>' +
        '<div class="card-tip">换电脑或手机时：旧设备导出，新设备导入（导入会覆盖本机记录）。</div>' +
        '<input type="file" id="fileState" accept=".json,application/json" hidden></section>' +
      '<section class="card"><div class="card-title">加自己的内容</div>' +
        '<button class="btn" data-addwords>导入自己的词表</button>' +
        '<div class="card-tip">刷视频看到好资料？一行一个词粘进来就能变成课程，永久可扩展。</div></section>' +
      '<section class="card"><div class="card-title">危险操作</div>' +
        '<div class="chips">' + langs.map(function (c) {
          return '<button class="chip danger" data-reset="' + c.id + '">清空' + LP.util.esc(c.name) + '进度</button>';
        }).join('') + '</div>' +
        '<div class="card-tip">只清空该语言的关卡与词表记录，课程内容不受影响。</div></section>' +
      '<div class="note">语径 LingoPath · 纯本地学习工具，无账号、无广告、无订阅。语音由系统提供，首次点喇叭可能需要联网下载语音包。</div>';

    root.querySelectorAll('[data-sfx]').forEach(function (b) {
      b.addEventListener('click', function () {
        var on = b.getAttribute('data-sfx') === '1';
        LP.store.setSfx(on);
        settings(root);
        if (on) LP.sfx.correct();
      });
    });
    root.querySelectorAll('[data-goal]').forEach(function (b) {
      b.addEventListener('click', function () {
        LP.store.setGoal(Number(b.getAttribute('data-goal')));
        settings(root);
        LP.toast('每日目标已更新');
      });
    });
    root.querySelectorAll('[data-rate]').forEach(function (b) {
      b.addEventListener('click', function () {
        LP.store.setRate(Number(b.getAttribute('data-rate')));
        settings(root);
      });
    });
    root.querySelectorAll('[data-test]').forEach(function (b) {
      b.addEventListener('click', function () {
        var code = b.getAttribute('data-test');
        var sample = {
          'en-US': 'Hello, nice to meet you.',
          'ja-JP': 'こんにちは。',
          'ko-KR': '안녕하세요.',
          'zh-HK': '你好，唔該晒。'
        }[code];
        if (!LP.ex.speak(sample, code, st.profile.rate)) LP.toast('这台设备不支持语音合成');
      });
    });

    var caps = LP.speech.caps();
    var dgS = root.querySelector('#dgSynth');
    var dgR = root.querySelector('#dgRec');
    var dgG = root.querySelector('#dgRecog');
    if (dgS) {
      dgS.textContent = caps.synth ? '可用' : '不可用';
      dgS.className = caps.synth ? 'yes' : 'no';
      dgR.textContent = caps.record ? '可用' : '受限';
      dgR.className = caps.record ? 'yes' : 'no';
      dgG.textContent = caps.recognize ? '可用（Chrome 系列）' : '不支持，自动降级自评';
      dgG.className = caps.recognize ? 'yes' : 'no';
    }
    var diagBtn = root.querySelector('[data-diagnose]');
    if (diagBtn) {
      diagBtn.addEventListener('click', function () {
        diagBtn.textContent = '正在请求麦克风…';
        LP.speech.startRecord().then(function (r) {
          if (!r.ok) {
            diagBtn.textContent = '录 2 秒试试麦克风';
            LP.toast(r.reason === 'denied' ? '麦克风权限被拒绝，请在浏览器设置里允许' : '这台设备暂时录不了音');
            return;
          }
          setTimeout(function () {
            LP.speech.stopRecord().then(function (res) {
              diagBtn.textContent = '录 2 秒试试麦克风';
              if (res.ok && res.ms > 300) {
                try {
                  var a = new Audio(res.url);
                  a.play().catch(function () {});
                } catch (e) {}
                LP.toast('麦克风正常：录了 ' + (res.ms / 1000).toFixed(1) + ' 秒并回放');
              } else {
                LP.toast('录音失败，请检查麦克风权限');
              }
            });
          }, 2000);
        });
      });
    }

    root.querySelector('[data-export]').addEventListener('click', function () {
      var blob = new Blob([LP.store.exportText()], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = '语径存档-' + LP.util.dayStr(0) + '.json';
      document.body.appendChild(a);
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
      LP.toast('存档已导出');
    });

    var file = root.querySelector('#fileState');
    root.querySelector('[data-import]').addEventListener('click', function () { file.click(); });
    file.addEventListener('change', function () {
      var f = file.files && file.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          LP.store.importText(String(reader.result));
          LP.toast('存档已导入');
          LP.screens.settings(root);
        } catch (e) {
          LP.toast('导入失败：' + e.message);
        }
      };
      reader.readAsText(f);
    });

    root.querySelector('[data-addwords]').addEventListener('click', function () { openImport(root); });
    root.querySelectorAll('[data-reset]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-reset');
        if (confirm('清空这门语言的进度？此操作不可撤销。')) {
          LP.store.resetLang(id);
          LP.toast('已清空');
          settings(root);
        }
      });
    });
  }

  function openImport(root) {
    var langs = LP.getBuiltinCourses();
    var mask = document.createElement('div');
    mask.className = 'sheet-mask';
    mask.innerHTML =
      '<div class="sheet">' +
        '<div class="sheet-head"><h3>导入自己的词表</h3><button class="icon-btn" data-close>✕</button></div>' +
        '<div class="sheet-body">' +
          '<div class="hint">一行一个词，用 <b>|</b> 分隔（也可用逗号）：<br>' +
          '外语 | 中文 | 例句（可选） | 例句中文（可选）</div>' +
          '<textarea id="impText" placeholder="hola | 你好 | Hola, ¿cómo estás? | 你好，你好吗？"></textarea>' +
          '<div class="field-label">存到哪门语言</div>' +
          '<div class="chips" id="impLang">' + langs.map(function (c, i) {
            return '<button class="chip' + (i === 0 ? ' on' : '') + '" data-il="' + c.id + '">' + c.flag + ' ' + LP.util.esc(c.name) + '</button>';
          }).join('') + '</div>' +
          '<div class="field-label">这组词叫什么</div>' +
          '<input id="impTitle" class="text-input" value="我的词表 1">' +
          '<div class="hint" id="impCount">0 个词，将分成 0 关</div>' +
        '</div>' +
        '<div class="sheet-foot"><button class="btn" id="impSave" disabled>导入</button></div>' +
      '</div>';
    root.appendChild(mask);

    var target = langs[0].id;
    var ta = mask.querySelector('#impText');
    var title = mask.querySelector('#impTitle');
    var btn = mask.querySelector('#impSave');
    var count = mask.querySelector('#impCount');

    function refresh() {
      var n = LP.store.parseWordList(ta.value).length;
      count.textContent = n + ' 个词，将分成 ' + Math.ceil(n / 8) + ' 关';
      btn.disabled = n < 1;
    }
    ta.addEventListener('input', refresh);
    mask.querySelectorAll('[data-il]').forEach(function (b) {
      b.addEventListener('click', function () {
        target = b.getAttribute('data-il');
        mask.querySelectorAll('[data-il]').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
      });
    });
    mask.querySelector('[data-close]').addEventListener('click', function () { mask.remove(); });
    mask.addEventListener('click', function (e) { if (e.target === mask) mask.remove(); });

    btn.addEventListener('click', function () {
      var items = LP.store.parseWordList(ta.value);
      if (!items.length) return;
      var n = LP.store.addCustomUnit(target, (title.value || '我的词表').trim(), items);
      mask.remove();
      LP.toast('已导入 ' + items.length + ' 个词，新增 ' + n + ' 关');
      LP.go('#/' + target);
    });
    refresh();
    ta.focus();
  }

  LP.screens = { courses: courses, path: path, vocab: vocab, settings: settings };
})();
