"use strict";

const getZoomBtn = document.getElementById("zoomBtn");
const getWordElem = document.getElementById("word");

getZoomBtn.addEventListener("click", function () {
  if (this.textContent == "Zoom ind") {
    getWordElem.style.fontSize = "25rem";
    getWordElem.style.fontFamily = "times new roman, serif";
    getWordElem.style.color = "Red";
    this.textContent = "Zoom ud";
  } else {
    getWordElem.style.fontSize = "";
    getWordElem.style.fontFamily = "";
    getWordElem.style.color = "";
    this.textContent = "Zoom ind";
  }
});
