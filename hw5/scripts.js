"use strict";

//Task 1

{
  let str = "aaa@bbb@ccc";
  console.log(str.replace(/@/g, "!"));
}

//Task2

{
  let date = "2025-12-31";
  let newDate = new Date(date);
  let dateNow = newDate.toLocaleDateString("ru").replace(/\./g, "/");
  console.log(dateNow);
}

//Task 3

{
  let str1 = "Я учу JavaScript!";
  console.log(str1.substring(2, 16));
  console.log(str1.substr(2, 14));
  console.log(str1.slice(2, 16));
}

//Task 4

{
  let array = [4, 2, 5, 19, 13, 0, 10];
  let pow = 0;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  pow = Math.pow(sum, 3);
  console.log(Math.sqrt(pow));
}

//Task 5

{
  let a = 3;
  let b = 5;
  let c = Math.abs(a - b);
  console.log(c);
}

//Task 6
{
  let date = new Date("12-31-2014 12:59:59");

  console.log(date.toLocaleString("ru"));
}
