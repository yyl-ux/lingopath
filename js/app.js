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
    if (p[0] === 'vocab') LP.screens.vocab(app);
    else if (p[0] === 'me') LP.screens.settings(app);
    else if (p[0] && LP.store.getCourse(p[0])) LP.screens.path(app, p[0]);
    else LP.screens.courses(app);

    var key = p[0] === 'vocab' ? 'vocab' : (p[0] === 'me' ? 'me' : 'home');
    document.querySelectorAll('.tab').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-tab') === key);
    });
  };

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
