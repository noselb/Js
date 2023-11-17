"use strict";

//Task 1

// {
//   let str = "aaa@bbb@ccc";
//   console.log(str.replace(/@/g, "!"));
// }

//Task2

// {
//   let date = "2025-12-31";
//   let newDate = new Date(date);
//   let dateNow = newDate.toLocaleDateString("ru").replace(/\./g, "/");
//   console.log(dateNow);
// }

//Task 3

// {
//   let str1 = "Я учу JavaScript!";
//   console.log(str1.substring(2, 16));
//   console.log(str1.substr(2, 14));
//   console.log(str1.slice(2, 16));
// }

//Task 4

// {
//   let array = [4, 2, 5, 19, 13, 0, 10];
//   let pow = 0;
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   pow = Math.pow(sum, 3);
//   console.log(Math.sqrt(pow));
// }

//Task 5

// {
//   let a = 3;
//   let b = 5;
//   let c = Math.abs(a - b);
//   console.log(c);
// }

//Task 6
// {
//   let date = new Date("12-31-2014 12:59:59");

//   console.log(date.toLocaleString("ru"));
// }

//Task 7

// {
//   let str = "aa aba abba abbba abca abea";
//   console.log(str.match(/ab+a/gi));
// }

//Task 8

// {
//   let str = "+375(33)303-96-05";
//   let regExp =
//     /[\+\s]\d{3}(\(|\s|\d)\d{2}(\)|\s|\d)\d{3}[\-\s]\d{2}[\-\s]\d{2}/gi;
//   let chek = regExp.test(str);

//   function num(number) {
//     if (number) {
//       return "True";
//     } else {
//       return "False";
//     }
//   }
//   console.log(num(chek));
// }
//
//Task 9

// {
//   let str = "onedich32@gmail.com";
//   let regExp = /\w+\d+@\w+\.\w{2,11}/gi;
//   let chek = regExp.test(str);

//   function mail(gmail) {
//     if (gmail) {
//       return "True";
//     } else {
//       return "False";
//     }
//   }
//   console.log(mail(chek));
// }

//Task 10

{
  let url = new URL(
    "https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3"
  );

  function url1(url) {
    res.push(url.origin, url.pathname, url.search, url.hash);
    return res;
  }
  let res = [];
  console.log(url1(url));
}
