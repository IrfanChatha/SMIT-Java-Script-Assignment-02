// 4. Write a js program to check whether a number is even or odd using functions.

let num = 6;
function checkEvenOdd(num) {
    if(num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  let result = checkEvenOdd(num);
  console.log("Number " + num + " is " + result);