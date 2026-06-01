const destinations = [
  { title: "Neon Tokyo", country: "Japan", type: "city", price: "$4,850", image: "https://images.unsplash.com/photo-1533050487297-09b450131914?auto=format&fit=crop&w=900&q=80", text: "Design hotels, private food tours, temples, tech districts, and after-dark skyline rituals." },
  { title: "Lagoon Maldives", country: "Maldives", type: "island", price: "$6,200", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=80", text: "Overwater villas, reef exploration, private sandbank dining, and yacht transfers." },
  { title: "Aurora Iceland", country: "Iceland", type: "nature", price: "$5,780", image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=900&q=80", text: "Glacier routes, black beaches, thermal lagoons, and northern lights monitoring." },
  { title: "Future Dubai", country: "UAE", type: "city", price: "$3,940", image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80", text: "Skyline suites, desert dining, museum experiences, and private marina nights." },
  { title: "Quiet Bali", country: "Indonesia", type: "island", price: "$3,650", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80", text: "Jungle villas, wellness guides, surf coves, and ceremonial cultural access." },
  { title: "Alpine Lucerne", country: "Switzerland", type: "nature", price: "$5,120", image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=900&q=80", text: "Lake hotels, panoramic trains, mountain dining, and private snow experiences." }
];

const grid = document.querySelector("#destination-grid");
const buttons = document.querySelectorAll("[data-filter]");

function renderDestinations(type = "all") {
  if (!grid) return;
  const visible = type === "all" ? destinations : destinations.filter((item) => item.type === type);
  grid.innerHTML = visible.map((item, index) => `
    <article class="destination-card" data-aos="fade-up" data-aos-delay="${index * 80}" data-tilt>
      <img src="${item.image}" alt="${item.title}">
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
