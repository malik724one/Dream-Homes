// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  // accessibility toggle
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);
});



// ===== PROPERTY MODAL FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("property-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalLocation = document.getElementById("modal-location");
  const modalPrice = document.getElementById("modal-price");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close-btn");

  // Add event listener for each View Details button
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".property-card");
      modalTitle.textContent = card.getAttribute("data-title");
      modalLocation.textContent = card.getAttribute("data-location");
      modalPrice.textContent = card.getAttribute("data-price");
      modalDescription.textContent = card.getAttribute("data-description");

      modal.style.display = "flex"; // Show modal
    });
  });

  // Close modal on button click
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
