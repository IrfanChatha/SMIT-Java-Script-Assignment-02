// 2. Write a js program to find diameter, circumference and area of circle using functions.

function findDiameter(radius) {
    let diameter = radius * 2;
    return diameter;
  }
  
  function findCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    return circumference;
  }
  
  function findArea(radius) {
    let area = Math.PI * radius * radius;
    return area;
  }
  
  let radius = 4;
  let diameter = findDiameter(radius);
  let circumference = findCircumference(radius);
  let area = findArea(radius);
  
  console.log("Diameter is: " + Math.round(diameter));
  console.log("Circumference is: " + Math.round(circumference));
  console.log("Area is: " + Math.round(area));