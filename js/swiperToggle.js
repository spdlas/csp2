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

let openSliderTech = document.getElementById("openSliderTech");
let swiperTech = document.querySelector(".swiper-tech");
let imageRotateTech = document.getElementById("readTextImageTech");
let textSliderTech = document.getElementById("readTextTitleTech");

openSliderTech.addEventListener("click", function () {
  swiperTech.classList.toggle("swiper-tech--open");
  imageRotateTech.classList.toggle("read-text--rotate");
  textSliderTech.textContent = swiperTech.classList.contains(
    ".swiper-tech--open"
  )
    ? "Скрыть"
    : "Показать все";
});
