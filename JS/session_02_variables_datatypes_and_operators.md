Here is a detailed, beginner-friendly tutorial for **Topic 2: Variables, Data Types & Operators**. This content is structured for teaching students, employees, or IT professionals who are moving quickly from zero to confident JavaScript usage.

We build directly on Topic 1 — now we learn how to **store** and **work with** the information we collect from users.

### Topic 2: Variables, Data Types & Operators

**Goal of this topic**  
By the end, students will:
- Understand and choose between `var`, `let`, and `const`
- Know the main JavaScript data types
- Perform calculations and comparisons
- Convert between types when needed
- Use modern string techniques (template literals)
- Build two practical mini-projects

**1. Variables – Storing Information**

Variables are like labeled boxes where we keep data.

Three ways to declare variables (very important differences):

```javascript
// Old way (avoid in modern code)
var score = 100;          // function-scoped, can be redeclared

// Modern & recommended (since ES6)
let age = 25;             // block-scoped, can be reassigned
const pi = 3.14159;       // block-scoped, cannot be reassigned

age = 26;                 // OK
// pi = 3.14;             // Error!
```

**Rule of thumb (what professionals follow today):**
- Use `const` by default
- Use `let` only when you need to reassign the value
- Avoid `var` completely in new code

**2. Main Data Types (Primitives)**

JavaScript has 7 primitive types:

```javascript
// 1. String (text)
let name = "Sara";
let greeting = 'Hello';           // single or double quotes
let emoji = "🚀";

// 2. Number (integers & decimals)
let age = 19;
let temperature = -4.7;
let huge = 9007199254740991n;     // BigInt (add n at end)

// 3. Boolean (true/false)
let isStudent = true;
let hasCoffee = false;

// 4. Undefined (variable declared but no value)
let futureCareer;                 // → undefined

// 5. Null (intentionally empty)
let emptyBox = null;

// 6. Symbol (unique identifiers – advanced, rare for beginners)
let id = Symbol("unique");

// 7. BigInt (very large integers)
let veryBig = 123456789012345678901234567890n;
```

**Quick check – typeof operator**

```javascript
console.log(typeof "hello");      // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" ← famous JS quirk!
```

**3. Operators**

**A. Arithmetic Operators**

```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.333...
console.log(a % b);   // 1   (remainder)
console.log(a ** 2);  // 100 (power)

let x = 5;
x++;                  // x = 6 (post-increment)
++x;                  // x = 7 (pre-increment)
x--;                  // x = 6
```

**B. Comparison Operators**

```javascript
console.log(5 > 3);       // true
console.log(10 <= 10);    // true
console.log("5" == 5);    // true   (loose – converts types)
console.log("5" === 5);   // false  (strict – no conversion)
console.log("apple" !== "banana"); // true
```

**C. Logical Operators**

```javascript
let hasTicket = true;
let isAdult = true;

console.log(hasTicket && isAdult);   // true  (AND)
console.log(hasTicket || isAdult);   // true  (OR)
console.log(!hasTicket);             // false (NOT)
```

**4. Type Coercion & Conversion**

JavaScript sometimes converts types automatically (coercion):

```javascript
console.log("5" + 3);      // "53"     (string wins)
console.log("5" - 3);      // 2        (number wins)
console.log("5" * "2");    // 10
console.log(+"42");        // 42       (unary + → to number)
```

**Explicit conversion (recommended)**

```javascript
let input = prompt("Enter your age:");
let age = Number(input);              // or parseInt(input)
let ageFloat = parseFloat("3.7");

console.log(String(42));              // "42"
console.log(Boolean(0));              // false
console.log(Boolean(""));             // false
console.log(Boolean("hello"));        // true
```

**5. Template Literals (Modern Strings – Game Changer)**

```javascript
let user = "Emma";
let points = 1200;

console.log("Hello " + user + ", you have " + points + " points!");

// Modern & clean way (backticks)
console.log(`Hello ${user}, you have ${points} points!`);

// Multi-line
let story = `
Once upon a time
  in a galaxy far away...
    ${user} saved the day!
`;
```

### Project 1: Prompt-Based Calculator

**Goal**: Ask user for two numbers and an operation, then show the result.

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Simple Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 60px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
    }
    h1 { margin-bottom: 40px; }
    #result {
      font-size: 2.5rem;
      margin: 30px;
      padding: 20px;
      background: rgba(255,255,255,0.15);
      border-radius: 12px;
      backdrop-filter: blur(10px);
    }
  </style>
</head>
<body>
  <h1>Basic Calculator</h1>
  <button onclick="calculate()">Calculate Something!</button>
  <div id="result">Result will appear here</div>

  <script>
    function calculate() {
      "use strict";

      let num1 = prompt("Enter first number:");
      let num2 = prompt("Enter second number:");
      let operation = prompt("Enter operation (+, -, *, /):");

      // Convert to numbers
      num1 = Number(num1);
      num2 = Number(num2);

      let result;

      if (operation === "+") {
        result = num1 + num2;
      } else if (operation === "-") {
        result = num1 - num2;
      } else if (operation === "*") {
        result = num1 * num2;
      } else if (operation === "/") {
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
      } else {
        result = "Invalid operation!";
      }

      document.getElementById("result").textContent = 
        `${num1} ${operation} ${num2} = ${result}`;
    }
  </script>
</body>
</html>
```

**Project 2: BMI Calculator**

**Goal**: Calculate Body Mass Index and show category.

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>BMI Calculator</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      max-width: 500px;
      margin: 50px auto;
      padding: 30px;
      background: #f5f7fa;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    h1 { color: #2c3e50; text-align: center; }
    #result {
      margin-top: 30px;
      padding: 20px;
      border-radius: 12px;
      font-size: 1.3rem;
      text-align: center;
    }
    .under { background: #3498db; color: white; }
    .normal { background: #2ecc71; color: white; }
    .over { background: #f39c12; color: white; }
    .obese { background: #e74c3c; color: white; }
  </style>
</head>
<body>
  <h1>BMI Calculator</h1>
  <button onclick="calcBMI()">Calculate My BMI</button>
  <div id="result">Your result will appear here</div>

  <script>
    function calcBMI() {
      "use strict";

      let weightKg = prompt("Enter your weight in kg (e.g. 68):");
      let heightM = prompt("Enter your height in meters (e.g. 1.75):");

      weightKg = Number(weightKg);
      heightM = Number(heightM);

      if (isNaN(weightKg) || isNaN(heightM) || heightM <= 0) {
        document.getElementById("result").textContent = "Please enter valid numbers!";
        return;
      }

      let bmi = weightKg / (heightM * heightM);
      bmi = bmi.toFixed(1); // 1 decimal place

      let category = "";
      let className = "";

      if (bmi < 18.5) {
        category = "Underweight";
        className = "under";
      } else if (bmi < 25) {
        category = "Normal weight";
        className = "normal";
      } else if (bmi < 30) {
        category = "Overweight";
        className = "over";
      } else {
        category = "Obesity";
        className = "obese";
      }

      let output = `Your BMI is ${bmi}<br><strong>${category}</strong>`;
      let resultDiv = document.getElementById("result");
      resultDiv.innerHTML = output;
      resultDiv.className = className;
    }
  </script>
</body>
</html>
```

**Key Learning Points from Projects**
- `Number()` conversion from user input
- Conditional logic (if/else)
- Template literals for nice output
- Basic math operators
- Handling invalid input (NaN, zero division)
- Updating page content with styles

**Extra Challenges / Homework**
1. Add square root, power, or modulus (%) to the calculator.
2. In BMI project: also ask for name and show personalized message.
3. Create a temperature converter (°C ↔ °F).

**Next Topic Teaser**  
Topic 3: Control Flow – we’ll learn how to make decisions (`if`, `switch`) and repeat actions (`loops`) so our programs become truly smart and interactive!

Feel free to share screenshots of your calculator or BMI results, ask about any confusing part, or request code variations.  
You’re progressing fast — keep it up! 🚀
