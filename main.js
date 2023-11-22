"use strict";
// const number1 =
const number1 = document.querySelector(".number");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");


//  hidden pages

document.querySelector(".info-display").classList.remove("hidden-Display-step1");
document.querySelector(".adds-on-price-year").classList.add("year-price-hidden");
document.querySelector(".adds-on-price-month").classList.remove("month-price-hidden");
document.querySelector(".adds-on-price-year1").classList.add("year-price-hidden1");
document.querySelector(".adds-on-price-month1").classList.remove("month-price-hidden1");
document.querySelector(".adds-on-price-year2").classList.add("year-price-hidden2");
document.querySelector(".adds-on-price-month2").classList.remove("month-price-hidden2");
document.querySelector(".empty-check-box").style.backgroundColor = "transparent";
document.querySelector(".empty-check-box1").style.backgroundColor = "transparent";
document.querySelector(".empty-check-box2").style.backgroundColor = "transparent";

document.querySelector(".add-box").classList.remove("box-style");
document.querySelector(".add-box1").classList.remove("box-style");
document.querySelector(".add-box2").classList.remove("box-style");

const onlineServiceChoiceDisplay = document.querySelector(".display-adds-ons-online")
const largerServiceChoiceDisplay = document.querySelector(".display-adds-ons-larger")
const customizableServiceChoiceDisplay = document.querySelector(".display-adds-ons-customize")

const priceTagOnlineService = document.querySelector(".adds-on-price-month")
const priceTagLargerService = document.querySelector(".adds-on-price-month1")
const priceTagCustomizeService = document.querySelector(".adds-on-price-month2")











const hiddenPage1 = document.querySelector(".info-display");
const hiddenPage2 = document.querySelector(".info-display2");
const hiddenPage3 = document.querySelector(".info-display3");
// bsbsbsbsb
hiddenPage2.classList.add('hidden-Display-step2')
hiddenPage3.classList.add('hidden-Display-step3')
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

// buttons on step 3
const onlineService = document.getElementById("onlineService--");
const largerService = document.getElementById("LargerStorage--");
const customProfile = document.getElementById("customizableProfile--");


const checkBackground = document.querySelector(".empty-check-box")
const checkBackground1 = document.querySelector(".empty-check-box1")
const checkBackground2 = document.querySelector(".empty-check-box2")
const previousStep2 = document.getElementById("btn--4");
const nextBtnStep3 = document.getElementById("btn--5");




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
    priceTagOnlineService.textContent = '$10/yr'
    priceTagLargerService.textContent = '$20/yr'
    priceTagCustomizeService.textContent = '$30/yr'
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
    priceTagOnlineService.textContent = '$1/mo'
priceTagLargerService.textContent = '$2/mo'
priceTagCustomizeService.textContent = '$3/mo'
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
redRequired3.textContent = 'You have selected a plan'


    console.log("hmm");
  } else {
redRequired3.textContent = 'Please select a plan to proceed'
  }
});
// online button selector on step 3
let clickCount = 0
let clickCount1 = 0
let clickCount2 = 0

onlineService.addEventListener('click',function () {
  clickCount++
checkBackground.style.backgroundColor = "#0000FF";
document.querySelector(".add-box").classList.add("box-style");
onlineServiceChoiceDisplay.textContent = priceTagOnlineService.textContent
if (clickCount === 2) {
  clickCount = 0
  checkBackground.style.backgroundColor = "transparent";
document.querySelector(".add-box").classList.remove("box-style")
onlineServiceChoiceDisplay.textContent = ''
  console.log('Button clicked the second time or beyond.');


}


  console.log('ggsgsg');
  
})
largerService.addEventListener('click',function () {
  clickCount1++
checkBackground1.style.backgroundColor = "#0000FF";
document.querySelector(".add-box1").classList.add("box-style");
largerServiceChoiceDisplay.textContent = priceTagLargerService.textContent

if (clickCount1 === 2) {
  clickCount1 = 0
  checkBackground1.style.backgroundColor = "transparent";
document.querySelector(".add-box1").classList.remove("box-style")
largerServiceChoiceDisplay.textContent = ''
  console.log('Button clicked the second time or beyond.');


}


  console.log('ggsgsg');
  
})
customProfile.addEventListener('click',function () {
  clickCount2++
checkBackground2.style.backgroundColor = "#0000FF";
document.querySelector(".add-box2").classList.add("box-style");
customizableServiceChoiceDisplay.textContent = priceTagCustomizeService.textContent

if (clickCount2 === 2) {
  clickCount2 = 0
  checkBackground2.style.backgroundColor = "transparent";
document.querySelector(".add-box2").classList.remove("box-style")
customizableServiceChoiceDisplay.textContent = ''
  console.log('Button clicked the second time or beyond.');


}


  console.log('ggsgsg');
  
})
// previous page btn to step 2
previousStep2.addEventListener("click", function () {
  event.preventDefault();
  hiddenPage2.classList.remove("hidden-Display-step2");
  hiddenPage3.classList.add("hidden-Display-step3");
  number2.style.backgroundColor = "#a7eeee";
  number3.style.backgroundColor = "transparent";


  // switch to step 2
});

// next btn to summary page
nextBtnStep3.addEventListener('click',function () {
  console.log('gsggsgcc');
  
})

