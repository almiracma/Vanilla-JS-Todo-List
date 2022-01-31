//Selectors
//grab the input, button and ul
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
//changed 'click' to 'change' due to dropdown function delay
filterOption.addEventListener("change", filterTodo);

//Function

function addTodo(event) {
  //prevents form from submitting
  event.preventDefault();
  //todo DIV

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create li

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  saveLocalTodos(todoInput.value);

  //completed button
  //checkmark button

  //basically making

  const completedButton = document.createElement("button"); //<button></button>
  completedButton.innerHTML = '<i class="fas fa-check-circle"></i>'; //<button><i class="fas fa-check-circle"></i></button>
  completedButton.classList.add("complete-btn"); //<button class="complete-btn"><i class="fas fa-check-circle"></i></button>
  todoDiv.appendChild(completedButton); //insert this button html inside the <div  class="todo"></div>

  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  //append to list
  if (todoInput.value === "") {
    todoInput.placeholder = "Please add an item!";
  } else {
    todoInput.placeholder = "";
    todoList.appendChild(todoDiv);
  }

  //this deletes the text in the box right after it was added
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //delete todo
  //if the target's class name is equal to "delete-btn"
  if (item.classList[0] === "delete-btn") {
    //   remove its parent
    const todo = item.parentElement;
    todo.classList.add("fall");
    removeLocalTodos(todo);
    //add event listener to only remove when the animation is completed
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //check mark

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  //grab all todos to filter
  const todos = todoList.childNodes;

  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

//ADD ITEMS TO LOCAL STORAGE
//create a function that saves items

function saveLocalTodos(todo) {
  //check if there's already a list
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li

    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //completed button
    //checkmark button

    //basically making

    const completedButton = document.createElement("button"); //<button></button>
    completedButton.innerHTML = '<i class="fas fa-check-circle"></i>'; //<button><i class="fas fa-check-circle"></i></button>
    completedButton.classList.add("complete-btn"); //<button class="complete-btn"><i class="fas fa-check-circle"></i></button>
    todoDiv.appendChild(completedButton); //insert this button html inside the <div  class="todo"></div>

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    //append to list
    // if (todoInput.value === "") {
    //   todoInput.placeholder = "Please add an item!";
    // } else {
    //   todoInput.placeholder = "";
    //   todoList.appendChild(todoDiv);
    // }

    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
