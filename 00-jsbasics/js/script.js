"use strict";

// Måder at vise tekst på //
document.write("Hello World!"); // Skriver tekst direkte på siden //
alert("Hello World!"); // Viser en popup-boks //
console.log("Hello World!"); // Viser tekst i browserens konsol //

// Variabler //
const pi = 3.14; // Konstant variabel, kan ikke ændres //
let age = 21; // Variabel, kan ændres //
let FirstName = "Simon"; // PascalCase variabel (Navngivningskonvention) //
let firstName = "Mathilde"; // CamelCase variabel (Navngivningskonvention) //
let first_name = "Martin"; // Snake_case variabel (Navngivningskonvention) //
let SimonAge = 21; // Numerisk variabel //
let mathildeAge = 99;
let martin_age = 23;

console.log(`jeg hedder ${FirstName} og jeg er ${SimonAge} år`); // Jeg hedder Simon og jeg er 21 år
console.log(`jeg hedder ${firstName} og jeg er ${mathildeAge} år`); // Jeg hedder Mathilde og jeg er 99 år
console.log(`jeg hedder ${first_name} og jeg er ${martin_age} år`); // Jeg hedder Martin og jeg er 23 år

// Aritmetiske operationer //
age = 22; // Ændrer værdien af variablen age //
age += 1; // Øger værdien af age med 1 //
age -= 1; // Mindsker værdien af age med 1 //
age *= 2; // Ganger værdien af age med 2 //
age /= 2; // Dividerer værdien af age med 2 //
age %= 5; // Sætter age til resten af age divideret med 5 //
age++; // Øger værdien af age med 1 //
age--; // Mindsker værdien af age med 1 //

// Funktioner //
function greetings() {
  console.log("Hej med dig!"); // Viser en hilsen i konsollen //
}
greetings(); // Kalder funktionen greetings //

function addNumbers(x, y) {
  const sum = x + y; // Laver summen af x og y //
  return sum; // Returnerer summen //
}
const result = addNumbers(1, 2); // Kalder funktionen addNumbers med argumenterne 1 og 2 //
console.log(result); // Viser resultatet i konsollen //
