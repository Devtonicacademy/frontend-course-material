"use strict";

const hamburger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }),
);
