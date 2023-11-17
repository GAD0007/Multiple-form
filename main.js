"use strict";
// const number1 =
const number1 = document.querySelector(".number");
const number2 = document.querySelector(".number2");

//  hidden pages

document.querySelector(".info-display").classList.remove("hidden-Display-step1");
const hiddenPage1 = document.querySelector(".info-display");
const hiddenPage2 = document.querySelector(".info-display2");

// input fields in step 1 page

const inputName = document.getElementById("name--");
const inputEmail = document.getElementById("email--");
const inputNumber = document.getElementById("phoneNumber--");
const redRequired = document.querySelector(".popDisplayName");
const redRequired2 = document.querySelector(".popDisplayNumber");
const arcadeBtn = document.getElementById("arcadeBtn--");
const advancedBtn = document.getElementById("advancedBtn--");
const proBtn = document.getElementById("proBtn--");
// arcadeBtn.value = 9
// advancedBtn.value = 12
// proBtn.value = 15


// console.log(arcadeBtn.value);
// console.log(arcadeBtnValue);


// // subsciption prices in step 2
// const arcadePrice = '9' 

// // next btn on the first page
// const arcadeBtn = document.getElementById("btn-arcade");
// arcadeBtn.addEventListener("click", function () {
//   console.log(arcadePrice);
// })

//  function savedValue () {
//   const arcadeBtnValue = 9 
//   // return arcadeBtnValue
//   console.log(arcadeBtnValue);
// }

// savedValue()
const subDisplay = document.querySelector('.sub-type')


arcadeBtn.addEventListener("click", function () {
  const arcadeBtnValue = 9 
  subDisplay.textContent = 'Arcade'
  arcadeBtn.classList.add('sub-box-on-click')
  advancedBtn.classList.remove('sub-box-on-click')
  proBtn.classList.remove('sub-box-on-click')

  // arcadeBtn.classList.remove('.sub-box-on-click')



  console.log(arcadeBtnValue);
})

advancedBtn.addEventListener("click", function () {
  const advancedBtnValue = 12 
  subDisplay.textContent = 'Advanced'
  advancedBtn.classList.add('sub-box-on-click')
  arcadeBtn.classList.remove('sub-box-on-click')
  proBtn.classList.remove('sub-box-on-click')

  console.log(advancedBtnValue);
})
proBtn.addEventListener("click", function () {
  const proBtnValue = 15 
  subDisplay.textContent = 'pro'
  proBtn.classList.add('sub-box-on-click')
  arcadeBtn.classList.remove('sub-box-on-click')
  advancedBtn.classList.remove('sub-box-on-click')

  console.log(proBtnValue);
})



const nextBtn = document.getElementById("btn--1");
nextBtn.addEventListener("click", function () {
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
  }

  console.log("Input Value:", outName, outEmail, outNumber);

  //  console.log(inputValue);
});

