for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

function calculator(num1, num2, operation) {
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
    default:
      return 'Invalid operation';
  }
}


console.log(calculator(10, 5, 'add'));      // 15
console.log(calculator(10, 5, 'subtract')); // 5
console.log(calculator(10, 5, 'multiply')); // 50
console.log(calculator(10, 5, 'divide'));   // 2

function findTax(salary) {
  let taxRate;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.20;
      break;
    case (salary > 1500000):
      taxRate = 0.30;
      break;
    default:
      return 'Invalid salary input';
  }

  return salary * taxRate;
}

// Example:
console.log(findTax(450000));   // 0
console.log(findTax(750000));   // 75000
console.log(findTax(1200000));  // 240000
console.log(findTax(2000000));  // 600000
