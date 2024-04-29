"use strict";

console.log("It is working");

window.onload = init;

function init() {
  const addButton = document.querySelector("#addButton");
  const subtractButton = document.querySelector("#subtractButton");
  const multiplyButton = document.querySelector("#multiplyButton");
  const divideButton = document.querySelector("#divideButton");

  addButton.addEventListener("click", add);
  subtractButton.addEventListener("click", subtract);
  multiplyButton.addEventListener("click", multiply);
  divideButton.addEventListener("click", divide);
}

function add() {
  //get the values out of the input fields the user types in
  let number1 = Number(document.querySelector("#number1Field").value);
  let number2 = Number(document.querySelector("#number2Field").value);

  //add those numbers together
  let result = number1 + number2;

  //put tge result in the answer input field
  document.querySelector("#answerField").value = result;
}

function subtract() {
  //get the values out of the input fields the user types in
  let number1 = Number(document.querySelector("#number1Field").value);
  let number2 = Number(document.querySelector("#number2Field").value);

  //add those numbers together
  let result = number1 - number2;

  //put tge result in the answer input field
  document.querySelector("#answerField").value = result;
}

function multiply() {
  //get the values out of the input fields the user types in
  let number1 = Number(document.querySelector("#number1Field").value);
  let number2 = Number(document.querySelector("#number2Field").value);

  //add those numbers together
  let result = number1 * number2;

  //put tge result in the answer input field
  document.querySelector("#answerField").value = result;
}

function divide() {
  //get the values out of the input fields the user types in
  let number1 = Number(document.querySelector("#number1Field").value);
  let number2 = Number(document.querySelector("#number2Field").value);

  //add those numbers together
  let result = number1 / number2;

  //put tge result in the answer input field
  document.querySelector("#answerField").value = result;
}
