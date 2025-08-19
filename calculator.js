const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    default:
      return "Invalid operator";
  }
}

console.log("CLI Calculator");
console.log("Available operators: +  -  *  /");

rl.question("Enter first number: ", (n1) => {
  rl.question("Enter operator (+, -, *, /): ", (op) => {
    rl.question("Enter second number: ", (n2) => {
      const result = calculate(parseFloat(n1), parseFloat(n2), op);
      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
