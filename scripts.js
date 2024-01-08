"use strict";

class User {
  constructor(userInfo) {
    this.userInfo = userInfo;
  }

  editUserInfo(newInfo) {
    this.userInfo = newInfo;
  }

  getUserInfo() {
    return this.userInfo;
  }
}

class Contacts {
  constructor() {
    this.users = [];
  }

  addContact(contact) {
    const newContact = new User(contact);
    this.users.push(newContact);
  }

  editContact(id, obj) {
    const user = this.users.find((user) => user.userInfo.id === id);
    user.editUserInfo(obj);
  }

  remove(id) {
    const newArray = this.users.filter((user) => user.userInfo.id != id);
    this.users = newArray;
  }

  get() {
    return this.users;
  }
}

class ContactsApp extends Contacts {
  constructor() {
    super();
    this.app = document.createElement("div");
    this.app.classList.add("contacts");
    document.body.appendChild(this.app);
    this.createForm();
    this.render();
    // this.storageExpiration = null;
  }

  render() {
    this.app.innerHTML = "";
    this.users.forEach((user) => {
      let editable = false;
      let userInfo = user.getUserInfo();

      let userContainer = document.createElement("div");
      userContainer.classList.add("userContainer");

      let userName = document.createElement("input");
      userName.value = userInfo.name;
      userName.classList.add("userName");
      userContainer.append(userName);
      userName.setAttribute("readonly", true);

      let userAddress = document.createElement("input");
      userAddress.value = userInfo.address;
      userAddress.classList.add("userAddress");
      userContainer.append(userAddress);
      userAddress.setAttribute("readonly", true);

      let userPhone = document.createElement("input");
      userPhone.value = userInfo.phone;
      userPhone.classList.add("userPhone");
      userContainer.append(userPhone);
      userPhone.setAttribute("readonly", true);

      let userEmail = document.createElement("input");
      userEmail.value = userInfo.email;
      userEmail.classList.add("userEmail");
      userContainer.append(userEmail);
      userEmail.setAttribute("readonly", true);

      let buttonContainer = document.createElement("div");
      buttonContainer.classList.add("buttonContainer");

      let buttonRemove = document.createElement("button");
      buttonRemove.innerText = "Remove";
      buttonRemove.addEventListener("click", this.onRemove);
      buttonRemove.setAttribute("id", userInfo.id);

      let buttonEdit = document.createElement("button");
      buttonEdit.innerText = "Edit";

      buttonEdit.addEventListener("click", () => {
        if (!editable) {
          editable = !editable;
          buttonEdit.innerText = "Ok";
          userPhone.removeAttribute("readonly");
          userEmail.removeAttribute("readonly");
          userName.removeAttribute("readonly");
          userAddress.removeAttribute("readonly");
        } else {
          editable = !editable;
          buttonEdit.innerText = "Edit";
          userPhone.setAttribute("readonly", true);
          userEmail.setAttribute("readonly", true);
          userName.setAttribute("readonly", true);
          userAddress.setAttribute("readonly", true);

          this.onEdit(userInfo.id, {
            name: userName.value,
            phone: userPhone.value,
            email: userEmail.value,
            address: userAddress.value,
            id: userInfo.id,
          });
        }
      });
      buttonEdit.setAttribute("id", userInfo.id);

      buttonContainer.append(buttonEdit, buttonRemove);
      userContainer.append(buttonContainer);

      this.app.append(userContainer);
    });
  }

  createForm() {
    const formsContainer = document.createElement("div");
    formsContainer.classList.add("forms-container");
    document.body.append(formsContainer);

    const forms = document.createElement("form");
    forms.classList.add("forms");
    formsContainer.append(forms);

    const inputId = document.createElement("input");
    inputId.setAttribute("type", "text");
    inputId.classList.add("forms__input");
    inputId.setAttribute("name", "id");
    inputId.setAttribute("placeholder", "2");
    forms.append(inputId);

    const inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.classList.add("forms__input");
    inputName.setAttribute("name", "name");
    inputName.setAttribute("placeholder", "Andrew");
    forms.prepend(inputName);

    const inputPhone = document.createElement("input");
    inputPhone.setAttribute("type", "text");
    inputPhone.classList.add("forms__input");
    inputPhone.setAttribute("name", "phone");
    inputPhone.setAttribute("placeholder", "3753303853");
    forms.prepend(inputPhone);

    const inputAddress = document.createElement("input");
    inputAddress.setAttribute("type", "text");
    inputAddress.classList.add("forms__input");
    inputAddress.setAttribute("name", "address");
    inputAddress.setAttribute("placeholder", "Minsk");
    forms.prepend(inputAddress);

    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "text");
    inputEmail.classList.add("forms__input");
    inputEmail.setAttribute("name", "email");
    inputEmail.setAttribute("placeholder", "Email");
    forms.prepend(inputEmail);

    const title = document.createElement("h1");
    title.classList.add("forms__title");
    title.innerHTML = "Write your data";
    forms.prepend(title);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("forms__buttonContainer");
    forms.append(buttonContainer);

    const button = document.createElement("button");
    button.classList.add("forms__button");
    button.innerHTML = "Add";
    buttonContainer.append(button);

    button.addEventListener("click", this.onAdd);
  }

  onAdd = (event) => {
    event.preventDefault();
    let searchEmail = document.querySelector('[name = "email"]');
    let emailValue = searchEmail.value;
    let searchPhone = document.querySelector('[name = "phone"]');
    let phoneValue = searchPhone.value;
    let searchAddress = document.querySelector('[name = "address"]');
    let addressValue = searchAddress.value;
    let searchName = document.querySelector('[name = "name"]');
    let nameValue = searchName.value;
    let searchId = document.querySelector('[name = "id"]');
    let idValue = searchId.value;
    const dataFields = {
      email: emailValue,
      phone: phoneValue,
      address: addressValue,
      name: nameValue,
      id: idValue,
    };
    let forms = document.querySelectorAll(".forms__input");
    let res = Array.from(forms).forEach(function (elem) {
      elem.value = "";
    });

    this.addContact(dataFields);
    this.render();
    console.log(this.users);
    this.updateStorage();
  };

  onEdit = (id, newInfo) => {
    this.editContact(id, newInfo);
    this.render();
    this.updateStorage();
  };

  onRemove = (event) => {
    let idUser = event.currentTarget.getAttribute("id");
    this.remove(idUser);
    this.render();
    this.updateStorage();
  };

  updateStorage() {
    let storageData = JSON.stringify(this.users);
    if (typeof storageData == "string")
      localStorage.setItem("data", storageData);
    this.setStorageExpirationCookie(10);
  }

  setStorageExpirationCookie(days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `storageExpiration=${date.toUTCString()};path=/;expires=${date.toUTCString()}`;
  }

  clearLocalStorageAndCookies() {
    localStorage.removeItem("data");
    document.cookie =
      "storageExpiration=; expires=Thu, 15 Jan 1870 00:00:00 UTC; path=/;";
  }
}

let contactApp = new ContactsApp();
//contactApp.clearLocalStorageAndCookies()
