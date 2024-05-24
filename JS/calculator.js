const p = 50;
const q = 6;

function calculations(operations) {
  let result;
  switch (operations) {
    case "add":
      result = add(p, q);
      break;
    case "subtract":
      result = subtract(p, q);
      break;
    case "multiply":
      result = multiply(p, q);
      break;
    case "divide":
      result = divide(p, q);
      break;
    default:
      result = "Invalid Request";
  }
  return result;
}

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
  if (b != 0) {
    return a / b;
  } else {
    return "It cannot divide by Zero";
  }
}
console.log(calculations("divide"))