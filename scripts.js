"use strict";

function createList() {
  const input = document.querySelector(".input-text");
  const button = document.querySelector(".submit");

  input.addEventListener("change", createNote);

  function createNote(event) {
    const value = event.target.value;
    console.log(value);
    input.value = "";

    const tasks = document.querySelector(".list");

    const listNotes = document.createElement("div");
    listNotes.className = "list-notes";
    tasks.append(listNotes);

    const task = document.createElement("span");
    task.className = "notes";
    task.innerHTML = value;
    listNotes.prepend(task);

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "check";
    listNotes.prepend(checkbox);

    checkbox.addEventListener("click", checked);
    function checked() {
      task.classList.toggle("active");
    }

    task.addEventListener("click", changeText);
    function changeText(event) {
      event.target.innerHTML = prompt("Change");
    }

    button.addEventListener("click", reset);

    function reset() {
      const deleteElem = document.querySelector(".list");
      deleteElem.innerHTML = " ";
    }
  }
}
createList();
