// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
// add semi-colon at end of line 13 and 16
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();


// EX 2:
// indent lines 22 and 23, remove indent on } on line 24
function addThreeNums(first, second, third) {
  var sum = first + second + third
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3:
// changed "func" to funtction on line 32, add a space before { on line 32. moved closing } to line 38
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();


//  EX 4:
// move { to end of line 45, indent var on line 45, remove indent on line 46
// remove empty line between var and console.log
// move ` after . at end of line 50
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}.`);
  }
