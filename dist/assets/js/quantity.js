const quantityBtn = document.querySelector(".quantity-option");
const quantityWrapper = document.querySelector(".quantity-wrapper");

quantityBtn.addEventListener("click", () => {
  const isOpened = quantityBtn.getAttribute("aria-expanded");

  if (isOpened === "false") {
    quantityBtn.setAttribute("aria-expanded", "true");
    quantityWrapper.classList.toggle("quantity-open");
  } else {
    quantityBtn.setAttribute("aria-expanded", "false");
    quantityWrapper.classList.toggle("quantity-open");
  }
});


const quantityOption = document.querySelector(".quantity-select");
const options = document.querySelectorAll(".quantity-select__option");
const quanityActive = document.querySelector(".quantity p");

quantityOption.addEventListener("click", (e)=>{
  options.forEach(x => {
    x.classList.remove("active")
    if (x.getAttribute("value") == e.target.value){
      x.classList.add("active")
      quanityActive.innerHTML = e.target.value
      quantityBtn.setAttribute("aria-expanded", "false");
      quantityWrapper.classList.toggle("quantity-open");
    }
  });
})