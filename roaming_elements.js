let value; 
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardRow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardRow;

// Child Nodes - Text Dahil
value = todoList.childNodes;
value = todoList.childNodes[0];

// children - Element
value = todoList.children;
value = todoList.children[0];
value = todoList.children[todoList.children.length - 1];
value = todoList.children[2].textContent = "Değişti";

value = cardRow;
value = cardRow.children;
value = cardRow.children[2].children[1].textContent = "Burası da değişti";

value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;

value = cardRow;
value = cardRow.parentElement;
value = cardRow.parentElement.parentElement;

// Element Kardeşleri
value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;

value = todo.previousElementSibling.previousElementSibling;

console.log(value);