"use strict";
//Реализация 1
{
  let GirlsContacts = function () {
    this.cont = [];
    this.addNewContact = function () {
      this.name = prompt("Введите Имя");
      this.age = +prompt("Введите возраст");
      this.phoneNumber = prompt("Введите номер телефона");
      this.email = prompt("Введите свой Email");
      this.chekInfo();
      this.cont.push({
        name: this.name,
        age: this.age,
        phoneNumber: this.phoneNumber,
        email: this.email,
      });
    };
    this.chekInfo = function () {
      if (this.age <= 18) {
        return alert("Ваш возраст не соответствует требованиям");
      }
    };
  };

  let girls = new GirlsContacts([]);
  girls.addNewContact();
  console.log(girls);

  let Boys = function (name, age, phoneNumber, email) {
    this.__proto__ = girls;
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.email = email;
  };

  let boys = new Boys(
    prompt("Введите Имя"),
    +prompt("Введите возраст"),
    prompt("Введите номер телефона"),
    prompt("Введите свой Email")
  );
  console.log(boys);
}
