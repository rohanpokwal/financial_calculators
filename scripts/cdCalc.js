"use strict";

window.onload = init;

function init() {
  //access the button
  const cdCalcBtn = document.querySelector("#cdCalcBtn");

  //add a eventlistener on click and pass the function
  cdCalcBtn.addEventListener("click", calculate);
}

function calculate() {
  //instanciate variables and connect with their respective Id's
  let depositAmount = Number(document.querySelector("#depositAmount").value);

  let interestRate = Number(document.querySelector("#interestRate").value);

  let interestRateInDec = interestRate / 100;

  let maturityYears = Number(document.querySelector("#maturityYears").value);

  //calculation of Future Value
  //Breakdown of calculation
  let futureValue =
    depositAmount * Math.pow(1 + interestRateInDec / 365, maturityYears * 365);

  //calculate Interest Earned
  let inerestEarned = futureValue - depositAmount;

  //Result to user
  let message = `If you deposit ${depositAmount.toFixed(
    2
  )} in a CD that earns ${interestRate.toFixed(
    2
  )}% interest and matures in ${maturityYears} years, your CD's ending balance will be ${futureValue.toFixed(
    2
  )} and you would have earned ${inerestEarned.toFixed(2)} in interest`;

  document.querySelector("#answerField").innerHTML = message;
}
