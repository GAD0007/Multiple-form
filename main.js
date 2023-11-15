"use strict";

const inputName = document.getElementById("name--");
const inputEmail = document.getElementById("email--");
const inputNumber = document.getElementById("phoneNumber--");
const redRequired = document.querySelector(".popDisplayName");
const redRequired2 = document.querySelector(".popDisplayNumber");

const nextBtn = document.getElementById('btn--1');

// next btn on the first page
nextBtn.addEventListener("click", function () {
  let outName = inputName.value;
  let outEmail = inputEmail.value;
  let outNumber = inputNumber.value;

  if (outName === "" && outNumber === "") {
    // Code to execute if condition1 is true
    redRequired2.classList.remove("hiddenPopNumber");
    redRequired.classList.remove("hiddenPopName");
  } else if (outNumber === "") {
    // Code to execute if condition1 is false and condition2 is true
    redRequired2.classList.remove("hiddenPopNumber");
    redRequired.classList.add("hiddenPopName");
  } else if (outName === "") {
    // Code to execute if condition1 is false and condition2 is true
    redRequired2.classList.add("hiddenPopNumber");
    redRequired.classList.remove("hiddenPopName");
  } else {
    // Code to execute if both condition1 and condition2 are false
    console.log('next step');
  }

  console.log("Input Value:", outName, outEmail, outNumber);

  //  console.log(inputValue);
});
