const storedUser = JSON.parse(localStorage.getItem("stacklyUser") || "{}");

if (storedUser.displayName || storedUser.email) {
  document.querySelectorAll("[data-user-name]").forEach((element) => {
    element.textContent = storedUser.displayName || "Traveler";
  });

  document.querySelectorAll("[data-user-email]").forEach((element) => {
    element.textContent = storedUser.email || "";
  });
}

const dashboardLinks = document.querySelectorAll("[data-dashboard-link]");
const dashboardViews = document.querySelectorAll("[data-dashboard-view]");

function showDashboardView(viewName) {
  dashboardLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.dashboardLink === viewName);
  });

  dashboardViews.forEach((view) => {
    view.classList.toggle("active", view.dataset.dashboardView === viewName);
  });
}

dashboardLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showDashboardView(link.dataset.dashboardLink);
  });
});
