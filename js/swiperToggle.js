let swiper = document.querySelector(".swiper-partners");
let textSlider = document.querySelector(".read-text__title");
let imageRotate = document.querySelector(".read-text__image");
let imageRotateTech = document.getElementById("readTextImageTech");
let wind = document.querySelector(".main");
let swiperTech = document.querySelector(".swiper-tech");
let textSliderTech = document.getElementById("readTextTitleTech");

wind.addEventListener("click", function (evt) {
  let mis = evt.target;
  if (mis.id == "readTextTitleTech") {
    swiperTech.classList.toggle("swiper-tech--open");
    imageRotateTech.classList.toggle("read-text--rotate");
    textSliderTech.textContent = swiperTech.classList.contains(
      "swiper-tech--open"
    )
      ? "Скрыть"
      : "Показать все";
  } else if (mis.id == "openSlider") {
    swiper.classList.toggle("swiper--open");
    imageRotate.classList.toggle("read-text--rotate");
    textSlider.textContent = swiper.classList.contains("swiper--open")
      ? "Скрыть"
      : "Показать все";
  }
});
