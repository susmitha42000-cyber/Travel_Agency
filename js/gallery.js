const galleryImages = [
  ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80", "Turquoise coast"],
  ["https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80", "Dubai night"],
  ["https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=900&q=80", "Kyoto shrine"],
  ["https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80", "Mountain road"],
  ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80", "Bali retreat"],
  ["https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80", "Northern sky"],
  ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80", "Paris icons"],
  ["https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=80", "Open road"],
  ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80", "Tokyo skyline"],
  ["https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=900&q=80", "Safari golden hour"],
  ["https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=80", "Desert palace"],
  ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80", "Yosemite valley"],
  ["https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80", "Italian coast"],
  ["https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80", "Travel planning"],
  ["https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", "Resort pool"],
  ["https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80", "Highland route"],
  ["https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80", "Friends exploring"],
  ["https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=900&q=80", "Airport departure"]
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
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=420&q=80" alt="Turquoise tropical beach">
      <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=420&q=80" alt="Tokyo skyline at night">
      <img src="https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=420&q=80" alt="Kyoto shrine walkway">
      <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=420&q=80" alt="Safari landscape">
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
          <a href="contact.html" class="text-link">Plan a photo-ready trip</a>
        </div>
        <div class="gallery-category-grid">
          <article class="gallery-category-card" data-aos="fade-up"><img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=720&q=80" alt="Clear tropical beach water"><div><span>Beaches</span><h3>Blue water escapes</h3></div></article>
          <article class="gallery-category-card" data-aos="fade-up" data-aos-delay="100"><img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=720&q=80" alt="Dubai city skyline"><div><span>Cities</span><h3>Skyline evenings</h3></div></article>
          <article class="gallery-category-card" data-aos="fade-up" data-aos-delay="200"><img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=720&q=80" alt="Mountain road landscape"><div><span>Mountains</span><h3>Open-air routes</h3></div></article>
          <article class="gallery-category-card" data-aos="fade-up" data-aos-delay="300"><img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=720&q=80" alt="Bali resort pool"><div><span>Resorts</span><h3>Private slow days</h3></div></article>
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
          <div class="hero-actions"><a href="#gallery-grid" class="btn btn-primary">View Photos</a><a href="tours.html" class="btn btn-ghost">Explore Tours</a></div>
        </div>
        <div class="gallery-feature-collage" data-aos="fade-left">
          <img class="feature-large" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=950&q=85" alt="Luxury resort pool with mountain view">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=620&q=80" alt="Northern lights sky">
          <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=620&q=80" alt="Paris city landmark">
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
