//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//EventListener
todoButton.addEventListener("click", addList);
todoList.addEventListener("click", deleteCheck);
//Functions
function addList(event) {
  //prevent form from clicking add Button
  event.preventDefault();
  //making List Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // making List
  const list = document.createElement("li");
  list.innerText = todoInput.value;
  todoInput.value = "";
  list.classList.add("todo-item");
  todoDiv.appendChild(list);
  //check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //check trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //append to list
  todoList.appendChild(todoDiv);
}
function deleteCheck(e) {
  const item = e.target;
  //delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  //check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
