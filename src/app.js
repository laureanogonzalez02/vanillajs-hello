import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["The dog", "My grandma", "The mailman", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "my phone", "the car"];
const when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
];

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateExcuse() {
  const sentenceParts = [];
  const partsArrays = [who, action, what, when];
  partsArrays.forEach((partList) => {
    sentenceParts.push(getRandomElement(partList));
  });
  return sentenceParts.join(" ") + ".";
}

function showExcuse() {
  let p = document.querySelector(".excuses");
  p.textContent = generateExcuse();
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    document.body.style.visibility = "visible";
  });
  const boton = document.querySelector(".boton");
  boton.addEventListener("click", () => {
    location.reload();
  });
  showExcuse();
});
