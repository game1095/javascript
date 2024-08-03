const calculatorDisplay = document.querySelector("h1");
const inputBtn = document.querySelectorAll("button"); //get array from tag button
const clearBtn = document.getElementById("clear-btn");

const calculate = {
  "/": (firstNumber, secondNumber) =>
    secondNumber > 0 ? firstNumber / secondNumber : "Error",
  "*": (firstNumber, secondNumber) => firstNumber * secondNumber,
  "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
  "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
  "=": (firstNumber, secondNumber) => secondNumber,
};

let firstValue = 0;
let operatorValue = "";
let waitForNext = false; //เก็บสถานะตัวเลข 1 และตัวดำเนินการ

function setNumberValue(number) {
  if (waitForNext) {
    calculatorDisplay.textContent = number;
    waitForNext = false;
  } else {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === "0" ? number : displayValue + number;
  }
}

function callOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
  if (operatorValue && waitForNext) {
    operatorValue = operator;
    return;
  }
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    const result = calculate[operatorValue](firstValue, currentValue);
    calculatorDisplay.textContent = result;
    firstValue = result;
    if(firstValue === 'error'){
      resetAll();
    }
  }
  operatorValue = operator;
  waitForNext = true;
}

function addDecimal() {
  if (waitForNext) return;
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

inputBtn.forEach((input) => {
  // numberBtn 0-9
  if (input.classList.length === 0) {
    input.addEventListener("click", () => setNumberValue(input.value));
    // ปุ่ม + - * /
  } else if (input.classList.contains("operator")) {
    input.addEventListener("click", () => callOperator(input.value));
    // ปุ่ม .
  } else if (input.classList.contains("decimal")) {
    input.addEventListener("click", () => addDecimal());
  }
});

// clear number on calculatorDisplay

function resetAll(){
  firstValue = 0;
  operatorValue = "";
  waitForNext = false;
  calculatorDisplay.textContent = "0";
}

clearBtn.addEventListener("click", () => resetAll());
