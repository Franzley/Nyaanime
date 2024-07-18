const navbar = document.querySelector("header");
window.addEventListener("scroll", () => {
  // When the page is scrolling, apply class to nav
  if(window.innerWidth < 940){
    document.body.classList.toggle("window-scroll", window.scrollY > 0);
  }else{
    document.body.classList.toggle("window-scroll", window.scrollY > document.getElementById("navigation").offsetHeight);
  }
});