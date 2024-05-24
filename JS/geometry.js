const radius = 5;
const length = 10;
const width = 5;
const base = 6;
const height = 4;
let finalData;
const userInput = "Rectangle";

if (userInput == "Circle") {
  const finalData1 = circleInfo(radius);
  console.log(finalData1);
} else if (userInput == "Rectangle") {
  const finalData2 = rectangleInfo(length, width);
  console.log(finalData2);
} else if (userInput == "Triangle") {
  const finalData3 = triangleInfo(base, height);
  console.log(finalData3);
} else {
  finalData = "Invalid Input";
}

function circleInfo(radius) {
  const area = Math.PI * radius * radius;
  const peri = 2 * Math.PI * radius;
  return `Area of Circle is ${area} and Perimeter of Circle is ${peri}`;
}

function rectangleInfo(length, width) {
  const area = length * width;
  const peri = 2 * (length + width);
  return `Area of Rectangle is ${area} and Perimeter of Rectangle is ${peri}`;
}

function triangleInfo(base, height) {
  const area = 0.5 * base * height;
  const peri = 3 * base;
  return `Area of Triangle is ${area} and Perimeter of Triangle is ${peri}`;
}
