Arrays are one of the most important data structures in JavaScript. They let you store **multiple values** in a single variable and work with lists of data efficiently.

### Topic 5: Arrays & Iteration

**Goal of this topic**  
By the end, you will:
- Create and manipulate arrays
- Use the most important array methods
- Understand and master higher-order functions (`forEach`, `map`, `filter`, `reduce`, etc.)
- Iterate over arrays in different ways
- Build two real-world mini-projects using arrays

**1. Creating & Basic Array Operations**

```javascript
// Create arrays
let numbers = [10, 20, 30, 40, 50];
let mixed = ["apple", 42, true, null, { name: "Sara" }];

// Access elements (0-based index)
console.log(numbers[0]);     // 10
console.log(numbers[4]);     // 50

// Length
console.log(numbers.length); // 5

// Add / remove elements
numbers.push(60);            // add to end
numbers.pop();               // remove from end
numbers.unshift(5);          // add to beginning
numbers.shift();             // remove from beginning

// Remove / replace at specific position
numbers.splice(2, 1, 99);    // at index 2, remove 1 item, insert 99
console.log(numbers);        // [10, 20, 99, 40, 50]
```

**2. Common Array Methods (Mutating)**

```javascript
let fruits = ["apple", "banana", "orange"];

// Add multiple
fruits.push("mango", "kiwi");

// Remove multiple from end
fruits.splice(-2);           // removes last 2 items

// Sort (careful — sorts as strings by default)
fruits.sort();               // alphabetical
numbers.sort((a, b) => a - b); // numerical

// Reverse
fruits.reverse();
```

**3. Iteration Methods – The Modern Way**

These are the **higher-order functions** that make JavaScript powerful.

**A. forEach** – do something for every item (no return value)

```javascript
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});
```

**B. map** – create a **new** array by transforming each item

```javascript
let prices = [10, 25, 8, 42];
let doubled = prices.map(price => price * 2);
// [20, 50, 16, 84]

let upper = fruits.map(fruit => fruit.toUpperCase());
```

**C. filter** – create a **new** array with only items that pass a test

```javascript
let ages = [15, 22, 17, 30, 19];
let adults = ages.filter(age => age >= 18);
// [22, 30, 19]
```

**D. find / findIndex** – get first matching item

```javascript
let users = [
  { id: 1, name: "Emma" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Sara" }
];

let found = users.find(user => user.name === "Alex");
// { id: 2, name: "Alex" }
```

**E. reduce** – combine all items into one value

```javascript
let scores = [10, 20, 30, 40];
let total = scores.reduce((sum, score) => sum + score, 0); // 100

// Most common use: sum, max, min, group, etc.
```

**F. some / every** – check if items satisfy condition

```javascript
let hasAdult = ages.some(age => age >= 18);   // true
let allAdults = ages.every(age => age >= 18); // false
```

**4. Other Useful Methods**

```javascript
let sentence = fruits.join(", ");           // "apple, banana, orange"
let combined = numbers.concat([60, 70]);    // new array
let flat = [1, [2, 3], [4, [5]]].flat(2);   // [1,2,3,4,5]
```

### Project 1: Console-Based Todo List

**Goal**: A simple todo app using array methods — add, remove, view, mark complete.

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Todo List (Array Practice)</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      max-width: 600px;
      margin: 40px auto;
      padding: 20px;
      background: #f8f9fa;
    }
    h1 { text-align: center; color: #2c3e50; }
    input, button {
      padding: 10px 16px;
      font-size: 1rem;
      margin: 8px 4px;
    }
    button.add { background: #27ae60; color: white; border: none; }
    button.remove { background: #e74c3c; color: white; border: none; }
    button.complete { background: #3498db; color: white; border: none; }
    #todoList {
      margin-top: 30px;
      list-style: none;
      padding: 0;
    }
    .todo-item {
      padding: 12px;
      margin: 8px 0;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .completed { text-decoration: line-through; opacity: 0.6; }
  </style>
</head>
<body>
  <h1>My Todo List</h1>
  <input type="text" id="taskInput" placeholder="Add a new task...">
  <button class="add" onclick="addTask()">Add Task</button>

  <ul id="todoList"></ul>

  <script>
    "use strict";

    let todos = [];

    function renderTodos() {
      const list = document.getElementById("todoList");
      list.innerHTML = "";

      todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = "todo-item";
        if (todo.completed) li.classList.add("completed");

        li.innerHTML = `
          <span>${todo.text}</span>
          <div>
            <button class="complete" onclick="toggleComplete(${index})">
              ${todo.completed ? "Undo" : "Done"}
            </button>
            <button class="remove" onclick="removeTask(${index})">Delete</button>
          </div>
        `;

        list.appendChild(li);
      });
    }

    function addTask() {
      const input = document.getElementById("taskInput");
      const text = input.value.trim();

      if (text === "") return;

      todos.push({ text, completed: false });
      input.value = "";
      renderTodos();
    }

    function removeTask(index) {
      todos.splice(index, 1);
      renderTodos();
    }

    function toggleComplete(index) {
      todos[index].completed = !todos[index].completed;
      renderTodos();
    }

    // Allow Enter key to add task
    document.getElementById("taskInput").addEventListener("keypress", e => {
      if (e.key === "Enter") addTask();
    });
  </script>
</body>
</html>
```

**What you learned**:
- `push`, `splice`
- `forEach` to render
- Updating array and re-rendering UI
- Working with array of objects

### Project 2: Simple Quiz App

**Goal**: Array of questions → ask user → calculate score.

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Quick JavaScript Quiz</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 700px;
      margin: 40px auto;
      padding: 20px;
      background: #f0f4f8;
    }
    h1 { text-align: center; color: #2c3e50; }
    .question {
      background: white;
      padding: 20px;
      margin: 20px 0;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    button {
      padding: 12px 24px;
      font-size: 1.1rem;
      margin: 15px auto;
      display: block;
      background: #3498db;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    button:hover { background: #2980b9; }
    #result {
      text-align: center;
      font-size: 1.8rem;
      margin: 30px;
      padding: 20px;
      border-radius: 12px;
    }
    .correct { background: #2ecc71; color: white; }
    .wrong   { background: #e74c3c; color: white; }
  </style>
</head>
<body>
  <h1>JavaScript Basics Quiz</h1>
  <div id="quiz"></div>
  <button onclick="startQuiz()">Start Quiz</button>
  <div id="result"></div>

  <script>
    "use strict";

    const questions = [
      {
        question: "Which keyword declares a variable that cannot be reassigned?",
        options: ["var", "let", "const", "static"],
        answer: "const"
      },
      {
        question: "What does '===' check for?",
        options: ["Value only", "Value and type", "Reference only", "Nothing"],
        answer: "Value and type"
      },
      {
        question: "Which method creates a new array with transformed values?",
        options: ["forEach", "filter", "map", "reduce"],
        answer: "map"
      },
      {
        question: "How do you add an item to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
      }
    ];

    let score = 0;
    let currentQuestion = 0;

    function showQuestion() {
      const quizDiv = document.getElementById("quiz");
      const q = questions[currentQuestion];

      let html = `<div class="question">
        <h3>${q.question}</h3>`;

      q.options.forEach(option => {
        html += `
          <label style="display:block; margin:10px 0;">
            <input type="radio" name="answer" value="${option}">
            ${option}
          </label>`;
      });

      html += `</div>`;
      quizDiv.innerHTML = html;
    }

    function checkAnswer() {
      const selected = document.querySelector('input[name="answer"]:checked');
      if (!selected) return alert("Please select an answer!");

      const userAnswer = selected.value;
      const correct = questions[currentQuestion].answer;

      if (userAnswer === correct) {
        score++;
      }

      currentQuestion++;

      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }

    function showResult() {
      const resultDiv = document.getElementById("result");
      const percentage = Math.round((score / questions.length) * 100);

      let message = `You scored ${score} out of ${questions.length} (${percentage}%)`;

      if (percentage >= 80) message += " 🎉 Excellent!";
      else if (percentage >= 50) message += " Good job!";
      else message += " Keep practicing!";

      resultDiv.textContent = message;
      resultDiv.className = percentage >= 50 ? "correct" : "wrong";

      // Reset for next play
      document.querySelector("button").textContent = "Play Again";
      document.querySelector("button").onclick = resetQuiz;
    }

    function startQuiz() {
      score = 0;
      currentQuestion = 0;
      document.getElementById("quiz").innerHTML = "";
      document.getElementById("result").textContent = "";
      document.querySelector("button").textContent = "Next Question";
      document.querySelector("button").onclick = checkAnswer;
      showQuestion();
    }

    function resetQuiz() {
      document.querySelector("button").textContent = "Start Quiz";
      document.querySelector("button").onclick = startQuiz;
      document.getElementById("quiz").innerHTML = "";
      document.getElementById("result").textContent = "";
    }
  </script>
</body>
</html>
```

**Extra Challenges / Homework**
1. Add more questions to the quiz (try 8–10).
2. In the todo list: add a “clear completed” button using `filter`.
3. Create a shopping list app: add items with price, show total using `reduce`.
4. Build a filterable list of movies/books using `filter` and search input.

**Next Topic Teaser**  
Topic 6: Objects & JSON — we’ll learn how to work with structured data, create mini-databases in memory, and prepare for real APIs.

Feel free to share screenshots of your todo list or quiz score, ask about any method that felt confusing, or show me your own array project ideas.  
You’re now handling lists like a pro — massive progress! 🚀
