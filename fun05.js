// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

let num = 127;
function checkPrime(num) {
    if(num <= 1) {
      return "Not Prime";
    }
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return "Not Prime";
      }
    }
    
    return "Prime";
  }
  
  function checkArmstrong(num) {
    let sum = 0;
    let temp = num;
    
    while(temp > 0) {
      let digit = temp % 10;
      sum += digit ** 3;
      temp = parseInt(temp / 10);
    }
    
    if(num === sum) {
      return "Armstrong";
    } else {
      return "Not Armstrong";
    }
  }
  
  function checkPerfect(num) {
    let sum = 0;
    
    for(let i = 1; i < num; i++) {
      if(num % i === 0) {
        sum += i;
      }
    }
    
    if(num === sum) {
      return "Perfect";
    } else {
      return "Not Perfect";
    }
  }
  
  let primeResult = checkPrime(num);
  let armstrongResult = checkArmstrong(num);
  let perfectResult = checkPerfect(num);
  console.log("Number " + num + " is " + primeResult + ", " + armstrongResult + ", and " + perfectResult);