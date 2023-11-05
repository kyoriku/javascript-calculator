var calculate = document.getElementById('calculation-display')
var results = document.getElementById('result-display')
var zeroBtn = document.getElementById('0-btn');
var oneBtn = document.getElementById('1-btn');
var twoBtn = document.getElementById('2-btn');
var threeBtn = document.getElementById('3-btn');
var fourBtn = document.getElementById('4-btn');
var fiveBtn = document.getElementById('5-btn');
var sixBtn = document.getElementById('6-btn');
var sevenBtn = document.getElementById('7-btn');
var eightBtn = document.getElementById('8-btn');
var nineBtn = document.getElementById('9-btn');
var divideBtn = document.getElementById('divide-btn');
var multiplyBtn = document.getElementById('multiply-btn');
var subtractBtn = document.getElementById('subtract-btn');
var addBtn = document.getElementById('add-btn');
var decimalBtn = document.getElementById('decimal-btn');
var equalBtn = document.getElementById('equal-btn');
var clearBtn = document.getElementById('clear-btn');
var deleteBtn = document.getElementById('delete-btn');
var calculation = '';

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function updateCalculation(value) {
  if (value === '+' || value === '-' || value === '*' || value === '/') {
    calculation += ` ${value} `;
  } else {
    calculation += value;
  }
  calculate.innerText = calculation;
}

function calculateResult() {
  try {
    calculation = eval(calculation);
    calculation = Math.round(calculation * 100) / 100;
    results.textContent = calculation;
  } catch (error) {
    results.innerText = "Error";
    calculation = "";
  }
}

zeroBtn.addEventListener('click', function() {
  updateCalculation('0');
})
oneBtn.addEventListener('click', function() {
  updateCalculation('1');
})
twoBtn.addEventListener('click', function() {
  updateCalculation('2');
})
threeBtn.addEventListener('click', function() {
  updateCalculation('3');
})
fourBtn.addEventListener('click', function() {
  updateCalculation('4');
})
fiveBtn.addEventListener('click', function() {
  updateCalculation('5');
})
sixBtn.addEventListener('click', function() {
  updateCalculation('6');
})
sevenBtn.addEventListener('click', function() {
  updateCalculation('7');
})
eightBtn.addEventListener('click', function() {
  updateCalculation('8');
})
nineBtn.addEventListener('click', function() {
  updateCalculation('9');
})
divideBtn.addEventListener('click', function() {
  updateCalculation(' / ');
})
multiplyBtn.addEventListener('click', function() {
  updateCalculation(' * ');
})
subtractBtn.addEventListener('click', function() {
  updateCalculation(' - ');
})
addBtn.addEventListener('click', function() {
  updateCalculation(' + ');
})
decimalBtn.addEventListener('click', function() {
  updateCalculation('.');
})
equalBtn.addEventListener('click', calculateResult);
clearBtn.addEventListener('click', function() {
})
deleteBtn.addEventListener('click', function() {
})