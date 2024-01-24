// selectors 

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");


// event listeners 

todoButton.addEventListener('click', addTodo);


// Functions

function addTodo(event) {
    // prevent form from submitting
    event.preventDefault();

}