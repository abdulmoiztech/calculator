let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let expression = display.value;
  expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

  try {
    display.value = eval(expression);
  } catch {
    display.value = 'Error';
  }
}

function handleKey(event) {
  if (event.key === 'Enter') {
    calculate();
  }
}
