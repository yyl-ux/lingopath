/* 音效：全部用 Web Audio 现场合成，不依赖任何音频文件 */
(function () {
  var ctx = null;

  function ac() {
    if (ctx) return ctx;
    var C = window.AudioContext || window.webkitAudioContext;
    if (!C) return null;
    try { ctx = new C(); } catch (e) { ctx = null; }
    return ctx;
  }

  function enabled() {
    try { return LP.store.getState().profile.sfx !== false; } catch (e) { return false; }
  }

  function beep(o) {
    if (!enabled()) return;
    var c = ac();
    if (!c) return;
    try {
      if (c.state === 'suspended' && c.resume) c.resume();
      var t0 = c.currentTime + (o.delay || 0);
      var osc = c.createOscillator();
      var g = c.createGain();
      osc.type = o.type || 'sine';
      osc.frequency.setValueAtTime(o.from, t0);
      if (o.to && o.to !== o.from) osc.frequency.exponentialRampToValueAtTime(o.to, t0 + o.dur);
      var vol = o.vol == null ? 0.08 : o.vol;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(vol, t0 + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + o.dur);
      osc.connect(g);
      g.connect(c.destination);
      osc.start(t0);
      osc.stop(t0 + o.dur + 0.03);
    } catch (e) { /* 静默失败，不影响答题 */ }
  }

  LP.sfx = {
    tap: function () { beep({ from: 520, to: 520, dur: 0.05, type: 'triangle', vol: 0.04 }); },
    correct: function () {
      beep({ from: 660, to: 660, dur: 0.1 });
      beep({ from: 880, to: 880, dur: 0.14, delay: 0.09 });
    },
    wrong: function () { beep({ from: 210, to: 140, dur: 0.22, type: 'sawtooth', vol: 0.06 }); },
    combo: function () {
      beep({ from: 880, to: 880, dur: 0.07, type: 'triangle', vol: 0.06 });
      beep({ from: 1180, to: 1180, dur: 0.1, type: 'triangle', vol: 0.06, delay: 0.07 });
    },
    levelUp: function () {
      [523, 659, 784, 1046].forEach(function (f, i) {
        beep({ from: f, to: f, dur: 0.16, type: 'triangle', delay: i * 0.11, vol: 0.07 });
      });
    },
    chest: function () {
      beep({ from: 380, to: 900, dur: 0.3, vol: 0.06 });
      [1046, 1318, 1568].forEach(function (f, i) {
        beep({ from: f, to: f, dur: 0.2, type: 'triangle', delay: 0.26 + i * 0.1, vol: 0.07 });
      });
    }
  };
})();
