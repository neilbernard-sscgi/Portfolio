function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Get the container element
var btnContainer = document.getElementById("myDIV");

function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
// detailsContainer.appendChild(btnContainer);

// darkmode ---------
const iconDiv = document.querySelector(".theme");
let icon = document.querySelector(".mode");

iconDiv.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./assets/sun.png";
  } else {
    icon.src = "./assets/moon.png";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section-container-tr");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("trans");
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.2 }
  ); // Adjust threshold for when animation triggers

  sections.forEach((section) => observer.observe(section));
});
