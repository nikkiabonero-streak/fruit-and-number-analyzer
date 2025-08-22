function runAssignment() {
  let output = document.getElementById("output");
  output.innerHTML = ""; 

 
  let name = prompt("Enter your name:");
  let userNumber = Number(prompt("Enter a number:"));
  const BASE_NUMBER = 10;

  print(`Hello, ${name}`);
  print(`Base Number: ${BASE_NUMBER}, Your Number: ${userNumber}`);
  print(`Sum: ${BASE_NUMBER + userNumber}`); 
  print(`Difference: ${BASE_NUMBER - userNumber}`);
  print(`Product: ${BASE_NUMBER * userNumber}`);
  print(`Quotient: ${BASE_NUMBER / userNumber}`);


  let sentence = prompt("Enter a short sentence:");
  print(`Uppercase: ${sentence.toUpperCase()}`);
  print(`Lowercase: ${sentence.toLowerCase()}`);


  if (userNumber >= 0) {
    print(`${userNumber} is Positive.`);
  } else {
    print(`${userNumber} is Negative.`);
  }

  let check = (userNumber >= 0) ? "Positive" : "Negative";
  print(`Ternary result: ${userNumber} is ${check}`);

 
  print(`Numbers from 1 to ${userNumber}:`);
  for (let i = 1; i <= userNumber; i++) {
    print(i);
  }

  print("Countdown from 5:");
  let count = 5;
  while (count > 0) {
    print(count);
    count--;
  }

 
  function greetUser(name) {
    print(`Hello, ${name}!`);
  }
  greetUser(name);

  let fruits = [];
  for (let i = 1; i <= 3; i++) {
    let fruit = prompt(`Enter favorite fruit #${i}:`);
    fruits.push(fruit);
  }
  print("Your favorite fruits are: " + fruits.join(", "));


  function print(message) {
    output.innerHTML += message + "<br>";
  }
}