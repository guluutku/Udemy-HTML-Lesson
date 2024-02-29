// Delete Element

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// Remove Method
// todos[0].remove();

// Remove Child
// todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[2]);
