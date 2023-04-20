// Initialize variables
let result = "";
let operator = "";

// Get DOM elements
const resultElement = document.getElementById("result");

// Function to add input to the result
function addToResult(input) {
  result += input;
  resultElement.value = result;
}

// Function to calculate the result
function calculateResult() {
  result = eval(result);
  resultElement.value = result;
}
