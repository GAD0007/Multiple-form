"use strict";
// const number1 =
const number1 = document.querySelector(".number");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");


//  hidden pages

document.querySelector(".info-display").classList.add("hidden-Display-step1");

const hiddenPage1 = document.querySelector(".info-display");
const hiddenPage2 = document.querySelector(".info-display2");
const hiddenPage3 = document.querySelector(".info-display3");
// bsbsbsbsb
hiddenPage2.classList.add('hidden-Display-step2')
hiddenPage3.classList.remove('hidden-Display-step3')
const blueMonth = document.querySelector(".toggle-details1");
const blueYear = document.querySelector(".toggle-details2");
blueYear.classList.remove("yearly-blue");

// input fields in step 1 page

const inputName = document.getElementById("name--");
const inputEmail = document.getElementById("email--");
const inputNumber = document.getElementById("phoneNumber--");
const redRequired = document.querySelector(".popDisplayName");
const redRequired2 = document.querySelector(".popDisplayNumber");
const nextBtnStep1 = document.getElementById("btn--1");

// buttons and elements on step 2
const redRequired3 = document.querySelector('.required-text')
const previousStep1 = document.getElementById("btn--2");
const nextBtnStep2 = document.getElementById("btn--3");
const arcadeBtn = document.getElementById("arcadeBtn--");
const advancedBtn = document.getElementById("advancedBtn--");
const proBtn = document.getElementById("proBtn--");
// const priceMonth = document.querySelector(".sub-price-details");
const priceYearDetails = document.querySelectorAll(
  ".sub-price-details-year-info"
);

const toggleSub = document.querySelector(".toggle-btn");
const toggleMonth = document.querySelector(".inner-circle-month");
const toggleYear = document.querySelector(".inner-circle-year");
const priceMonthArcade = document.querySelector(".sub-price-details1");
const priceMonthAdvanced = document.querySelector(".sub-price-details2");
const priceMonthPro = document.querySelector(".sub-price-details3");

// priceMonth.forEach(element => {
//   element.classList.remove('year-out-click');
// })

// making the month toggle visible
document.querySelector(".inner-circle-month").classList.remove("hidden-month");

const subDisplay = document.querySelector(".sub-type");
// display price of year sub click function

// price for month function on step 2

const priceForYear = function () {
  priceMonthArcade.textContent = "$90/yr";
  priceMonthAdvanced.textContent = "$120/yr";
  priceMonthPro.textContent = "$150/yr";
  if (subDisplay.textContent == "$9/mo") {
    subDisplay.textContent = priceMonthArcade.textContent;
    console.log(`9 dolls`);
  } else if (subDisplay.textContent == "$12/mo") {
    subDisplay.textContent = priceMonthAdvanced.textContent;

    console.log("12 dolls");
  } else if (subDisplay.textContent == "$15/mo") {
    subDisplay.textContent = priceMonthPro.textContent;
  }
};

// price for month function on step 2
const priceForMonth = function () {
  priceMonthArcade.textContent = "$9/mo";
  priceMonthAdvanced.textContent = "$12/mo";
  priceMonthPro.textContent = "$15/mo";
  if (subDisplay.textContent == "$90/yr") {
    subDisplay.textContent = priceMonthArcade.textContent;
    console.log(`9 dolls`);
  } else if (subDisplay.textContent == "$120/yr") {
    subDisplay.textContent = priceMonthAdvanced.textContent;

    console.log("12 dolls");
  } else if (subDisplay.textContent == "$150/yr") {
    subDisplay.textContent = priceMonthPro.textContent;
  }
};

// arcade button
arcadeBtn.addEventListener("click", function () {
  const arcadeBtnValue = 9;
  arcadeBtn.classList.add("sub-box-on-click");
  advancedBtn.classList.remove("sub-box-on-click");
  proBtn.classList.remove("sub-box-on-click");
  subDisplay.textContent = priceMonthArcade.textContent;

  // arcadeBtn.classList.remove('.sub-box-on-click')

  console.log(arcadeBtnValue);
});

// advanced button
advancedBtn.addEventListener("click", function () {
  const advancedBtnValue = 12;

  advancedBtn.classList.add("sub-box-on-click");
  arcadeBtn.classList.remove("sub-box-on-click");
  proBtn.classList.remove("sub-box-on-click");
  subDisplay.textContent = priceMonthAdvanced.textContent;

  console.log(advancedBtnValue);
});

// pro button
proBtn.addEventListener("click", function () {
  const proBtnValue = 15;
  proBtn.classList.add("sub-box-on-click");
  arcadeBtn.classList.remove("sub-box-on-click");
  advancedBtn.classList.remove("sub-box-on-click");
  subDisplay.textContent = priceMonthPro.textContent;

  console.log(proBtnValue);
});

// toggle button
let activeSub = 0;
toggleSub.addEventListener("click", function () {
  if (activeSub === 0) {
    console.log("switch to next");
    activeSub = 1;
    toggleMonth.classList.add("hidden-month");
    toggleYear.classList.remove("hidden-year");
    blueMonth.classList.remove("monthly-blue");
    blueYear.classList.add("yearly-blue");

    priceYearDetails.forEach((element) => {
      element.classList.remove("year-on-click");
    });
    priceForYear();
  } else if (activeSub === 1) {
    console.log("back to prev");
    activeSub = 0;
    toggleMonth.classList.remove("hidden-month");
    toggleYear.classList.add("hidden-year");
    blueMonth.classList.add("monthly-blue");
    blueYear.classList.remove("yearly-blue");

    priceYearDetails.forEach((element) => {
      element.classList.add("year-on-click");
    });
    priceForMonth();
  }
});

// next step button for step 1
nextBtnStep1.addEventListener("click", function () {
  let outName = inputName.value;
  let outEmail = inputEmail.value;
  let outNumber = inputNumber.value;

  if (outName === "" && outNumber === "") {
    // Code to execute if condition1 is true (pop up "this field is required message")

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

    console.log("next step");
    number1.style.backgroundColor = "transparent";
    number2.style.backgroundColor = "#a7eeee";

    // switch to step 2

    hiddenPage1.classList.add("hidden-Display-step1");
    hiddenPage2.classList.remove("hidden-Display-step2");
    // inputName.value = outName.value
  }

  console.log("Input Value:", outName, outEmail, outNumber);

  //  console.log(inputValue);
});

// go back  button to step 1
previousStep1.addEventListener("click", function () {
  event.preventDefault();
  hiddenPage1.classList.remove("hidden-Display-step1");
  hiddenPage2.classList.add("hidden-Display-step2");
  number1.style.backgroundColor = "#a7eeee";
  number2.style.backgroundColor = "transparent";

  // switch to step 2
});

// next step button for step 2
nextBtnStep2.addEventListener("click", function name(params) {
  if (
    subDisplay.textContent == "$90/yr" ||
    subDisplay.textContent == "$9/mo" ||
    subDisplay.textContent == "$120/yr" ||
    subDisplay.textContent == "$12/mo" ||
    subDisplay.textContent == "$15/mo" ||
    subDisplay.textContent == "$150/yr"
  ) {

    hiddenPage2.classList.add('hidden-Display-step2')
    hiddenPage3.classList.remove('hidden-Display-step3')
    number1.style.backgroundColor = "transparent";
    number2.style.backgroundColor = "transparent";
    number3.style.backgroundColor = "#a7eeee";

    console.log("hmm");
  } else {
redRequired3.textContent = 'Please select a plan to proceed'
  }
});
