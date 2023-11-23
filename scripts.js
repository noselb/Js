"use strict";
{
  let Contacts = function () {
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

  let contacts = new Contacts([]);
  contacts.addNewContact();
  contacts.addNewContact();
  console.log(contacts);
}
