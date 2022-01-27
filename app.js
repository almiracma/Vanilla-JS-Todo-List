//Selectors
//grab the input, button and ul
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

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
  todoList.appendChild(todoDiv);
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
    todo.remove();
  }

  //check mark

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
