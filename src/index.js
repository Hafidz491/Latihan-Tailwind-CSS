// HAMBURGER
const navMenu = document.querySelector("#nav-menu");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// CLICK EVERYWHERE TO CLOSE THE MENU TOGGLE
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// NAVBAR FIXED
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const btnTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    btnTop.classList.remove("hidden");
    btnTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    btnTop.classList.remove("flex");
    btnTop.classList.add("hidden");
  }
};

// DARK MODE TOGGLE
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// MOVING TOGGLE ACCORDING THEME
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
