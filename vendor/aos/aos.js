(function () {
  const AOS = {
    init(options = {}) {
      this.options = options;
      this.items = [...document.querySelectorAll("[data-aos]")];
      this.items.forEach((item) => {
        item.style.transitionDuration = `${options.duration || 800}ms`;
        const delay = item.getAttribute("data-aos-delay");
        if (delay) item.style.transitionDelay = `${delay}ms`;
      });
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
            if (options.once !== false) this.observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: `0px 0px -${options.offset || 80}px 0px` });
      this.items.forEach((item) => this.observer.observe(item));
    },
    refresh() {
      if (this.observer) this.observer.disconnect();
      this.init(this.options || {});
    }
  };
  window.AOS = AOS;
})();
