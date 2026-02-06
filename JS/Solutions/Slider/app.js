"use strict";

const slides = document.querySelectorAll(".slide");
console.log(slides);

let currentSlide = 0;
let maxSlide = slides.length;

console.log(currentSlide);

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
};

setInterval(nextSlide, 3000);
