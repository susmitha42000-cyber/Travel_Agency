const packages = [
  { title: "Cyber Sakura Circuit", days: 7, price: 4850, image: "assets/images/japan.webp", imageAlt: "Japanese city skyline and cultural travel scene", route: "Tokyo, Kyoto, Osaka", perks: ["Bullet train routing", "Private tea ceremony", "Neon food crawl"] },
  { title: "Zero-Gravity Maldives", days: 5, price: 6200, image: "assets/images/destination_card.webp", imageAlt: "Turquoise Maldives lagoon with clear tropical beach water", route: "Male, Baa Atoll", perks: ["Overwater villa", "Yacht transfer", "Reef guide"] },
  { title: "Nordic Aurora Drive", days: 9, price: 5780, image: "assets/images/iceland.webp", imageAlt: "Iceland mountain landscape for an aurora driving route", route: "Reykjavik, Vik, Hofn", perks: ["Glacier guide", "Aurora alerts", "Thermal spa access"] },
  { title: "Dubai Skyline Luxe", days: 4, price: 3940, image: "assets/images/Dubai_skyline.webp", imageAlt: "Dubai skyline at sunset for a luxury city tour", route: "Dubai, Abu Dhabi", perks: ["Sky suite", "Desert dinner", "Private driver"] },
  { title: "Bali Wellness Matrix", days: 8, price: 3650, image: "assets/images/luxgery_resort.webp", imageAlt: "Luxury resort pool surrounded by tropical scenery", route: "Ubud, Uluwatu", perks: ["Jungle villa", "Spa rituals", "Surf guide"] },
  { title: "Paris Design Weekender", days: 3, price: 2980, image: "assets/images/italiancoast.webp", imageAlt: "Coastal village view used for a design-focused weekender", route: "Paris", perks: ["Boutique hotel", "Chef table", "Museum access"] }
];

const packageGrid = document.querySelector("#package-grid");
const sort = document.querySelector("#package-sort");

function renderPackages(items = packages) {
  if (!packageGrid) return;
  packageGrid.innerHTML = items.map((item, index) => `
    <article class="package-card" data-aos="fade-up" data-aos-delay="${index * 70}" data-tilt>
      <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" decoding="async">
      <div>
        <span>${item.days} days • ${item.route}</span>
        <h3>${item.title}</h3>
        <p>From <strong>$${item.price.toLocaleString()}</strong> per guest</p>
        <ul>${item.perks.map((perk) => `<li>${perk}</li>`).join("")}</ul>
        <button class="btn btn-ghost full package-request" type="button" data-package="${item.title}">Request Quote</button>
      </div>
    </article>
  `).join("");
  packageGrid.querySelectorAll(".package-request").forEach((button) => {
    button.addEventListener("click", () => showPackageFeedback(button));
  });
  if (window.NovaAnimations) window.NovaAnimations.attachTilt();
  if (window.AOS) AOS.refresh();
}

function showPackageFeedback(button) {
  const packageName = button.dataset.package || "this package";
  const card = button.closest(".package-card");
  const existingStatus = card?.querySelector(".package-feedback");

  if (existingStatus) existingStatus.remove();

  button.textContent = "Inquiry Sent";
  button.disabled = true;
  button.setAttribute("aria-disabled", "true");

  card?.querySelector("div").insertAdjacentHTML("beforeend", `
    <p class="package-feedback" role="status">Thanks. Your inquiry for ${packageName} has been received, and our travel team will follow up with quote options.</p>
  `);
}

if (sort) {
  sort.addEventListener("change", () => {
    const items = [...packages];
    if (sort.value === "price") items.sort((a, b) => a.price - b.price);
    if (sort.value === "days") items.sort((a, b) => b.days - a.days);
    renderPackages(items);
  });
}

renderPackages();
