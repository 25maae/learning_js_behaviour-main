"use strict";

// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {
//     this.innerHTML = "<strong>BILKA!</strong>"
// });

// const getWordElem = document.getElementById("word");

// getWordElem.addEventListener("click", function() {

//     if (this.textContent == "Hvem ka"){
//         this.innerHTML = "<strong>BILKA!</strong>";
//     }
//     else {
//         this.innerHTML = "Hvem ka";
//      }
// });

const getWordElemNike = document.getElementById("word-nike");

getWordElemNike.addEventListener("click", function () {
  if (this.textContent == "Just Do It") {
    this.innerHTML = "<strong>Nike</strong>";
  } else {
    this.innerHTML = "Just Do It";
  }
});

const getWordElemBilka = document.getElementById("word-bilka");

getWordElemBilka.addEventListener("click", function () {
  if (this.textContent == "Hvem ka") {
    this.innerHTML = "<strong>BILKA!</strong>";
  } else {
    this.innerHTML = "Hvem ka";
  }
});
