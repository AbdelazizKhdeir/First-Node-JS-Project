console.log("Hello World!")

let numbers = [1, 2, 3, 4, 5];


numbers.push(6);
console.log("After push:", numbers); 


numbers.pop();
console.log("After pop:", numbers); 


let doubledNumbers = numbers.map(num => num * 2);
console.log("After map:", doubledNumbers); 


let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("After filter:", evenNumbers); 


let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("After reduce:", sum); 
