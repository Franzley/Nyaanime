const navbar = document.querySelector("header");
window.addEventListener("scroll", () => {
  // When the page is scrolling, apply class to nav
  navbar.classList.toggle("window-scroll", window.scrollY > 0);
});