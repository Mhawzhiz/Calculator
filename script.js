let currentInput = '';

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function appendOperator(operator) {
  currentInput += operator;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(currentInput);
    document.getElementById('display').value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    currentInput = '';
  }
}

function calculateSquareRoot() {
  try {
    const result = Math.sqrt(eval(currentInput));
    document.getElementById('display').value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    currentInput = '';
  }
}

function calculateSin() {
  try {
    const result = Math.sin(eval(currentInput));
    document.getElementById('display').value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    currentInput = '';
  }
}

function calculateCos() {
  try {
    const result = Math.cos(eval(currentInput));
    document.getElementById('display').value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    currentInput = '';
  }
}

function calculateTan() {
  try {
    const result = Math.tan(eval(currentInput));
    document.getElementById('display').value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    currentInput = '';
  }
}


// Add more scientific functions as needed (e.g., calculateCos(), calculateTan(), etc.)
