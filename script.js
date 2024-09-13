const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const buttonheader = document.querySelector(".nav-button");

function handleScroll() {
  if (window.scrollY > hero.offsetHeight) {
    header.id = "scroll";
    buttonheader.id = "nav-button2";
  } else {
    header.id = "";
    buttonheader.id = "";
  }
}

window.addEventListener("scroll", handleScroll);
