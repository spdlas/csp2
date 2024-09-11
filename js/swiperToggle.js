let openSlider = document.getElementById("openSlider");
let swiper = document.querySelector(".swiper");
let closeSlider = document.querySelector("swiper--open");
let textSlider = document.querySelector(".read-text__title");
let imageRotate = document.querySelector(".read-text__image");
openSlider.addEventListener("click", function () {
  swiper.classList.toggle("swiper--open");

  if (swiper.classList.contains("swiper--open")) {
    textSlider.textContent = "Скрыть";
    imageRotate.classList.add("read-text--rotate");
  } else {
    imageRotate.classList.remove("read-text--rotate");
    textSlider.textContent = "Показать все";
  }
});
