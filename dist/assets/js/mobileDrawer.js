const mobileNavIcon = document.querySelector(".mobile-menu-icon");

mobileNavIcon.addEventListener("click", () => {
  const isOpened = mobileNavIcon.getAttribute("aria-expanded");
  if (isOpened === "false") {
    mobileNavIcon.setAttribute("aria-expanded", "true");
    document.body.classList.toggle("mobile-drawer-open");
  } else {
    mobileNavIcon.setAttribute("aria-expanded", "false");
    document.body.classList.toggle("mobile-drawer-open");
  }
});