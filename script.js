let currentExpression = '';

function appendNum(num) {
  currentExpression += num;
  updateDisplay(currentExpression);
}

function appendOp(operator) {
  currentExpression += operator;
  updateDisplay(currentExpression);
}

function calculate() {
  try {
    const result = eval(currentExpression);
    updateDisplay(result);
    currentExpression = '';
  } catch (error) {
    updateDisplay('Error');
  }
}

function clearDisplay() {
  currentExpression = '';
  updateDisplay('');
}
function x(){
    currentExpression=currentExpression.slice(0, -1);
    updateDisplay(currentExpression);
}

function updateDisplay(value) {
  document.getElementById('result').value = value;
}
