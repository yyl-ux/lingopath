/* 启动、路由、底部导航、提示条 */
(function () {
  var app = document.getElementById('app');
  LP.root = app;

  LP.setLessonMode = function (on) {
    document.body.classList.toggle('lesson-mode', on);
  };

  LP.toast = function (msg, ms) {
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('show'); });
    setTimeout(function () {
      t.classList.remove('show');
      setTimeout(function () { t.remove(); }, 280);
    }, ms || 2200);
  };

  function parts() {
    var hash = location.hash || '#/';
    return hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  }

  LP.go = function (hash) {
    if (location.hash === hash) LP.renderRoute();
    else location.hash = hash;
  };

  LP.renderRoute = function () {
    var p = parts();
    LP.setLessonMode(false);
    document.body.classList.toggle('v2', !(p[0] === 'vocab' || p[0] === 'me'));
    applyTheme();
    if (p[0] === 'vocab') LP.screens.vocab(app);
    else if (p[0] === 'me') LP.screens.settings(app);
    else if (p[0] && LP.store.getCourse(p[0])) LP.screens.path(app, p[0]);
    else LP.screens.courses(app);

    var key = p[0] === 'vocab' ? 'vocab' : (p[0] === 'me' ? 'me' : 'home');
    document.querySelectorAll('.tab').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-tab') === key);
    });
    ensureThemeSw();
  };

  /* ---------- 主题切换（浅色 / 暖砂 / 冷灰 / 黑白 / 墨蓝 / 暖橙 / 深色） ---------- */
  var THEME_KEY = 'lingopath.theme';
  var THEME_ORDER = ['light', 'sand', 'cool', 'mono', 'ink', 'warm', 'dark'];
  var THEME_NAMES = {
    light: '浅色 · 简洁', sand: '暖砂纸张', cool: '冷灰青调', mono: '黑白极简',
    ink: '墨蓝夜读', warm: '暖橙 · 活泼', dark: '深色 · 光感'
  };
  var THEME_DOTS = {
    light: '#f5f5f7', sand: '#f4efe6', cool: '#f5f6f8', mono: '#fafafa',
    ink: '#0e141b', warm: '#faf5ef', dark: '#0a0c12'
  };
  var CUSTOM_THEMES = { ink: 1, sand: 1, mono: 1, cool: 1 };

  function currentTheme() {
    try {
      var t = localStorage.getItem(THEME_KEY);
      return THEME_NAMES[t] ? t : 'light';
    } catch (e) { return 'light'; }
  }

  function applyTheme() {
    var t = currentTheme();
    document.body.classList.toggle('theme-warm', t === 'warm');
    document.body.classList.toggle('theme-dark', t === 'dark');
    if (CUSTOM_THEMES[t]) document.body.setAttribute('data-theme', t);
    else document.body.removeAttribute('data-theme');
  }

  function closeThemeMenu() {
    var m = document.getElementById('themeMenu');
    if (m) m.remove();
  }

  function toggleThemeMenu(btn) {
    if (document.getElementById('themeMenu')) { closeThemeMenu(); return; }
    var m = document.createElement('div');
    m.id = 'themeMenu';
    m.className = 'theme-menu';
    m.setAttribute('role', 'menu');
    THEME_ORDER.forEach(function (k) {
      var it = document.createElement('button');
      it.setAttribute('type', 'button');
      it.setAttribute('role', 'menuitemradio');
      it.setAttribute('aria-checked', String(k === currentTheme()));
      var dot = document.createElement('span');
      dot.className = 'tk';
      dot.style.background = THEME_DOTS[k];
      it.appendChild(dot);
      it.appendChild(document.createTextNode(THEME_NAMES[k]));
      it.addEventListener('click', function () {
        try { localStorage.setItem(THEME_KEY, k); } catch (e) {}
        applyTheme();
        btn.textContent = '🎨 ' + THEME_NAMES[k];
        closeThemeMenu();
        LP.toast('主题：' + THEME_NAMES[k]);
      });
      m.appendChild(it);
    });
    document.body.appendChild(m);
  }

  function ensureThemeSw() {
    var b = document.getElementById('themeSw');
    if (!b) {
      b = document.createElement('button');
      b.id = 'themeSw';
      b.className = 'theme-sw';
      b.setAttribute('type', 'button');
      b.setAttribute('aria-label', '选择主题');
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleThemeMenu(b);
      });
      document.addEventListener('click', function (e) {
        var m = document.getElementById('themeMenu');
        if (m && !m.contains(e.target) && e.target !== b) closeThemeMenu();
      });
      document.body.appendChild(b);
    }
    b.textContent = '🎨 ' + THEME_NAMES[currentTheme()];
  }

  document.querySelectorAll('.tab').forEach(function (b) {
    b.addEventListener('click', function () {
      var k = b.getAttribute('data-tab');
      LP.go(k === 'home' ? '#/' : (k === 'vocab' ? '#/vocab' : '#/me'));
    });
  });

  window.addEventListener('hashchange', function () {
    if (!document.body.classList.contains('lesson-mode')) LP.renderRoute();
  });

  LP.store.load();
  if (!location.hash) {
    try { history.replaceState(null, '', '#/'); } catch (e) { location.hash = '#/'; }
  }
  LP.renderRoute();
})();
