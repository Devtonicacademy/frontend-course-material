"use strict";

// Light Bulb Project
const lightBulb = document.querySelector("img");
const toggleBtn = document.getElementById("toggleButton");
// console.log(lightBulb, toggleBtn);

toggleBtn.addEventListener("click", function () {
  //   console.log(lightBulb.src.includes("pic_bulboff.gif"));

  if (lightBulb.src.includes("pic_bulboff.gif")) {
    lightBulb.src = "pic_bulbon.gif";
    toggleBtn.textContent = "Off";
  } else {
    lightBulb.src = "pic_bulboff.gif";
    toggleBtn.textContent = "On";
  }
});
