"use strict";

// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.classList.add("bounce");
//     setTimeout(()=>this.classList.remove("bounce"),600);
// });

// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.classList.add("shake");
//     setTimeout(()=>this.classList.remove("shake"),400);
// });

// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.classList.add("spin");
//     setTimeout(()=>this.classList.remove("spin"),600);
// });

const getWordElem = document.getElementById("word");

// Fjerner fade animationen uden at fjerne den fra css //
getWordElem.addEventListener("click", function () {
  this.classList.remove("fade");
});

// Tilføjer spin animationen //
getWordElem.addEventListener("click", function() {
this.classList.add("spin");
}); 