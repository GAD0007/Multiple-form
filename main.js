"use strict";
// const number1 =
const number1 = document.querySelector(".number");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number4 = document.querySelector(".number4");



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
const hiddenPage4 = document.querySelector(".info-display4");
const hiddenPage5 = document.querySelector(".info-display5");


// bsbsbsbsb
hiddenPage2.classList.add('hidden-Display-step2')
hiddenPage3.classList.add('hidden-Display-step3')
hiddenPage4.classList.add('hidden-Display-step4')
hiddenPage5.classList.add('hidden-Display-step5')


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
const nextBtnStep1SmallScreen = document.getElementById("btn--1-small");

// btn--1-small

// buttons and elements on step 2
const redRequired3 = document.querySelector('.required-text')
const previousStep1 = document.getElementById("btn--2");
const previousStep1Small = document.getElementById("btn--2-small");

const nextBtnStep2 = document.getElementById("btn--3");
const nextBtnStep2Small = document.getElementById("btn--3-small");

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
const previousStep2Small = document.getElementById("btn--4-small");
const nextBtnStep3Small = document.getElementById("btn--5-small");
const previousStep3 = document.getElementById("btn--6");
const previousStep3Small = document.getElementById("btn--6-small");

const confirmBtn = document.getElementById("btn--7");




const subNameDisplay = document.querySelector(".sub-type-name");
const subMonthDisplay = document.querySelector(".month-year");
const DisplayAddsOnline = document.querySelector(".display-online-details");
const DisplayAddsLarger = document.querySelector(".display-larger-details");
const DisplayAddsCustomize = document.querySelector(".display-customize-details");

// btns on step 4
const changeBtnStep4 = document.getElementById("btn-change");
const totalAtEnd = document.querySelector(".totalValueFinal");
const monthYearEndDisplay = document.querySelector(".month-year-total");







// making the month toggle visible
document.querySelector(".inner-circle-month").classList.remove("hidden-month");

const subDisplay = document.querySelector(".sub-type");


// function for next btn on page 1


const nextPage1Function = function name(params) {
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

    // console.log("next step");
    number1.style.backgroundColor = "transparent";
    number2.style.backgroundColor = "#a7eeee";

    // switch to step 2

    hiddenPage1.classList.add("hidden-Display-step1");
    hiddenPage2.classList.remove("hidden-Display-step2");
    // inputName.value = outName.value
  }

  
}

// back t0 page 1 function

const backToPage1 = function name(params) {
  event.preventDefault();
  hiddenPage1.classList.remove("hidden-Display-step1");
  hiddenPage2.classList.add("hidden-Display-step2");
  number1.style.backgroundColor = "#a7eeee";
  number2.style.backgroundColor = "transparent";
  
}

// to page 3 function
const toPage3 = function name(params) {
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


    // console.log("hmm");
  } else {
redRequired3.textContent = 'Please select a plan to proceed'
  }
  
}

// back to page 2 function

const backToPage2 = function () {
  event.preventDefault();
  hiddenPage2.classList.remove("hidden-Display-step2");
  hiddenPage3.classList.add("hidden-Display-step3");
  number2.style.backgroundColor = "#a7eeee";
  number3.style.backgroundColor = "transparent";
  
}

// to summary and calculation page
const sumCalc = function (params) {
  let subValue= 0
  let onlineServiceValue = 0
  let largerServiceValue = 0
  let customizableServiceValue = 0

  number1.style.backgroundColor = "transparent";
  number2.style.backgroundColor = "transparent";
  number3.style.backgroundColor = "transparent";
  number4.style.backgroundColor = "#a7eeee";

  hiddenPage3.classList.add('hidden-Display-step3')
hiddenPage4.classList.remove('hidden-Display-step4')
if (subDisplay.textContent) {
  if (subDisplay.textContent == "$9/mo" ) {
    subValue=9
    
    
  } else if (subDisplay.textContent == "$90/yr") {
    subValue=90
    
  }
  else if (subDisplay.textContent == "$12/mo") {
    subValue=12
    
  }
  else if (subDisplay.textContent == "$120/yr") {
    subValue=120
    
  }else if (subDisplay.textContent == "$15/mo") {
    subValue=15
    
  }else if (subDisplay.textContent == "$150/yr") {
    subValue=150
    
  }

}
if(onlineServiceChoiceDisplay.textContent){
  if (onlineServiceChoiceDisplay.textContent == "$10/yr") {
    onlineServiceValue = 10
  } else ( onlineServiceValue = 1)

}
if(largerServiceChoiceDisplay.textContent){
  if (largerServiceChoiceDisplay.textContent == "$20/yr") {
    largerServiceValue = 20
  } else ( largerServiceValue = 2)

}
if(customizableServiceChoiceDisplay.textContent){
  if (customizableServiceChoiceDisplay.textContent == "$30/yr") {
    customizableServiceValue = 30
  } else ( customizableServiceValue = 3)

}
  // console.log( subValue);
  // console.log( onlineServiceValue);
  // console.log( largerServiceValue);
  // console.log( customizableServiceValue);
  const totalValueFinally = subValue + onlineServiceValue + customizableServiceValue + largerServiceValue
  totalAtEnd.textContent = totalValueFinally

 
  
}

// back to page 3 
const backtopage3 = function () {
  event.preventDefault();
  hiddenPage4.classList.add("hidden-Display-step4");
  hiddenPage3.classList.remove("hidden-Display-step3");
  number4.style.backgroundColor = "transparent";

  number3.style.backgroundColor = "#a7eeee";
  
}

// change btn
const changeSubBtn = function () {
  if (window.innerWidth <441) {
    document.querySelector('.button-bg22').style.display = 'block'
  document.querySelector('.button-bg1').style.display = 'none'
  document.querySelector('.button-bg33').style.display = 'none'
  document.querySelector('.button-bg44').style.display = 'none'
    
  }
  number1.style.backgroundColor = "transparent";
  number2.style.backgroundColor = "#a7eeee";
  number3.style.backgroundColor = "transparent";
  number4.style.backgroundColor = "transparent";
hiddenPage1.classList.add("hidden-Display-step1")
hiddenPage3.classList.add("hidden-Display-step3")
hiddenPage4.classList.add("hidden-Display-step4")
hiddenPage2.classList.remove("hidden-Display-step2")
  
}
// display price of year sub click function

// price for month function on step 2

const priceForYear = function () {
  priceMonthArcade.textContent = "$90/yr";
  priceMonthAdvanced.textContent = "$120/yr";
  priceMonthPro.textContent = "$150/yr";
  if (subDisplay.textContent == "$9/mo") {
    subDisplay.textContent = priceMonthArcade.textContent;
    // console.log(`9 dolls`);
  } else if (subDisplay.textContent == "$12/mo") {
    subDisplay.textContent = priceMonthAdvanced.textContent;

    // console.log("12 dolls");
  } else if (subDisplay.textContent == "$15/mo") {
    subDisplay.textContent = priceMonthPro.textContent;
  }
  subMonthDisplay.textContent = '(Yearly)'
  document.querySelector('.month-year2').textContent = '(per year)'
  monthYearEndDisplay.textContent = 'yr'
  // priceTagOnlineService.textContent = '$10/yr'

 if (onlineServiceChoiceDisplay.textContent) {
   if (onlineServiceChoiceDisplay.textContent = '$1/mo') {
     
     onlineServiceChoiceDisplay.textContent = priceTagOnlineService.textContent
   }
 }
 if (largerServiceChoiceDisplay.textContent) {
   if (largerServiceChoiceDisplay.textContent = '$2/mo') {
     
     largerServiceChoiceDisplay.textContent = priceTagLargerService.textContent
   }
 }
 if (customizableServiceChoiceDisplay.textContent) {
   if (customizableServiceChoiceDisplay.textContent = '$3/mo') {
     
     customizableServiceChoiceDisplay.textContent = priceTagCustomizeService.textContent
   }
 }
  
};

// price for month function on step 2
const priceForMonth = function () {
  priceMonthArcade.textContent = "$9/mo";
  priceMonthAdvanced.textContent = "$12/mo";
  priceMonthPro.textContent = "$15/mo";
  if (subDisplay.textContent == "$90/yr") {
    subDisplay.textContent = priceMonthArcade.textContent;
    // console.log(`9 dolls`);
  } else if (subDisplay.textContent == "$120/yr") {
    subDisplay.textContent = priceMonthAdvanced.textContent;

    // console.log("12 dolls");
  } else if (subDisplay.textContent == "$150/yr") {
    subDisplay.textContent = priceMonthPro.textContent;
  }
  document.querySelector('.month-year2').textContent = '(per month)'

  subMonthDisplay.textContent = '(Monthly)'
  monthYearEndDisplay.textContent = 'mo'
  if (onlineServiceChoiceDisplay.textContent) {
    if (onlineServiceChoiceDisplay.textContent = '$10/yr') {
      
      onlineServiceChoiceDisplay.textContent = priceTagOnlineService.textContent
    }
  }
  if (largerServiceChoiceDisplay.textContent) {
    if (largerServiceChoiceDisplay.textContent = '$20/yr') {
      
      largerServiceChoiceDisplay.textContent = priceTagLargerService.textContent
    }
  }
  if (customizableServiceChoiceDisplay.textContent) {
    if (customizableServiceChoiceDisplay.textContent = '$30/yr') {
      
      customizableServiceChoiceDisplay.textContent = priceTagCustomizeService.textContent
    }
  }

};

// arcade button
arcadeBtn.addEventListener("click", function () {
  const arcadeBtnValue = 9;
  arcadeBtn.classList.add("sub-box-on-click");
  advancedBtn.classList.remove("sub-box-on-click");
  proBtn.classList.remove("sub-box-on-click");
  subDisplay.textContent = priceMonthArcade.textContent;
  subNameDisplay.textContent = 'Arcade'

  // arcadeBtn.classList.remove('.sub-box-on-click')

  // console.log(arcadeBtnValue);
});

// advanced button
advancedBtn.addEventListener("click", function () {
  const advancedBtnValue = 12;

  advancedBtn.classList.add("sub-box-on-click");
  arcadeBtn.classList.remove("sub-box-on-click");
  proBtn.classList.remove("sub-box-on-click");
  subDisplay.textContent = priceMonthAdvanced.textContent;
  subNameDisplay.textContent = 'Advanced'


  // console.log(advancedBtnValue);
});

// pro button
proBtn.addEventListener("click", function () {
  const proBtnValue = 15;
  proBtn.classList.add("sub-box-on-click");
  arcadeBtn.classList.remove("sub-box-on-click");
  advancedBtn.classList.remove("sub-box-on-click");
  subDisplay.textContent = priceMonthPro.textContent;
  subNameDisplay.textContent = 'Pro'


  // console.log(proBtnValue);
});

// toggle button
let activeSub = 0;
toggleSub.addEventListener("click", function () {
  if (activeSub === 0) {
    // console.log("switch to next");
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
    // console.log("back to prev");
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
nextBtnStep1SmallScreen.addEventListener("click",function name(params) {
  nextPage1Function()
  document.querySelector('.button-bg22').style.display = 'block'
  document.querySelector('.button-bg1').style.display = 'none'

  
})
nextBtnStep1.addEventListener("click", nextPage1Function 
  
  

  // console.log("Input Value:", outName, outEmail, outNumber);

  //  console.log(inputValue);
);

// go back  button to step 1
previousStep1Small.addEventListener("click", function () {
 backToPage1()
  document.querySelector('.button-bg22').style.display = 'none'
  document.querySelector('.button-bg1').style.display = 'block'

  // switch to step 2
});
previousStep1.addEventListener("click", backToPage1);

// next step button for step 2
nextBtnStep2.addEventListener("click", toPage3);
nextBtnStep2Small.addEventListener("click", function () {
  toPage3()
  document.querySelector('.button-bg22').style.display = 'none'
  document.querySelector('.button-bg1').style.display = 'none'
  document.querySelector('.button-bg33').style.display = 'block'

  
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
DisplayAddsOnline.textContent = 'Online service'

if (clickCount === 2) {
  clickCount = 0
  checkBackground.style.backgroundColor = "transparent";
document.querySelector(".add-box").classList.remove("box-style")
onlineServiceChoiceDisplay.textContent = ''
DisplayAddsOnline.textContent = ''
  // console.log('Button clicked the second time or beyond.');


}


  // console.log('ggsgsg');
  
})
largerService.addEventListener('click',function () {
  clickCount1++
checkBackground1.style.backgroundColor = "#0000FF";
document.querySelector(".add-box1").classList.add("box-style");
largerServiceChoiceDisplay.textContent = priceTagLargerService.textContent
DisplayAddsLarger.textContent = 'Larger service'


if (clickCount1 === 2) {
  clickCount1 = 0
  checkBackground1.style.backgroundColor = "transparent";
document.querySelector(".add-box1").classList.remove("box-style")
largerServiceChoiceDisplay.textContent = ''
DisplayAddsLarger.textContent = ''

  // console.log('Button clicked the second time or beyond.');


}


  // console.log('ggsgsg');
  
})
customProfile.addEventListener('click',function () {
  clickCount2++
checkBackground2.style.backgroundColor = "#0000FF";
document.querySelector(".add-box2").classList.add("box-style");
customizableServiceChoiceDisplay.textContent = priceTagCustomizeService.textContent
DisplayAddsCustomize.textContent = 'Customize service'

if (clickCount2 === 2) {
  clickCount2 = 0
  checkBackground2.style.backgroundColor = "transparent";
document.querySelector(".add-box2").classList.remove("box-style")
customizableServiceChoiceDisplay.textContent = ''
DisplayAddsCustomize.textContent = ''


  // console.log('Button clicked the second time or beyond.');


}


  // console.log('ggsgsg');
  
})


// switch to step 2
previousStep2Small.addEventListener("click", function () {
  backToPage2()
  document.querySelector('.button-bg22').style.display = 'block'
  document.querySelector('.button-bg1').style.display = 'none'
  document.querySelector('.button-bg33').style.display = 'none'

})
  previousStep2.addEventListener("click", backToPage2);


  // previous page btn to step 3
  // switch to step 2
previousStep3Small.addEventListener("click", function () {
  backtopage3()
  document.querySelector('.button-bg22').style.display = 'none'
  document.querySelector('.button-bg1').style.display = 'none'
  document.querySelector('.button-bg33').style.display = 'block'
  document.querySelector('.button-bg44').style.display = 'none'

})

previousStep3.addEventListener("click", backtopage3);

// next btn to summary page
nextBtnStep3Small.addEventListener('click',function () {
  sumCalc ()
  document.querySelector('.button-bg22').style.display = 'none'
  document.querySelector('.button-bg1').style.display = 'none'
  document.querySelector('.button-bg33').style.display = 'none'
  document.querySelector('.button-bg44').style.display = 'block'


})
nextBtnStep3.addEventListener('click',sumCalc)


// change btn
// changeBtnStep4Small.addEventListener('click',function (params) {
//   changeSubBtn()
//   document.querySelector('.button-bg22').style.display = 'block'
//   document.querySelector('.button-bg1').style.display = 'none'
//   document.querySelector('.button-bg33').style.display = 'none'
//   document.querySelector('.button-bg44').style.display = 'none'

// })

changeBtnStep4.addEventListener('click',changeSubBtn)

// confirm button
confirmBtn.addEventListener("click", function () {
  hiddenPage1.classList.add("hidden-Display-step1")
  hiddenPage2.classList.add("hidden-Display-step2")
hiddenPage3.classList.add("hidden-Display-step3")
hiddenPage4.classList.add("hidden-Display-step4")
hiddenPage5.classList.remove("hidden-Display-step5")
document.querySelector('.button-bg22').style.display = 'none'
document.querySelector('.button-bg1').style.display = 'none'
document.querySelector('.button-bg33').style.display = 'none'
document.querySelector('.button-bg44').style.display = 'none'


})


