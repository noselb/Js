"use strict";
//Task 1
// {
//   function calculations(a, b, c) {
//     let calc = (a + b) / c;
//     console.log(calc);
//   }
//   calculations(5, 3, 4);
// }

//Task 2
// {
//   function calculations(a) {
//     let kub = a * a * a;
//     let kvadr = a * a;
//     console.log(`Куб числа равен ${kub}`);
//     console.log(`Квадрат числа равен ${kvadr}`);
//   }
//   calculations(3);
// }
//Task 3
// {
//   function min(a, b) {
//     if (a > b) {
//       return `${b} наименьшее число`;
//     } else {
//       return "наибольшее число";
//     }
//   }
//   console.log(min(13, 3));

//   function max(a, b) {
//     if (a > b) {
//       return `${a} наибольшее число `;
//     } else {
//       return "наименьшее число";
//     }
//   }
//   console.log(max(13, 3));
// }
//Task 4

// const first = () => {
//   let result = [];
//   let enters = "";
//   do {
//     enters = prompt("type number:");
//     if (!enters) {
//       break;
//     }
//     result.push(enters);
//   } while (enters);
//   return result;
// };
// const second = () => {
//   console.log(first());
// };

// second();

//Task 5

// function isEven(a) {
//   if (a % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let res = isEven(10);
// console.log(res);

//Task 6

// function getArray(array) {
//   let newArray = array.filter(isEven);
//   return newArray;
// }
// console.log(getArray([1, 2, 3, 4, 5, 6]));

//Task 7
// {
//   function piramide(num) {
//     let b = '*'
//     for (let i = 1; i <= num; i++) {
//       for (let j = 1; j <= i; j++) {
//         document.write(i);
//       }
//       document.write("<br>");
//     }
//   }
//   piramide(9);
// }

//Task 8

// let str = "*";
// function starsPiramide(height, countWhiteSpace) {
//   for (let i = 1; i <= height; i++) {
//     let whiteSpace = " ".repeat(countWhiteSpace);
//     countWhiteSpace--;
//     console.log(`${whiteSpace}${str}${whiteSpace}`);
//     str += " *";
//   }
// }
// starsPiramide(5, 5);

//Task 9
// {
//   var n = 10;
//   var fibonacci = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//   }

//   console.log(fibonacci.slice(0, n));
// }

// Task10

// function getSum(value) {
//   let sum = 0;

//   for (let i = 0; i < value.length; i++) {
//     sum += +value[i];
//   }
//   if (sum > 9) {
//     return getSum(String(sum));
//   }
//   return sum;
// }
// console.log(getSum("99"));

//Task 11

// function getArray(array) {
//   console.log(array[i]);
//   i++;
//   if (i < array.length) getArray(array);
// }
// let i = 0;
// getArray([1, 4, 5, 6, -1]);
