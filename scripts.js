"use strict";

let email = document.querySelector(".email");
let password = document.querySelector(".password");
let form = document.querySelector("form");
let object = {};
let span = document.querySelector(".check");
let json = JSON.stringify(object);

function createEmail(event) {
  const regExp = /[a-z0-9]+@+\w*\.\w{2,11}/gi;
  const value = event.target.value;
  const check = regExp.test(value);
  console.log(check);
  console.log(value);
  object.email = value;
  console.log(object);
}

function createPassword(event) {
  const value = event.target.value;
  console.log(value);
  object.password = value;
  console.log(object);
}

function sendInfo(event) {
  if (email.value === "" || password.value === "") {
    event.preventDefault();
    span.textContent = "Заполните поля ввода";
    span.style.color = "red";
  } else {
    event.preventDefault();
    span.textContent = "Все поля ввода заполнены";
    span.style.color = "green";
  }
}

email.addEventListener("change", createEmail);
password.addEventListener("change", createPassword);
form.addEventListener("submit", sendInfo);
