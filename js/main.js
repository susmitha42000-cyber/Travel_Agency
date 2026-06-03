const loaderStart = Date.now();
let loader = document.querySelector(".loader");

if (!loader) {
  loader = document.createElement("div");
  loader.className = "loader";
  loader.setAttribute("aria-hidden", "true");
  loader.innerHTML = `
    <div class="loader-logo-wrap">
      <img src="assets/images/Logo.webp" alt="Stackly logo">
      <div class="loader-ring"></div>
    </div>
    <span>Loading...</span>
  `;
  document.body.prepend(loader);
}

window.addEventListener("load", () => {
  const elapsed = Date.now() - loaderStart;
  const remaining = Math.max(0, 350 - elapsed);

  window.setTimeout(() => {
    loader.classList.add("hidden");
  }, remaining);
});

document.querySelectorAll(".glass-card, .destination-card, .package-card, .package-mini, .gallery-category-card, .gallery-item, .testimonial-spotlight, .style-list > div, .planning-highlights article").forEach((card, index) => {
  if (!card.hasAttribute("data-aos")) card.setAttribute("data-aos", "fade-up");
  if (!card.hasAttribute("data-aos-delay")) card.setAttribute("data-aos-delay", String(Math.min(index % 4, 3) * 80));
});

if (window.AOS) {
  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: true,
    offset: 80
  });
}

if (window.NovaParticles) {
  window.NovaParticles.init("particle-canvas");
}

document.querySelectorAll("a[href]").forEach((link) => {
  const href = link.getAttribute("href");
  const transition = document.querySelector(".page-transition");

  if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

  link.addEventListener("click", (event) => {
    if (link.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (transition) transition.classList.add("active");
    window.setTimeout(() => {
      window.location.href = href;
    }, 220);
  });
});
