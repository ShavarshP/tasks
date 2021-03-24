let addToDoButton = document.getElementById("addToDo");
let inputField = document.getElementById("inputField");
let toDoContainer = document.getElementById("toDoContainer");
let isActive = true;
let isDone = true;
const todo = [];

document.getElementById("active").addEventListener("click", function () {
  isDone = !isDone;
  writeList();

});

document.getElementById("done").addEventListener("click", function () {
  isActive = !isActive;
  writeList();
});
addToDoButton.addEventListener("click", function () {
  todo.push({ isItDone: false, value: inputField.value });
  inputField.value = "";
  writeList();
});

writeList = () => {
  toDoContainer.innerText = "";
  todo.forEach((t, i, arr) => {
    if (isActive && isDone) {
      filter(t, i, arr);
    }
    if (isActive && !isDone) {
      if (t.isItDone) {
        filter(t, i, arr);
      }
    }
    if (!isActive && isDone) {
      if (!t.isItDone) {
        filter(t, i, arr);
      }
    }
  });
};

filter = (t, i, arr) => {
  let paragraph = document.createElement("li");
  !t.isItDone
    ? (paragraph.className = "block")
    : (paragraph.className = "checked");
  paragraph.innerText = t.value;
  paragraph.addEventListener("click", function () {
    t.isItDone = !t.isItDone;
    writeList();
  });
  let close = document.createElement("span");
  close.innerText = "x";
  close.className = "close";
  paragraph.appendChild(close);
  toDoContainer.appendChild(paragraph);
  close.addEventListener("click", function () {
    delete arr[i];
    writeList();
  });
};
