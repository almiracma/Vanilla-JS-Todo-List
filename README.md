# Vanilla Javascript Todo List

In this project, I'm going to build a todo list in Vanilla Javascript and soon after I'm going do a React version.

I created a a form with an input box and a button that contains an "add" icon.

I also created a div container and an empty list so I can insert the todo list dynamically.

In Javascript, I called the input box, submit button, and todo-list classes so I can use it to dynamically add the user input.

First, I added event listener on the submit/add button.
Then I added a function named addTodo where I dynamically added a div with a class of "todo".

Right after that, I created a list element where the user input will be attached. I used _newTodo.innerText = todoInput.value_ , added a class "todo-item" using classList, and inserted it in the todo div using appendChild().

Moreover, I added two buttons with icons "completed" and "delete". To insert the icon inside the button, I used innerHTML.

After dynamically adding basically these elements:

<!-- <div class="todo">
    <li class="todo-item"> {todoInput.value} </li>
    <button class="completed-btn"><i class="fas fa-check-circle"></i>
    </button>
     <button class="delete-btn">
     <i class="fas fa-trash-alt"></i>
    </button>
</div> -->

Next, I added an event listener to the delete button and named the function deleteCheck.

I used e.target to find the "delete-btn" class, and if it did, remove its parent element - which deletes the box itself.

I had to put pointer-cursor: none on the icons so it doesn't get in the way when clicking on the button.

On the complete-btn, I did the same except that I added a class "completed "and used toggle: todo.classList.toggle("completed");

Then on the class "completed" I added the styles:
text-decoration: line-through;
opacity: 0.5;
