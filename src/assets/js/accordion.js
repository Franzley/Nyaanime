const accordionTriggers = document.querySelectorAll(".accordion-trigger");

if (window.innerWidth < 940) {
  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const isOpened = trigger.getAttribute("aria-expanded");
      const subList = trigger.parentElement.querySelector(
        ".mobile-drawer-sublist"
      );
      if (isOpened === "false") {
        trigger.setAttribute("aria-expanded", "true");
        trigger.parentElement.classList.add("accordion");
        subList.style.display = `block`;
        subList.style.height = `${0}px`; // Initialize element height to zero
        subList.style.height = `${subList.scrollHeight}px`; // Scale height
        setTimeout(() => {
          subList.style.height = "auto"; // Set height to scale dynamically
        }, 300);
      } else {
        trigger.setAttribute("aria-expanded", "false");
        trigger.parentElement.classList.remove("accordion");
        subList.style.height = `${subList.scrollHeight}px`; // Set to current height
        setTimeout(() => {
          subList.style.height = "0"; // Reset height
        }, 10);
        subList.addEventListener(
          "transitionend",
          () => {
            subList.style.display = "none"; // Set to display none after css transition has finished
          },
          { once: true }
        );
      }
    });
  });
}
