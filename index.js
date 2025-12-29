const bill = document.getElementById("bill");
const tipPercentage = document.querySelectorAll("button[id]");
const numOfPeople = document.getElementById("num-of-people");
const tipAmount = document.getElementById("tip-amount");
const customValue = document.getElementById("custom-value");
const totalPerPerson = document.getElementById("total-per-person");
const resetButton = document.getElementById("reset");

let billValue = 0;
let tipValue = 0;
let selectedTip = 0;
let customTip = 0;
let peopleValue = 0;

// Bill Input
const getBillInput = (e) => {
  billValue = e.target.value;
  console.log(billValue, "Bill Input");

  getTotal();
};
bill.addEventListener("input", getBillInput);

// Tip Percentage Buttons
tipPercentage.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tipValue = e.target.id;
    selectedTip = e.target.id;
    tipPercentage.forEach((button) => {
      button.classList.remove("bg-[#26c0abff]");
    });
    e.target.classList.add("bg-[#26c0abff]");
    customValue.value = "";
    console.log(tipValue, "the value");

    getTotal();
  });
});

// Custom Tip Input
const getCustomTipValue = (e) => {
  const customTipPercentage = e.target.value;
  tipValue = customTipPercentage / 100;

  tipPercentage.forEach((button) => {
    button.classList.remove("bg-[#26c0abff]");
  });
  console.log(tipValue, "custom tip value");
};

customValue.addEventListener("input", getCustomTipValue);

// Number of People Input
const error = document.getElementById("error-msg");

const getNumOfPeople = (e) => {
  peopleValue = e.target.value;
  console.log(peopleValue, "num of people");

  if (peopleValue <= 0) {
    error.style.remove = "hidden";
    error.style.display = "block";
    numOfPeople.style.outlineColor = "#f37474ff";
    return;
  } else {
    error.style.add = "hidden";
    error.style.display = "none";
    numOfPeople.style.outline = "none";
  }

  getTotal();
};

numOfPeople.addEventListener("input", getNumOfPeople);

// Calculate Total
const getTotal = () => {
  if (billValue && tipValue && peopleValue) {
    const totalTip = billValue * tipValue;
    console.log(totalTip, "total tip");

    const totalTipPerPerson = totalTip / peopleValue;
    console.log(totalTipPerPerson, "total tip per person");

    const billPerPerson = billValue / peopleValue + totalTipPerPerson;
    console.log(billPerPerson, "bill per person");

    tipAmount.innerHTML = `$${totalTipPerPerson.toFixed(2)}`;
    totalPerPerson.innerHTML = `$${billPerPerson.toFixed(2)}`;
  }
};

// Reset Button
resetButton.addEventListener("click", () => {
  bill.value = "";
  tipPercentage.value = "";
  numOfPeople.value = "";
  tipAmount.innerHTML = "$0.00";
  totalPerPerson.innerHTML = "$0.00";
});
