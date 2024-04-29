"use strict";

window.onload = init;

function init() {
  const calculateBtn = document.querySelector("#mortgageCalcBtn");

  //include eventlistener whenever user click on the calculate it will call the monthlypayment function
  calculateBtn.addEventListener("click", monthlyPayment);
}

function monthlyPayment() {
  //taking the value that user will input and instanciating to new variable
  let principalAmount = Number(document.querySelector("#principal").value);
  let interestRate = Number(document.querySelector("#interest").value);
  let loanLength = Number(document.querySelector("#loanLength").value);

  //Convert length of Loan from year to month for calculation
  //there are 12 months in a year
  let loanLengthMth = loanLength * 12;

  //convert yearly interest rate to monthly interest rate
  let interestRateMthly = interestRate / 12 / 100;

  let monthlyPmt =
    principalAmount *
    interestRateMthly *
    (Math.pow(1 + interestRateMthly, loanLengthMth) /
      (Math.pow(1 + interestRateMthly, loanLengthMth) - 1));

  let totalAmount = monthlyPmt * loanLengthMth;
  let interestPaid = totalAmount - principalAmount;

  //Result for user
  let message = `A ${principalAmount.toFixed(2)} loan at ${interestRate.toFixed(
    3
  )}% interest for ${loanLength} years would have a ${monthlyPmt.toFixed(2)}/mo
  payment with a total interest of ${interestPaid.toFixed(2)}`;

  //printing the message
  document.querySelector("#answerField").innerHTML = message;
}
