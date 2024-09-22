const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const buttonheader = document.querySelector(".nav-button");

function haderScroll() {
  if (window.scrollY > hero.offsetHeight - 100) {
    header.setAttribute("id", "scroll");
    buttonheader.setAttribute("id", "nav-button2");
  } else {
    header.removeAttribute("id");
    buttonheader.removeAttribute("id");
  }
}

window.addEventListener("scroll", haderScroll);
