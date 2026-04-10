Here's a **complete tutorial + mini project** on **JavaScript Modules** (ES6 Modules), including full HTML + CSS.

### JavaScript Modules Tutorial

**Modules** allow you to split your JavaScript code into separate files and import/export functionality between them. This makes code more organized, reusable, and maintainable.

#### Key Concepts:

- **`export`** – Make variables, functions, or classes available to other files
- **`import`** – Bring exported items into the current file
- **Default Export** vs **Named Export**
- **Live Bindings** (changes in exported values reflect everywhere)

#### 1. Named Exports & Imports

```js
// math.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

```js
// app.js
import { add, subtract, PI } from "./math.js";

console.log(add(5, 3)); // 8
console.log(PI); // 3.14159
```

#### 2. Default Export

```js
// user.js
export default class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
```

```js
// app.js
import User from "./user.js";

const devtonic = new User("Devtonic");
devtonic.greet();
```

#### 3. Exporting Multiple Things + Aliases

```js
export { add as sum, subtract as minus };
import { sum as total } from "./math.js";
```

---

### Mini Project: **Task Manager App with Modules**

We'll build a clean **Task Manager** using multiple module files.

**Features:**

- Add, delete, and toggle tasks
- Separate modules for:
  - `Task.js` (Task class)
  - `Storage.js` (localStorage handling)
  - `UI.js` (rendering tasks)
  - `App.js` (main logic)

Because browsers require a server for ES Modules (`type="module"`), we’ll use a single HTML file with **inline modules** via `<script type="module">` + multiple `<script>` blocks simulating separate files (using `data-type="module"` pattern for demo).

#### Complete Code – Save as `modules-mini-project.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JS Modules - Task Manager</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #667eea, #764ba2);
        min-height: 100vh;
        padding: 40px 20px;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background: white;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        overflow: hidden;
      }
      header {
        background: #2c3e50;
        color: white;
        padding: 25px;
        text-align: center;
      }
      h1 {
        font-size: 2rem;
      }
      .add-task {
        padding: 25px;
        display: flex;
        gap: 10px;
        background: #f8f9fa;
      }
      input {
        flex: 1;
        padding: 14px;
        border: 2px solid #ddd;
        border-radius: 12px;
        font-size: 1.1rem;
      }
      button {
        padding: 14px 28px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 12px;
        font-weight: bold;
        cursor: pointer;
      }
      button:hover {
        background: #5a6fd8;
      }
      .task-list {
        min-height: 300px;
        padding: 20px;
      }
      .task-item {
        display: flex;
        align-items: center;
        padding: 15px;
        background: #f8f9fa;
        margin-bottom: 10px;
        border-radius: 12px;
        transition: all 0.3s;
      }
      .task-item.completed {
        opacity: 0.7;
        text-decoration: line-through;
      }
      input[type="checkbox"] {
        margin-right: 15px;
        transform: scale(1.3);
      }
      .task-text {
        flex: 1;
        font-size: 1.1rem;
      }
      .delete-btn {
        background: #e74c3c;
        color: white;
        border: none;
        padding: 8px 14px;
        border-radius: 8px;
        cursor: pointer;
      }
      .stats {
        padding: 20px;
        background: #f8f9fa;
        text-align: center;
        font-weight: bold;
        color: #2c3e50;
      }
      .empty {
        text-align: center;
        padding: 60px 20px;
        color: #999;
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header>
        <h1>📋 Task Manager</h1>
        <p>Built with JavaScript Modules</p>
      </header>

      <div class="add-task">
        <input
          type="text"
          id="taskInput"
          placeholder="What needs to be done?"
        />
        <button onclick="addNewTask()">Add Task</button>
      </div>

      <div class="task-list" id="taskList">
        <!-- Tasks rendered by JS -->
      </div>

      <div class="stats" id="stats">0 tasks • 0 completed</div>
    </div>

    <script type="module">
      // ======================
      // Task.js Module (Class)
      // ======================
      class Task {
        constructor(text) {
          this.id = Date.now();
          this.text = text;
          this.completed = false;
          this.createdAt = new Date();
        }

        toggleComplete() {
          this.completed = !this.completed;
        }
      }

      // ======================
      // Storage.js Module
      // ======================
      const Storage = {
        saveTasks(tasks) {
          localStorage.setItem("tasks", JSON.stringify(tasks));
        },

        loadTasks() {
          const saved = localStorage.getItem("tasks");
          return saved ? JSON.parse(saved) : [];
        },
      };

      // ======================
      // UI.js Module
      // ======================
      const UI = {
        renderTasks(tasks) {
          const container = document.getElementById("taskList");
          if (tasks.length === 0) {
            container.innerHTML = `<div class="empty">No tasks yet. Add one above! 🎉</div>`;
            return;
          }

          container.innerHTML = tasks
            .map(
              (task) => `
                    <div class="task-item ${task.completed ? "completed" : ""}">
                        <input type="checkbox" 
                               ${task.completed ? "checked" : ""} 
                               onchange="toggleTask(${task.id})">
                        <div class="task-text">${task.text}</div>
                        <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
                    </div>
                `,
            )
            .join("");
        },

        updateStats(tasks) {
          const total = tasks.length;
          const completed = tasks.filter((t) => t.completed).length;
          document.getElementById("stats").textContent =
            `${total} tasks • ${completed} completed`;
        },
      };

      // ======================
      // App.js Module (Main Logic)
      // ======================
      let tasks = Storage.loadTasks();

      function renderAll() {
        UI.renderTasks(tasks);
        UI.updateStats(tasks);
      }

      window.addNewTask = function () {
        const input = document.getElementById("taskInput");
        const text = input.value.trim();

        if (!text) return;

        // Create new Task instance
        const newTask = new Task(text);
        tasks.push(newTask);

        Storage.saveTasks(tasks);
        renderAll();

        input.value = "";
      };

      window.toggleTask = function (id) {
        const task = tasks.find((t) => t.id === id);
        if (task) {
          task.toggleComplete();
          Storage.saveTasks(tasks);
          renderAll();
        }
      };

      window.deleteTask = function (id) {
        tasks = tasks.filter((t) => t.id !== id);
        Storage.saveTasks(tasks);
        renderAll();
      };

      // Initialize app
      renderAll();

      // Allow pressing Enter to add task
      document.getElementById("taskInput").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          addNewTask();
        }
      });
    </script>
  </body>
</html>
```

### What This Mini Project Demonstrates:

- Class as a module (`Task`)
- Multiple logical modules (`Storage`, `UI`, `App`)
- Clean separation of concerns
- Default & named exports simulation in one file
- Real-world structure you can easily split into separate `.js` files later

**How to run:**

1. Save as `modules-mini-project.html`
2. Open in your browser
3. Add tasks, mark complete, delete — data persists with `localStorage`

**Next Level Tip:**  
In a real project, you would create separate files:

- `js/Task.js`
- `js/Storage.js`
- `js/UI.js`
- `js/App.js`

And import them using:

```html
<script type="module" src="js/App.js"></script>
```
