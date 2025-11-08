// Smooth page load animation
window.addEventListener("load", () => {
  document.querySelectorAll(".card").forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 200);
  });
});

// Animate card click + navigate
function animateCard(element, page) {
  element.style.animation = "bounceZoom 0.6s ease";
  setTimeout(() => {
    window.location.href = page;
  }, 600);
}

// Logout confirmation
function logout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "login.html";
  }
}
