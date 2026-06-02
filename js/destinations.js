const destinations = [
  { title: "Neon Tokyo", country: "Japan", type: "city", price: "$4,850", image: "assets/images/japan.webp", imageAlt: "Tokyo city skyline and Japanese cultural travel scene", text: "Design hotels, private food tours, temples, tech districts, and after-dark skyline rituals." },
  { title: "Lagoon Maldives", country: "Maldives", type: "island", price: "$6,200", image: "assets/images/destination_card.webp", imageAlt: "Clear turquoise Maldives lagoon and tropical beach", text: "Overwater villas, reef exploration, private sandbank dining, and yacht transfers." },
  { title: "Aurora Iceland", country: "Iceland", type: "nature", price: "$5,780", image: "assets/images/iceland.webp", imageAlt: "Iceland mountain road landscape for northern lights travel", text: "Glacier routes, black beaches, thermal lagoons, and northern lights monitoring." },
  { title: "Future Dubai", country: "UAE", type: "city", price: "$3,940", image: "assets/images/Dubai_skyline.webp", imageAlt: "Dubai skyline at sunset", text: "Skyline suites, desert dining, museum experiences, and private marina nights." },
  { title: "Quiet Bali", country: "Indonesia", type: "island", price: "$3,650", image: "assets/images/luxgery_resort.webp", imageAlt: "Luxury resort pool for a Bali wellness escape", text: "Jungle villas, wellness guides, surf coves, and ceremonial cultural access." },
  { title: "Alpine Lucerne", country: "Switzerland", type: "nature", price: "$5,120", image: "assets/images/open%20mountain.webp", imageAlt: "Open mountain road through an alpine landscape", text: "Lake hotels, panoramic trains, mountain dining, and private snow experiences." }
];

const grid = document.querySelector("#destination-grid");
const buttons = document.querySelectorAll("[data-filter]");

function renderDestinations(type = "all") {
  if (!grid) return;
  const visible = type === "all" ? destinations : destinations.filter((item) => item.type === type);
  grid.innerHTML = visible.map((item, index) => `
    <article class="destination-card" data-aos="fade-up" data-aos-delay="${index * 80}" data-tilt>
      <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" decoding="async">
      <div>
        <span>${item.country}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="destination-meta"><strong>${item.price}</strong><small>${item.type}</small></div>
      </div>
    </article>
  `).join("");
  if (window.NovaAnimations) window.NovaAnimations.attachTilt();
  if (window.AOS) AOS.refresh();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderDestinations(button.dataset.filter);
  });
});

renderDestinations();
