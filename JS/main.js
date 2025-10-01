let nav = document.querySelector(".navbar");
let mainImg = document.querySelector(".cli-img");
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 785) {
    nav.style.backgroundColor = "#00000085";
  } else {
    nav.style.backgroundColor = "transparent";
  }
});

function changImage(img){
    mainImg.src = img.src;
    mainImg.alt = img.alt;
}