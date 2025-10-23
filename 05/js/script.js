"use strict";

const changeImgBtn = document.getElementById("changeImage");
const getImage = document.getElementById("imagePlaceholder");

changeImgBtn.addEventListener("click", function () {
  if (this.textContent == "Fill beer") {
    getImage.src = "img/full.png";
    this.textContent = "Drink beer";
  } else {
    getImage.src = "img/empty.png";
    this.textContent = "Fill beer";
  }
});
