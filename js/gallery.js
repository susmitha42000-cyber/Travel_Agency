const galleryImages = [
  ["assets/images/destination_card.webp", "Turquoise coast"],
  ["assets/images/Dubai_skyline.webp", "Dubai night"],
  ["assets/images/japan.webp", "Kyoto shrine"],
  ["assets/images/open%20mountain.webp", "Mountain road"],
  ["assets/images/luxgery_resort.webp", "Bali retreat"],
  ["assets/images/iceland.webp", "Northern sky"],
  ["assets/images/italiancoast.webp", "Paris icons"],
  ["assets/images/open%20mountain.webp", "Open road"],
  ["assets/images/japan.webp", "Tokyo skyline"],
  ["assets/images/safari.webp", "Safari golden hour"],
  ["assets/images/Dubai_skyline.webp", "Desert palace"],
  ["assets/images/iceland.webp", "Yosemite valley"],
  ["assets/images/italiancoast.webp", "Italian coast"],
  ["assets/images/travellers.webp", "Travel planning"],
  ["assets/images/luxgery_resort.webp", "Resort pool"],
  ["assets/images/open%20mountain.webp", "Highland route"],
  ["assets/images/travellers.webp", "Friends exploring"],
  ["assets/images/destination_card.webp", "Airport departure"]
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
      <img src="assets/images/destination_card.webp" alt="Turquoise tropical beach">
      <img src="assets/images/japan.webp" alt="Tokyo skyline at night">
      <img src="assets/images/japan.webp" alt="Kyoto shrine walkway">
      <img src="assets/images/safari.webp" alt="Safari landscape">
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
          <article class="gallery-category-card" data-aos="fade-up"><img src="assets/images/destination_card.webp" alt="Clear tropical beach water"><div><span>Beaches</span><h3>Blue water escapes</h3></div></article>
          <article class="gallery-category-card" data-aos="fade-up" data-aos-delay="100"><img src="assets/images/Dubai_skyline.webp" alt="Dubai city skyline"><div><span>Cities</span><h3>Skyline evenings</h3></div></article>
          <article class="gallery-category-card" data-aos="fade-up" data-aos-delay="200"><img src="assets/images/open%20mountain.webp" alt="Mountain road landscape"><div><span>Mountains</span><h3>Open-air routes</h3></div></article>
          <article class="gallery-category-card" data-aos="fade-up" data-aos-delay="300"><img src="assets/images/luxgery_resort.webp" alt="Bali resort pool"><div><span>Resorts</span><h3>Private slow days</h3></div></article>
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
          <img class="feature-large" src="assets/images/luxgery_resort.webp" alt="Luxury resort pool with mountain view">
          <img src="assets/images/iceland.webp" alt="Northern lights sky">
          <img src="assets/images/italiancoast.webp" alt="Paris city landmark">
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
      <img src="${src}" alt="${label}">
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
