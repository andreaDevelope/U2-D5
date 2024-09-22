const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const buttonheader = document.querySelector(".nav-button");

function haderScroll() {
  if (window.scrollY > hero.offsetHeight) {
    header.setAttribute("id", "scroll");
    buttonheader.setAttribute("id", "nav-button2");
  } else {
    header.removeAttribute("id");
    buttonheader.removeAttribute("id");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const textGroup = document.getElementById("textGroup");

  function animationM() {
    if (textGroup.classList.contains("charat-entra")) {
      textGroup.classList.remove("charat-entra");
      textGroup.classList.add("charat-esce");
    } else {
      textGroup.classList.remove("charat-esce");
      textGroup.classList.add("charat-entra");
    }

    setTimeout(toggleAnimation, Math.random() * 1000 + 1000);
  }

  animationM();
});

window.addEventListener("scroll", haderScroll);
