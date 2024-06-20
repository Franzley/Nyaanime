const accordionTriggers = document.querySelectorAll(".accordion-trigger");

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const isOpened = trigger.getAttribute("aria-expanded");
    const subList = trigger.parentElement.querySelector(".mobile-drawer-sublist");
    if (isOpened === "false") {
      trigger.setAttribute("aria-expanded", "true");
      trigger.parentElement.classList.add("accordion");
      subList.style.maxHeight = `${subList.scrollHeight}px`; 
    } else {
      trigger.setAttribute("aria-expanded", "false");
      trigger.parentElement.classList.remove("accordion");
      subList.style.maxHeight = "0";
    }
  });
});
