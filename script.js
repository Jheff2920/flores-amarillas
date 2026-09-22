(function () {
  const start = document.getElementById("screen-start");
  const letter = document.getElementById("screen-letter");
  const btnOpen = document.getElementById("btn-open");
  const petalsLayer = document.getElementById("petals");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let raining = false;

  function show(screenShow, screenHide) {
    screenHide.classList.remove("is-active");
    window.setTimeout(function () {
      screenHide.hidden = true;
      screenShow.hidden = false;
      void screenShow.offsetWidth;
      screenShow.classList.add("is-active");
    }, 280);
  }

  function spawnPetals(count) {
    if (reduceMotion) return;
    const n = count || 12;
    for (let i = 0; i < n; i++) {
      const el = document.createElement("span");
      el.className = "petal";
      const left = Math.random() * 100;
      const size = 10 + Math.random() * 16;
      const duration = 4 + Math.random() * 5;
      const delay = Math.random() * 0.6;
      const drift = (Math.random() - 0.5) * 160;
      el.style.left = left + "vw";
      el.style.width = size + "px";
      el.style.height = size * 1.25 + "px";
      el.style.setProperty("--drift", drift + "px");
      el.style.animationDuration = duration + "s";
      el.style.animationDelay = delay + "s";
      el.style.opacity = String(0.55 + Math.random() * 0.4);
      petalsLayer.appendChild(el);
      window.setTimeout(function () {
        el.remove();
      }, (duration + delay) * 1000 + 200);
    }
  }

  function startRain() {
    if (raining || reduceMotion) return;
    raining = true;
    spawnPetals(14);
    window.setInterval(function () {
      spawnPetals(8);
    }, 1400);
  }

  btnOpen.addEventListener("click", function () {
    show(letter, start);
  });

  startRain();
})();
