// Get references to various HTML elements
var calculateEl = document.getElementById('calculation-display'); // The display for the current calculation
var resultEl = document.getElementById('result-display'); // The display for the result
var zeroBtn = document.getElementById('0-btn'); // Button for the digit 0
var oneBtn = document.getElementById('1-btn'); // Button for the digit 1
var twoBtn = document.getElementById('2-btn'); // Button for the digit 2
var threeBtn = document.getElementById('3-btn'); // Button for the digit 3
var fourBtn = document.getElementById('4-btn'); // Button for the digit 4
var fiveBtn = document.getElementById('5-btn'); // Button for the digit 5
var sixBtn = document.getElementById('6-btn'); // Button for the digit 6
var sevenBtn = document.getElementById('7-btn'); // Button for the digit 7
var eightBtn = document.getElementById('8-btn'); // Button for the digit 8
var nineBtn = document.getElementById('9-btn'); // Button for the digit 9
var divideBtn = document.getElementById('divide-btn'); // Button for the division operator (/)
var multiplyBtn = document.getElementById('multiply-btn'); // Button for the multiplication operator (*)
var subtractBtn = document.getElementById('subtract-btn'); // Button for the subtraction operator (-)
var addBtn = document.getElementById('add-btn'); // Button for the addition operator (+)
var decimalBtn = document.getElementById('decimal-btn'); // Button for the decimal point (.)
var equalBtn = document.getElementById('equal-btn'); // Button for calculating the result (=)
var clearBtn = document.getElementById('clear-btn'); // Button for clearing the display
var deleteBtn = document.getElementById('delete-btn'); // Button for deleting the last character
var calculation = ''; // Initialize an empty string to store the user's input

// Function to update the calculation display based on user input
function updateCalculation(value) {
  if (value === '+' || value === '-' || value === '*' || value === '/') {
    calculation += ` ${value} `; // Add spaces around operators for formatting
  } else {
    calculation += value;
  }
  calculateEl.innerText = calculation; // Update the calculation display element with the updated string
}

// Function to calculate the result when the equal button is pressed
function calculateResult() {
  try {
    calculation = eval(calculation); // Evaluate the calculation string
    calculation = Math.round(calculation * 100) / 100; // Round the result to two decimal places
    resultEl.textContent = calculation; // Display the result
  } catch (error) {
    resultEl.innerText = 'Error'; // Display "Error" if there's an issue with the calculation
    calculation = ''; // Reset the calculation string
  }
}

// Function to clear the display
function clearDisplay() {
  calculateEl.innerText = "0"; // Clear the calculation display
  resultEl.textContent = "0"; // Clear the result display
  calculation = ''; // Reset the calculation string
}

// Function to delete the last character from the calculation string
function deleteLastCharacter() {
  if (calculation) {
    calculation = calculation.slice(0, -1); // Remove the last character from the calculation string
    calculateEl.innerText = calculation; // Update the calculation display
  }
}

// Event listeners for number and operator button clicks
zeroBtn.addEventListener('click', function() {
  updateCalculation('0'); // Update the calculation display with the value of 0
});
oneBtn.addEventListener('click', function() {
  updateCalculation('1'); // Update the calculation display with the value of 1
});
twoBtn.addEventListener('click', function() {
  updateCalculation('2'); // Update the calculation display with the value of 2
});
threeBtn.addEventListener('click', function() {
  updateCalculation('3'); // Update the calculation display with the value of 3
});
fourBtn.addEventListener('click', function() {
  updateCalculation('4'); // Update the calculation display with the value of 4
});
fiveBtn.addEventListener('click', function() {
  updateCalculation('5'); // Update the calculation display with the value of 5
});
sixBtn.addEventListener('click', function() {
  updateCalculation('6'); // Update the calculation display with the value of 6
});
sevenBtn.addEventListener('click', function() {
  updateCalculation('7'); // Update the calculation display with the value of 7
});
eightBtn.addEventListener('click', function() {
  updateCalculation('8'); // Update the calculation display with the value of 8
});
nineBtn.addEventListener('click', function() {
  updateCalculation('9'); // Update the calculation display with the value of 9
});
divideBtn.addEventListener('click', function() {
  updateCalculation(' / '); // Update the calculation display with the division operator (*)
});
multiplyBtn.addEventListener('click', function() {
  updateCalculation(' * '); // Update the calculation display with the multiplication operator (*)
});
subtractBtn.addEventListener('click', function() {
  updateCalculation(' - '); // Update the calculation display with the subtraction operator (-)
});
addBtn.addEventListener('click', function() {
  updateCalculation(' + '); // Update the calculation display with the addition operator (+)
});
decimalBtn.addEventListener('click', function() {
  updateCalculation('.'); // Update the calculation display by adding a decimal point (.)
});
equalBtn.addEventListener('click', calculateResult); // Calculate the result when the "=" button is clicked
clearBtn.addEventListener('click', clearDisplay); // Clear the display when the "Clear" button is clicked
deleteBtn.addEventListener('click', deleteLastCharacter); // Delete the last character when the "Del" button is clicked