const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

// All Event Listeners
function eventListeners() {
    form.addEventListener("submit", addTodo);
}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = "alert alert-${type}";
    alert.textContent = message;
    console.log("${type}");
    console.log(alert);
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {
        /*
        <div class="alert alert-danger" role="alert">
                    <strong>Oh snap!</strong> Change a few things!
                </div>
                */
        showAlert("danger", "Todo girin.....");
    }
    else {
        addTodoToUI(newTodo);
    }

    e.preventDefault();
}
function addTodoToUI(newTodo) {
    /*
    <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>
                        */

    // Create Link
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>"

    // Create List item
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    // Add listItem to Todo List
    todoList.appendChild(listItem);
    todoInput.value = "";

}