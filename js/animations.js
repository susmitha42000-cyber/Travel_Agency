(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function attachTilt() {
    if (reduceMotion) return;
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${y * -8}deg) rotateY(${x * 10}deg) translateY(-4px)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  function animateCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const counter = entry.target;
        const target = Number(counter.dataset.counter);
        const decimal = String(target).includes(".");
        let current = 0;
        const step = target / 70;
        const tick = () => {
          current += step;
          if (current >= target) {
            counter.textContent = decimal ? target.toFixed(1) : Math.round(target).toLocaleString();
            return;
          }
          counter.textContent = decimal ? current.toFixed(1) : Math.round(current).toLocaleString();
          requestAnimationFrame(tick);
        };
        tick();
        observer.unobserve(counter);
      });
    }, { threshold: 0.5 });
    counters.forEach((counter) => observer.observe(counter));
  }

  function newsletter() {
    document.querySelectorAll("[data-newsletter]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const button = form.querySelector("button");
        const original = button.textContent;
        button.textContent = "Subscribed";
        form.reset();
        setTimeout(() => { button.textContent = original; }, 2200);
      });
    });
  }

  attachTilt();
  animateCounters();
  newsletter();
  window.NovaAnimations = { attachTilt };
})();
