const galleryImages = [
  ["assets/images/destination_card.webp", "Clear turquoise tropical beach water"],
  ["assets/images/Dubai_skyline.webp", "Dubai skyline glowing at sunset"],
  ["assets/images/japan.webp", "Japanese city and cultural travel scene"],
  ["assets/images/open%20mountain.webp", "Open mountain road through a rugged landscape"],
  ["assets/images/luxgery_resort.webp", "Luxury resort pool surrounded by tropical scenery"],
  ["assets/images/iceland.webp", "Iceland landscape beneath a dramatic northern sky"],
  ["assets/images/italiancoast.webp", "Italian coastal village above the sea"],
  ["assets/images/open%20mountain.webp", "Wide mountain road for a scenic driving route"],
  ["assets/images/japan.webp", "Tokyo skyline and urban travel scene"],
  ["assets/images/safari.webp", "Safari landscape in golden hour light"],
  ["assets/images/Dubai_skyline.webp", "Dubai city skyline for a luxury desert gateway"],
  ["assets/images/iceland.webp", "Iceland valley and mountain travel landscape"],
  ["assets/images/italiancoast.webp", "Italian coast village and blue sea"],
  ["assets/images/travellers.webp", "Travelers planning a trip together"],
  ["assets/images/luxgery_resort.webp", "Resort pool with mountain views"],
  ["assets/images/open%20mountain.webp", "Highland route through open mountains"],
  ["assets/images/travellers.webp", "Friends exploring a scenic destination"],
  ["assets/images/destination_card.webp", "Tropical beach destination for a luxury escape"]
];

const galleryGrid = document.querySelector("#gallery-grid");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox ? lightbox.querySelector("img") : null;
const galleryHeroCopy = document.querySelector(".page-hero .hero-copy");

const createGallerySection = (html) => {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
};

if (galleryHeroCopy) {
  galleryHeroCopy.insertAdjacentHTML("beforeend", `
    <div class="gallery-hero-strip" aria-label="Featured gallery previews">
      <img src="assets/images/destination_card.webp" alt="Turquoise tropical beach" loading="lazy" decoding="async">
      <img src="assets/images/japan.webp" alt="Tokyo skyline at night" loading="lazy" decoding="async">
      <img src="assets/images/japan.webp" alt="Kyoto shrine walkway" loading="lazy" decoding="async">
      <img src="assets/images/safari.webp" alt="Safari landscape" loading="lazy" decoding="async">
    </div>
  `);
}

if (galleryGrid) {
  const gallerySection = galleryGrid.closest(".section");
  const moodSection = createGallerySection(`
    <section class="section gallery-intro-section">
      <div class="container">
        <div class="section-heading" data-aos="fade-up">
          <div>
            <p class="eyebrow">Travel moods</p>
            <h2>Browse the moments our travelers ask for most</h2>
          </div>
          <a href="404.html" class="text-link">Plan a photo-ready trip</a>
        </div>
        <div class="gallery-category-grid">
          <article class="gallery-category-card" data-aos="fade-up"><img src="assets/images/destination_card.webp" alt="Clear tropical beach water" loading="lazy" decoding="async"><div><span>Beaches</span><h3>Blue Water Escapes</h3></div></article>
          <article class="gallery-category-card" data-aos="fade-up" data-aos-delay="100"><img src="assets/images/Dubai_skyline.webp" alt="Dubai city skyline" loading="lazy" decoding="async"><div><span>Cities</span><h3>Skyline Evenings</h3></div></article>
          <article class="gallery-category-card" data-aos="fade-up" data-aos-delay="200"><img src="assets/images/open%20mountain.webp" alt="Mountain road landscape" loading="lazy" decoding="async"><div><span>Mountains</span><h3>Open-Air Routes</h3></div></article>
          <article class="gallery-category-card" data-aos="fade-up" data-aos-delay="300"><img src="assets/images/luxgery_resort.webp" alt="Bali resort pool" loading="lazy" decoding="async"><div><span>Resorts</span><h3>Private Slow Days</h3></div></article>
        </div>
      </div>
    </section>
  `);
  const featureSection = createGallerySection(`
    <section class="section split-band">
      <div class="container gallery-feature">
        <div data-aos="fade-right">
          <p class="eyebrow">Featured album</p>
          <h2>From arrival views to once-in-a-lifetime evenings</h2>
          <p class="muted">A wider look at the places, stays, transfers, and quiet details that make a Stackly journey feel effortless.</p>
          <div class="hero-actions"><a href="404.html" class="btn btn-primary">View Photos</a><a href="404.html" class="btn btn-ghost">Explore Tours</a></div>
        </div>
        <div class="gallery-feature-collage" data-aos="fade-left">
          <img class="feature-large" src="assets/images/luxgery_resort.webp" alt="Luxury resort pool with mountain view" loading="lazy" decoding="async">
          <img src="assets/images/iceland.webp" alt="Northern lights sky" loading="lazy" decoding="async">
          <img src="assets/images/italiancoast.webp" alt="Paris city landmark" loading="lazy" decoding="async">
        </div>
      </div>
    </section>
  `);
  const storySection = createGallerySection(`
    <section class="section gallery-story-section">
      <div class="container">
        <div class="section-heading" data-aos="fade-up">
          <div>
            <p class="eyebrow">Trip details</p>
            <h2>Gallery stories beyond the postcard</h2>
          </div>
        </div>
        <div class="gallery-story-grid">
          <article class="glass-card" data-aos="fade-up"><span class="step">01</span><h3>Arrival Views</h3><p>Airport transfers, first hotel moments, and routes designed to start the trip calmly.</p></article>
          <article class="glass-card" data-aos="fade-up" data-aos-delay="100"><span class="step">02</span><h3>Local Flavor</h3><p>Markets, private guides, chef tables, and cultural stops chosen around your pace.</p></article>
          <article class="glass-card" data-aos="fade-up" data-aos-delay="200"><span class="step">03</span><h3>Celebration Scenes</h3><p>Anniversaries, honeymoons, birthdays, and quiet surprise moments shaped with care.</p></article>
        </div>
      </div>
    </section>
  `);

  gallerySection.before(moodSection);
  gallerySection.before(featureSection);
  gallerySection.querySelector(".container").insertAdjacentHTML("afterbegin", `
    <div class="section-heading" data-aos="fade-up">
      <div>
        <p class="eyebrow">Photo wall</p>
        <h2>More places, more textures, more reasons to go</h2>
      </div>
    </div>
  `);
  gallerySection.after(storySection);

  galleryGrid.innerHTML = galleryImages.map(([src, label], index) => `
    <figure class="gallery-item" data-aos="fade-up" data-aos-delay="${index * 50}">
      <img src="${src}" alt="${label}" loading="lazy" decoding="async">
      <span>${label}</span>
    </figure>
  `).join("");

  galleryGrid.addEventListener("click", (event) => {
    const image = event.target.closest(".gallery-item")?.querySelector("img");
    if (!image || !lightboxImage || !lightbox) return;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target.classList.contains("lightbox-close")) {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
    }
  });
}
