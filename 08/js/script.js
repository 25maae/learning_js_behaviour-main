"use strict";

const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function () {
  setTimeout(() => this.classList.remove("fade"), 1000);
});

getWordElem.classList.add("myAnimation");