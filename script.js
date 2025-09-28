// Footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// Toggle menu
function toggleMenu() {
  const nav = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const overlay = document.getElementById("overlay");

  nav.classList.toggle("show");
  hamburger.classList.toggle("active");

  if (nav.classList.contains("show")) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
}

// Demo Product View
function openProduct(productId) {
  alert("Product details for: " + productId + "\n(This can be expanded later.)");
}
