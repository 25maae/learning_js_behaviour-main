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

const getWordElem = document.getElementById("word");

getWordElem.addEventListener("click", function () {
  if (this.textContent == "Just Do It") {
    this.innerHTML = "<strong>Nike</strong>";
  } else {
    this.innerHTML = "Just Do It";
  }
});
