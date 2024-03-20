const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

// Tüm event listener'lar
function eventListeners() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", loadAllTodosUI);
  secondCardBody.addEventListener("click", deleteTodo);
}

function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    showAlert("danger", "Lütfen TODO girin!");
  } else {
    addTodoToUI(newTodo);
    addTodoStorage(newTodo);
    showAlert("success", "TODO EKLENDİ!");
  }

  e.preventDefault();
}
function addTodoToUI(newTodo) {
  const listItem = document.createElement("li");
  // Create Link
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = " <i class = 'fa fa-remove'></i>";

  // Create list item node
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);

  // add listItem to Todo List
  todoList.appendChild(listItem);
  todoInput.value = "";
}

function showAlert(type, message) {
  /* <div class="alert alert-danger" role="alert">
            This is a danger alert with
            <a href="#" class="alert-link">an example link</a>. Give it a click
            if you like.
          </div>
    */
  const alert = document.createElement("div");
  alert.className = "alert alert-" + type;
  alert.role = "alert";
  alert.textContent = message;

  firstCardBody.appendChild(alert);

  // setTimeout
  setTimeout(function () {
    alert.remove();
  }, 1000);
}

function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function addTodoStorage(newTodo) {
  let todos = getTodosFromStorage();
  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosUI() {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo) {
    addTodoToUI(todo);
  });
}

function deleteTodo(e) {
  if (e.target.className === "fa fa-remove") {
    let parentElement = e.target.parentElement.parentElement;
    parentElement.remove();
    deleteTodoFromStorage(parentElement.textContent);
    showAlert("success", "TODO SİLİNDİ");
  }
}
function deleteTodoFromStorage(deleteTodoItem) {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo, index) {
    if (todo === deleteTodoItem) {
      todos.splice(index, 1);
    }
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
