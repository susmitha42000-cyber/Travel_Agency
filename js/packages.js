const packages = [
  { title: "Cyber Sakura Circuit", days: 7, price: 4850, image: "assets/images/japan.webp", route: "Tokyo, Kyoto, Osaka", perks: ["Bullet train routing", "Private tea ceremony", "Neon food crawl"] },
  { title: "Zero-Gravity Maldives", days: 5, price: 6200, image: "assets/images/destination_card.webp", route: "Male, Baa Atoll", perks: ["Overwater villa", "Yacht transfer", "Reef guide"] },
  { title: "Nordic Aurora Drive", days: 9, price: 5780, image: "assets/images/iceland.webp", route: "Reykjavik, Vik, Hofn", perks: ["Glacier guide", "Aurora alerts", "Thermal spa access"] },
  { title: "Dubai Skyline Luxe", days: 4, price: 3940, image: "assets/images/Dubai_skyline.webp", route: "Dubai, Abu Dhabi", perks: ["Sky suite", "Desert dinner", "Private driver"] },
  { title: "Bali Wellness Matrix", days: 8, price: 3650, image: "assets/images/luxgery_resort.webp", route: "Ubud, Uluwatu", perks: ["Jungle villa", "Spa rituals", "Surf guide"] },
  { title: "Paris Design Weekender", days: 3, price: 2980, image: "assets/images/italiancoast.webp", route: "Paris", perks: ["Boutique hotel", "Chef table", "Museum access"] }
];

const packageGrid = document.querySelector("#package-grid");
const sort = document.querySelector("#package-sort");

function renderPackages(items = packages) {
  if (!packageGrid) return;
  packageGrid.innerHTML = items.map((item, index) => `
    <article class="package-card" data-aos="fade-up" data-aos-delay="${index * 70}" data-tilt>
      <img src="${item.image}" alt="${item.title}">
      <div>
        <span>${item.days} days • ${item.route}</span>
        <h3>${item.title}</h3>
        <p>From <strong>$${item.price.toLocaleString()}</strong> per guest</p>
        <ul>${item.perks.map((perk) => `<li>${perk}</li>`).join("")}</ul>
        <a class="btn btn-ghost full" href="404.html">Request Quote</a>
      </div>
    </article>
  `).join("");
  if (window.NovaAnimations) window.NovaAnimations.attachTilt();
  if (window.AOS) AOS.refresh();
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
