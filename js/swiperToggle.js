let openSlider = document.getElementById("openSlider");
let swiper = document.querySelector(".swiper-partners");
let textSlider = document.querySelector(".read-text__title");
let imageRotate = document.querySelector(".read-text__image");

openSlider.addEventListener("click", function () {
  swiper.classList.toggle("swiper--open");
  imageRotate.classList.toggle("read-text--rotate");
  textSlider.textContent = swiper.classList.contains("swiper--open")
    ? "Скрыть"
    : "Показать все";
});
