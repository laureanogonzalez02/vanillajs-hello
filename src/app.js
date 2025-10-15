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

//crea numeros aleatorios para elegir las partes de la excusa
function indexSelector() {
  let randomWhoAndAction = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  let randomIndexWhat = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  let randomIndexWhen = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
  return [randomWhoAndAction, randomIndexWhat, randomIndexWhen];
}

//usa los numeros para generar la excusa
function excuseGenerator() {
  const [indexWho] = indexSelector();
  const [indexAction] = indexSelector();
  const [, indexWhat] = indexSelector();
  const [, , indexWhen] = indexSelector();
  let excusa = [
    who[indexWho],
    action[indexAction],
    what[indexWhat],
    when[indexWhen],
  ];
  let p = document.querySelector(".excuses");
  p.textContent = excusa.join(" ");
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    document.body.style.visibility = "visible";
  });
  const boton = document.querySelector(".boton");
  boton.addEventListener("click", () => {
    location.reload();
  });
  excuseGenerator();
});
