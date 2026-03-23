// Dark Mode
function toggleMode() {
  document.body.classList.toggle("dark");
}

// Scroll Animation
const elements = document.querySelectorAll(".fade");

function showOnScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();
