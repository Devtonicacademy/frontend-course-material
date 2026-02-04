Functions are one of the most important concepts in programming. They let you **organize code**, **reuse logic**, and **make your programs cleaner and easier to maintain**.

### Topic 4: Functions

**Goal of this topic**  
By the end, you will:
- Understand what functions are and why they matter
- Create functions using different syntax styles
- Pass data into functions (parameters) and get results back (return)
- Understand scope (where variables live)
- Use functions to avoid repeating code
- Build two practical projects that feel more professional

**1. What is a Function?**

A function is a **reusable block of code** that performs a specific task.  
Think of it like a recipe: you write it once, then use it whenever you want.

**2. Three Main Ways to Create Functions**

**A. Function Declaration** (classic style — hoisted)

```javascript
function sayHello() {
  console.log("Hello, world!");
}

sayHello();           // works even if called before declaration
```

**B. Function Expression** (assigned to a variable — not hoisted)

```javascript
const greet = function() {
  console.log("Hi there!");
};

greet();
```

**C. Arrow Function** (modern, concise — very popular today)

```javascript
const welcome = () => {
  console.log("Welcome!");
};

welcome();

// One-liner arrow function (implicit return)
const double = x => x * 2;
console.log(double(5)); // 10
```

**3. Parameters & Arguments**

```javascript
// Parameters (placeholders)
function greetUser(name, age) {
  console.log(`Hello ${name}, you are ${age} years old!`);
}

// Arguments (actual values)
greetUser("Emma", 22);          // Hello Emma, you are 22 years old!
greetUser("Alex");              // Hello Alex, you are undefined years old!
```

**Default Parameters** (ES6+)

```javascript
function welcome(name = "Guest") {
  console.log(`Welcome, ${name}!`);
}

welcome();          // Welcome, Guest!
welcome("Sara");    // Welcome, Sara!
```

**Rest Parameters** (`...`)

```javascript
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));      // 6
console.log(sum(10, 20, 30, 40)); // 100
```

**4. Return Values**

Functions can **return** a result to the caller.

```javascript
function square(num) {
  return num * num;
}

let result = square(7);
console.log(result);          // 49

// Multiple returns possible
function checkEvenOdd(n) {
  if (n % 2 === 0) return "Even";
  return "Odd";
}
```

**5. Scope – Where Variables Live**

```javascript
let globalVar = "I'm everywhere";

function testScope() {
  let localVar = "I'm only inside this function";
  console.log(globalVar);     // works
  // console.log(localVar);   // works here
}

testScope();
// console.log(localVar);     // Error! localVar is not accessible here
```

**Block scope** (with `let` / `const`)

```javascript
if (true) {
  let blockVar = "I'm trapped in this block";
}
// console.log(blockVar);     // Error!
```

**6. Quick Intro to IIFE** (Immediately Invoked Function Expression)

```javascript
(function() {
  console.log("This runs immediately and creates its own scope");
})();
```

### Project 1: Reusable Calculator (Functions Version)

**Goal**: Build a calculator where each operation is its own clean function.

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Function-Powered Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 60px;
    }
    h1 { margin-bottom: 30px; }
    input, select, button {
      padding: 12px;
      font-size: 1.1rem;
      margin: 8px;
      border-radius: 6px;
      border: none;
    }
    button {
      background: #ff6b6b;
      color: white;
      cursor: pointer;
    }
    button:hover { background: #ff4757; }
    #result {
      font-size: 2.5rem;
      margin-top: 30px;
      padding: 20px;
      background: rgba(255,255,255,0.15);
      border-radius: 12px;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
  </style>
</head>
<body>
  <h1>Reusable Calculator</h1>
  
  <input type="number" id="num1" placeholder="First number">
  <select id="operation">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">×</option>
    <option value="/">÷</option>
  </select>
  <input type="number" id="num2" placeholder="Second number">
  <button onclick="calculate()">Calculate</button>

  <div id="result">Result = ?</div>

  <script>
    "use strict";

    // Reusable operation functions
    function add(a, b)        { return a + b; }
    function subtract(a, b)   { return a - b; }
    function multiply(a, b)   { return a * b; }
    function divide(a, b) {
      return b !== 0 ? a / b : "Cannot divide by zero!";
    }

    // Main calculator function
    function calculate() {
      const n1 = Number(document.getElementById("num1").value);
      const n2 = Number(document.getElementById("num2").value);
      const op = document.getElementById("operation").value;

      let result;

      switch (op) {
        case "+": result = add(n1, n2); break;
        case "-": result = subtract(n1, n2); break;
        case "*": result = multiply(n1, n2); break;
        case "/": result = divide(n1, n2); break;
        default:  result = "Invalid operation";
      }

      document.getElementById("result").textContent = 
        `${n1} ${op} ${n2} = ${result}`;
    }
  </script>
</body>
</html>
```

**What you learned**:
- Multiple small, focused functions
- Reusing logic
- `switch` with functions
- Clean separation of concerns

### Project 2: Factorial & Fibonacci Generator

**Goal**: Create reusable functions to calculate factorial and Fibonacci numbers (both iterative and recursive versions).

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Factorial & Fibonacci</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      max-width: 700px;
      margin: 40px auto;
      padding: 20px;
      background: #f8f9fa;
    }
    h1 { text-align: center; color: #2c3e50; }
    .section { margin: 30px 0; }
    input, button {
      padding: 10px 16px;
      font-size: 1.1rem;
      margin: 10px;
    }
    button { background: #27ae60; color: white; border: none; cursor: pointer; }
    button:hover { background: #219653; }
    #output { 
      margin-top: 20px; 
      padding: 20px; 
      background: #ecf0f1; 
      border-radius: 10px; 
      font-family: monospace; 
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <h1>Math with Functions</h1>

  <div class="section">
    <h2>Factorial</h2>
    <input type="number" id="factInput" placeholder="Enter number" min="0">
    <button onclick="calcFactorial()">Calculate Factorial</button>
  </div>

  <div class="section">
    <h2>Fibonacci</h2>
    <input type="number" id="fibInput" placeholder="How many numbers?" min="1">
    <button onclick="calcFibonacci()">Generate Sequence</button>
  </div>

  <div id="output"></div>

  <script>
    "use strict";

    // Factorial - Iterative
    function factorial(n) {
      if (n < 0) return "Negative numbers not allowed";
      if (n === 0 || n === 1) return 1;

      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }

    // Fibonacci - Iterative
    function fibonacci(count) {
      if (count <= 0) return [];
      if (count === 1) return [0];
      if (count === 2) return [0, 1];

      const sequence = [0, 1];
      for (let i = 2; i < count; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
      }
      return sequence;
    }

    function calcFactorial() {
      const num = Number(document.getElementById("factInput").value);
      const output = document.getElementById("output");
      const result = factorial(num);
      output.innerHTML = `Factorial of ${num} = <strong>${result}</strong>`;
    }

    function calcFibonacci() {
      const count = Number(document.getElementById("fibInput").value);
      const output = document.getElementById("output");
      const sequence = fibonacci(count);
      output.innerHTML = `First ${count} Fibonacci numbers:<br><strong>${sequence.join(" → ")}</strong>`;
    }
  </script>
</body>
</html>
```

**Extra Challenges / Homework**
1. Add a recursive version of `factorial` and `fibonacci` (and compare performance for large numbers).
2. Create a `power(base, exponent)` function using a loop.
3. Make a `greetPerson(person)` function that takes an object `{name, age, city}` and returns a nice message.
4. Combine both projects: let the user choose between calculator, factorial, or fibonacci from a menu.

**Next Topic Teaser**  
Topic 5: Arrays & Iteration — we’ll learn how to work with lists of data, transform them, filter them, and reduce them. This is where JavaScript starts feeling really powerful!

Feel free to share your calculator results, ask about recursion, or show me your own function ideas.  
You’re now writing modular, reusable code — huge milestone! 🚀
