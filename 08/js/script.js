"use strict";

// const getWordElem = document.getElementById("word");

const getWordElem = document.getElementById("word");

// Fjerner fade animationen uden at fjerne den fra css //
getWordElem.addEventListener("click", function () {
  this.classList.remove("fade");
});

// Tilføjer spin animationen ved klik på "Hop!" //
getWordElem.addEventListener("click", function () {
  this.classList.add("spin");
});

// Tilføjer shake animationen efter timeout tiden //
setTimeout(() => {
  getWordElem.classList.add("shake");
}, 5000);
