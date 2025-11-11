// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  // accessibility toggle
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact Form
const form = document.getElementById("contactForm");
const resetBtn = document.getElementById("resetBtn");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "✅ Your message has been sent successfully!";
  formMessage.style.color = "green";
  form.reset();
});

resetBtn.addEventListener("click", () => {
  form.reset();
  formMessage.textContent = "";
});
