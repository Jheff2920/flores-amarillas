(function () {
  const start = document.getElementById("screen-start");
  const letter = document.getElementById("screen-letter");
  const btnOpen = document.getElementById("btn-open");
  const btnPetals = document.getElementById("btn-petals");
  const btnAgain = document.getElementById("btn-again");
  const petalsLayer = document.getElementById("petals");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    const n = count || 28;
    for (let i = 0; i < n; i++) {
      const el = document.createElement("span");
      el.className = "petal";
      const left = Math.random() * 100;
      const size = 10 + Math.random() * 14;
      const duration = 3.5 + Math.random() * 3.5;
      const delay = Math.random() * 0.8;
      const drift = (Math.random() - 0.5) * 140;
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

  btnOpen.addEventListener("click", function () {
    show(letter, start);
    spawnPetals(22);
  });

  btnPetals.addEventListener("click", function () {
    spawnPetals(36);
  });

  btnAgain.addEventListener("click", function () {
    show(start, letter);
  });

  if (!reduceMotion) {
    window.setTimeout(function () {
      spawnPetals(10);
    }, 600);
  }
})();
