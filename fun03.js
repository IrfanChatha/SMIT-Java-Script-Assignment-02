// 3. Write a js program to find maximum and minimum between two numbers using functions.

let num1 = 15;
let num2 = 30;
function findMax(num1, num2) {
    let max = num1 > num2 ? num1 : num2;
    return max;
}
  
function findMin(num1, num2) {
    let min = num1 < num2 ? num1 : num2;
    return min;
}
  
let max = findMax(num1, num2);
let min = findMin(num1, num2);
  
console.log("Maximum number is: " + max);
console.log("Minimum number is: " + min);  