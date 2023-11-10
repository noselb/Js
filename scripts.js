"use strict";

// //Task 1
// {
//   for (let i = 1; i <= 50; i++) {
//     console.log(i);
//   }
// }

// {
//   for (let j = 38; j >= 8; j--) {
//     console.log(j);
//   }
// }
// //Task 2

// {
//   let i = 89;
//   while (i >= 11) {
//     document.write(i + "</br>");
//     i--;
//   }
// }
// //Task 3
// {
//   let sum = 0;
//   for (let i = 0; i <= 100; i++) {
//     console.log(sum + i);
//     sum = sum + i;
//   }
// }
// //Task 4
// {
//   let a = 5;
//   let sum = 0;
//   for (let i = 1; i <= a; i++) {
//     sum = 0;
//     for (let j = 1; j <= i; j++) {
//       sum += j;
//     }
//     console.log("sum" + i + " = " + sum);
//   }
// }
// //Task 5
// {
//   for (let i = 8; i <= 86; i++) {
//     if (i % 2 == 0) continue;
//     console.log(i);
//   }
// }

// //Task 6
// {
//   for (let i = 2; i <= 10; i++) {
//     for (let j = 2; j <= 10; j++) {
//       console.log(`${i}*${j} = ${i * j}`);
//     }
//   }
// }
// //Task 7
// {
//   let n = 1000;
//   let num = 0;
//   while (n >= 50) {
//     n = n / 2;
//     num++;
//     console.log(num);
//   }
// }
// //Task 8
// {
//   let str = "";
//   let num = 0;
//   let sum = 0;
//   let iteration = 0;
//   while (true) {
//     let user = prompt("Введите число с клавиатуры");
//     sum = parseInt(user) + sum;
//     iteration++;
//     if (user == str || user == num) {
//       break;
//     }
//   }
//   console.log(`Сумма чисел равна ${sum}`);
//   console.log(`Среднее арифметическое равно ${sum / iteration}`);
// }
// //Task 9

//Array

//Task 1
// {
//   let arr = [1, 2, 3, 4, 5];
//   for (let i = 0; i < arr.length; i++) alert(arr[i]);
// }
// {
//   let numbers = [1, 2, 3, 4, 5];
//   for (let num of numbers) {
//     alert(num);
//   }
// }

//Task 2

// {
//   let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
//   alert(arr[13]);
//   alert(arr[7]);
//   alert(arr[5]);
// }

//Task 3

// {
//   let arr1 = [];
//   let arr2 = [];
//   let result = 0;
//   let i = 23;
//   let j = 0;

//   for (; i <= 57; i++) {
//     arr1.push(i);
//     result += i;
//   }
//   console.log(arr1);
//   console.log(result);

// }

//Task 4

// {
//   let arrStr = ["10", "20", "30", "50", "235", "3000"];
//   for (let i = 0; i <= arrStr.length; i++) {
//     let num = String(arrStr[i]);
//     let char = num[0];
//     if (char == 1 || char == 2 || char == 5) {
//       console.log(num);
//     }
//   }
// }

//Task 5
// {
//   let arrWeeks = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];
//   for (let i = 0; i < arrWeeks.length; i++) {
//     let num = arrWeeks[i];
//     console.log(num);
//   }
// }

//Task 6
// {
//   let arr = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];
//   arr.push("Another day");
//   console.log(arr);
//   console.log(arr[arr.length - 1]);
// }

//Task 7
// {
//   let sum = [];
//   let text = +prompt("Введите значения");
//   while (text != "") {
//     text = +prompt("Введите значения");
//     sum.push(text);
//   }
//   sum.sort(function (a, b) {
//     return a - b;
//   });
//   alert(sum);
// }
//Task 8
// {
//   let arr = [12, false, "Текст", 4, 2, -5, 0];
//   arr.reverse();
//   console.log(arr);
// }
//Task 9

// {
//   let arr = [5, 9, 21, , , 9, 78, , , , 6];
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i in arr) {
//       res.push(arr[i]);
//     }
//   }
//   console.log(arr);
//   console.log(res);
// }
//task 10

{
  let arr = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
  const arr1 = arr.slice(3, 7);
  let result = arr1.reduce((sum, elem) => sum + elem, 0);

  console.log(arr1);
  console.log(result);
}
