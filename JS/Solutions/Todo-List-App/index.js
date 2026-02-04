// 1. Select DOM elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// 2. Array to hold all todos (we'll load from localStorage)
let todos = [];

// 3. Load todos from localStorage when page loads
function loadTodos() {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
    renderTodos();
  }
}

// 4. Save todos to localStorage whenever we change the array
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 5. Render all todos to the DOM
function renderTodos() {
  todoList.innerHTML = ""; // clear existing list

  todos.forEach((todo, index) => {
    // Create list item
    const li = document.createElement("li");
    li.classList.add("todo-item");
    if (todo.completed) li.classList.add("completed");

    // Text (click to toggle complete)
    const span = document.createElement("span");
    span.classList.add("todo-text");
    span.textContent = todo.text;
    span.addEventListener("click", () => toggleComplete(index));

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => deleteTodo(index));

    // Assemble
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// 6. Add new todo
function addTodo(text) {
  if (text.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const newTodo = {
    text: text.trim(),
    completed: false,
  };

  todos.push(newTodo);
  saveTodos();
  renderTodos();
  input.value = ""; // clear input
  input.focus(); // ready for next task
}

// 7. Toggle complete status
function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}

// 8. Delete todo
function deleteTodo(index) {
  if (confirm("Delete this task?")) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  }
}

// 9. Form submit handler
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload
  addTodo(input.value);
});

// 10. Initialize on page load
loadTodos();
