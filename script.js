let userInput = document.querySelector("#user-input");
userInput.addEventListener('submit', handleSubmit);

let todoListElement = document.querySelector("#todo-list");
let storedTodos = localStorage.getItem("todos"); 
let convertedTodos = JSON.parse(storedTodos);

let todos;

if (storedTodos === null) {
  todos = [];
  // Viss det er første besøk på siden, lag en ny liste
} else {
  // Hvis det var noe lagret i localStorage, bruk det
  todos = convertedTodos;
}

renterTodos();


function handleSubmit(event) {
  event.preventDefault (); 



  let newTodo = createTodoObject (userInput);

 

  todo.push(newTodo);

  

  let jsonTodos = JSON.stringify(todos);
  localStorage.setItem("todos", jsonTodos);

  renterTodos();
}

function createTodoObject(form) {

    let todo = form.querySelector ("#todo");
    let todoValue = todo.value;
    let todoObject = {

        title: todoValue, 
    };

    return todoObject;
}

function createTodoCard (todoObject) {
    let todoCard = document.createElement("li");
    let titeElement = document.createElement("h1");
    let deleteButton = document.createElement("button");

    todoCard.append(titeElement);
    todoCard.append(deleteButton);

}