"use strict";

let Device = function () {
  let status = false;

  this.deviceOn = function () {
    status = true;
    console.log(`The ${this.name} ${this.model} is on`);
  };

  this.deviceOff = function () {
    status = false;
    console.log(`The ${this.name} ${this.model} is off`);
  };

  this.chek = function () {
    if (status) {
      console.log("You can do something");
    } else {
      console.log("On should turn on your device");
    }
  };
};

let CalcSdc = function (name, model, setOfNumbers) {
  Device.apply(this);

  (this.name = name), (this.model = model), (this.setOfNumbers = setOfNumbers);

  this.sum = function () {
    let arrNum = [];
    let numbers;

    while (numbers !== 0 || "") {
      numbers = +prompt("Введите значение");
      arrNum.push(numbers);
    }
    console.log(arrNum);
    let sumOfNum = arrNum.reduce(function (sum, elem) {
      return sum + elem;
    });
  };

  this.minus = function () {
    let arrNum = [];
    let numbers;

    while (numbers !== 0 || "") {
      numbers = +prompt("Введите значение");
      arrNum.push(numbers);
    }
    let minOfNum = arrNum.reduce(function (sum, elem) {
      return sum - elem;
    });
    console.log(minOfNum);
  };

  this.multiplication = function () {
    let arrNum = [];
    let numbers;

    while (numbers !== 0 || "") {
      numbers = +prompt("Введите значение");
      arrNum.push(numbers);
    }
    arrNum.pop();
    let multiOfNum = arrNum.reduce(function (sum, elem) {
      return sum * elem;
    });
  };
};

let calcSdc = new CalcSdc(
  "Calculator",
  "SDC-888T",
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
);

let CalcCasio = function () {
  CalcSdc.apply(this, arguments);

  this.dividing = function () {
    let arrNum = [];
    let numbers;

    while (numbers !== 0 || "") {
      numbers = +prompt("Введите значение");
      arrNum.push(numbers);
    }
    arrNum.pop();
    let dividingOfNum = arrNum.reduce(function (sum, elem) {
      return sum / elem;
    });
  };
};

let calcCasio = new CalcCasio("Calculator", "Casio");
