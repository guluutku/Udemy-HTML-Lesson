// Local Storage

// SetItem
// localStorage.setItem("item1", "item2");
// localStorage.setItem("item3", 50);

// GetItem
// localStorage.getItem("item3");

// Clear Local Storage
// localStorage.clear();

// Local Storage - Arrays
// const todos = ["Todo 1", "Todo 2", "Todo 3"];
// localStorage.setItem("todos", todos); // adds as string
// localStorage.setItem("todos", JSON.stringify(todos));
// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
    const value = todoInput.value;
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));

    e.preventDefault();
}
