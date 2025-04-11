export const greeting = "Hello World";

export function sum(num1, num2) {
  console.log("Sum:", num1, num2);
  return num1 + num2;
}

export function subtract(num1, num2) {
  console.log("Subtract:", num1, num2);
  return num1 - num2;
}

export function multiply(num1, num2) {
  console.log("Multiply:", num1, num2);
  return num1 * num2;
}

export function divide(num1, num2) {
  console.log("Divide:", num1, num2);
  return num1 / num2;
}

function privateLog() {
  console.log("Private Function");
}
