### Topic 7: DOM Manipulation & Events

**Goal of this topic**  
By the end, you will be able to:
- Understand what the DOM is and how to think about it
- Select elements from the page in many different ways
- Change content, styles, classes, and attributes
- Create, add, and remove elements dynamically
- Listen and respond to user events (click, input, submit, keypress, etc.)
- Prevent default behavior when needed
- Build two interactive, real-feeling mini-projects

**1. What is the DOM? (Quick & Clear Explanation)**

DOM = **Document Object Model**  
It’s a tree-like representation of your HTML page that the browser creates in memory.

```html
<body>
  <h1>Hello</h1>
  <div id="content">
    <p>Welcome</p>
    <button>Click</button>
  </div>
</body>
```

The browser turns this into an object tree:

```
document
  └── html
      ├── head
      └── body
          ├── h1
          └── div#content
              ├── p
              └── button
```

JavaScript lets us **reach into this tree** and change it live — add/remove elements, change text, styles, etc.

**2. Selecting Elements**

```javascript
// By ID (fastest & most specific)
const title = document.getElementById("main-title");

// By CSS selector (very powerful)
const firstP = document.querySelector("p");               // first <p>
const allButtons = document.querySelectorAll("button");   // NodeList (like array)

// By class
const cards = document.getElementsByClassName("card");

// By tag name
const allDivs = document.getElementsByTagName("div");
```

**Modern favorite**: `querySelector` & `querySelectorAll`

```javascript
const header = document.querySelector("header h1");
const allInputs = document.querySelectorAll("input[type='text']");
```

**3. Changing Content & Attributes**

```javascript
const heading = document.querySelector("h1");

// Text (safer than innerHTML)
heading.textContent = "New Title";

// HTML (careful with user input!)
heading.innerHTML = "Welcome <strong>Back!</strong>";

// Attributes
const link = document.querySelector("a");
link.href = "https://example.com";
link.setAttribute("target", "_blank");
link.textContent = "Visit Example";

// Classes (very common)
const box = document.querySelector(".box");
box.classList.add("highlight");
box.classList.remove("hidden");
box.classList.toggle("active");
box.classList.contains("error"); // true/false
```

**4. Changing Styles (inline styles)**

```javascript
const card = document.querySelector(".card");
card.style.backgroundColor = "#f0f8ff";
card.style.padding = "20px";
card.style.borderRadius = "12px";

// Better practice: use classes instead of inline styles when possible
card.classList.add("fancy-card");
```

**5. Creating & Adding Elements**

```javascript
// Create new element
const newDiv = document.createElement("div");
newDiv.textContent = "I'm new!";
newDiv.className = "message";

// Add to page
document.body.appendChild(newDiv);              // at the end of body
document.getElementById("container").append(newDiv);  // inside specific element

// Insert at specific position
container.insertBefore(newDiv, container.firstChild);

// Remove
newDiv.remove();   // modern & clean
// or parent.removeChild(newDiv);
```

**6. Events – Making Things Interactive**

```javascript
const button = document.querySelector("button");

// Click event
button.addEventListener("click", function() {
  alert("You clicked me!");
});

// With arrow function (very common)
button.addEventListener("click", () => {
  console.log("Button was clicked!");
});

// Multiple events
button.addEventListener("mouseenter", () => {
  button.style.backgroundColor = "lightgreen";
});

button.addEventListener("mouseleave", () => {
  button.style.backgroundColor = "";
});

// Input / change events
const input = document.querySelector("input");
input.addEventListener("input", (e) => {
  console.log("Current value:", e.target.value);
});

// Form submit
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stops page reload
  console.log("Form submitted!");
});
```

**Event object (e)** gives you lots of useful info:

- `e.target` – the element that was clicked/typed in
- `e.key` – which key was pressed (on key events)
- `e.preventDefault()` – stop default action (e.g., form submit, link follow)

### Project 1: Interactive Counter

**Goal**: Buttons to increment, decrement, reset — with visual feedback.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Interactive Counter</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      margin: 0;
    }
    h1 { margin-bottom: 20px; }
    #counter {
      font-size: 5rem;
      margin: 30px;
      padding: 30px 60px;
      background: rgba(255,255,255,0.15);
      border-radius: 16px;
      backdrop-filter: blur(10px);
      min-width: 200px;
      text-align: center;
    }
    .btn {
      padding: 14px 32px;
      font-size: 1.3rem;
      margin: 10px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      color: white;
      transition: all 0.2s;
    }
    #increment { background: #27ae60; }
    #decrement { background: #e74c3c; }
    #reset     { background: #f39c12; }
    .btn:hover { transform: scale(1.08); }
  </style>
</head>
<body>
  <h1>Interactive Counter</h1>
  <div id="counter">0</div>
  <div>
    <button id="decrement" class="btn">-</button>
    <button id="increment" class="btn">+</button>
    <button id="reset" class="btn">Reset</button>
  </div>

  <script>
    "use strict";

    const counterDisplay = document.getElementById("counter");
    const incrementBtn = document.getElementById("increment");
    const decrementBtn = document.getElementById("decrement");
    const resetBtn = document.getElementById("reset");

    let count = 0;

    function updateDisplay() {
      counterDisplay.textContent = count;

      // Visual feedback
      if (count > 0) {
        counterDisplay.style.color = "#27ae60";
      } else if (count < 0) {
        counterDisplay.style.color = "#e74c3c";
      } else {
        counterDisplay.style.color = "white";
      }
    }

    incrementBtn.addEventListener("click", () => {
      count++;
      updateDisplay();
    });

    decrementBtn.addEventListener("click", () => {
      count--;
      updateDisplay();
    });

    resetBtn.addEventListener("click", () => {
      count = 0;
      updateDisplay();
    });

    // Keyboard support (bonus)
    document.addEventListener("keydown", (e) => {
      if (e.key === "+") count++;
      if (e.key === "-") count--;
      if (e.key === "r" || e.key === "R") count = 0;
      updateDisplay();
    });
  </script>
</body>
</html>
```

### Project 2: Real-Time Form Validator

**Goal**: Password strength checker with live feedback + submit prevention if weak.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Live Password Validator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 500px;
      margin: 60px auto;
      padding: 30px;
      background: #f8f9fa;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    h1 { text-align: center; color: #2c3e50; }
    .form-group { margin: 20px 0; }
    label { display: block; margin-bottom: 8px; font-weight: bold; }
    input {
      width: 100%;
      padding: 12px;
      font-size: 1.1rem;
      border: 2px solid #ddd;
      border-radius: 8px;
      box-sizing: border-box;
    }
    #strength {
      margin-top: 10px;
      padding: 12px;
      border-radius: 8px;
      font-weight: bold;
      text-align: center;
      min-height: 24px;
    }
    .weak    { background: #e74c3c; color: white; }
    .medium  { background: #f39c12; color: white; }
    .strong  { background: #27ae60; color: white; }
    button {
      width: 100%;
      padding: 14px;
      font-size: 1.2rem;
      background: #3498db;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 20px;
    }
    button:disabled {
      background: #bdc3c7;
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <h1>Password Strength Checker</h1>

  <form id="signupForm">
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter password..." required>
      <div id="strength"></div>
    </div>

    <button type="submit" id="submitBtn" disabled>Sign Up</button>
  </form>

  <script>
    "use strict";

    const passwordInput = document.getElementById("password");
    const strengthDiv = document.getElementById("strength");
    const submitBtn = document.getElementById("submitBtn");
    const form = document.getElementById("signupForm");

    function checkStrength(password) {
      if (password.length < 1) {
        return { text: "", class: "" };
      }

      let strength = 0;

      if (password.length >= 8) strength++;
      if (password.length >= 12) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[^A-Za-z0-9]/.test(password)) strength++;

      if (strength <= 2) {
        return { text: "Weak", class: "weak" };
      } else if (strength <= 4) {
        return { text: "Medium", class: "medium" };
      } else {
        return { text: "Strong", class: "strong" };
      }
    }

    passwordInput.addEventListener("input", (e) => {
      const value = e.target.value;
      const result = checkStrength(value);

      strengthDiv.textContent = result.text;
      strengthDiv.className = result.class;

      // Enable/disable submit
      submitBtn.disabled = result.text !== "Strong";
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Form submitted! Password is strong enough.");
      // In real app → send to server
    });
  </script>
</body>
</html>
```

**Extra Challenges / Homework**
1. Add character count display next to the password field
2. Show specific feedback (e.g. “Add uppercase”, “Add number”)
3. Make the counter support double-click to reset
4. Add dark mode toggle button that changes page colors
5. Create a todo list “add item” form that appends new `<li>` elements

**Next Topic Teaser**  
Topic 8: Modern JavaScript (ES6+)  
We’ll clean up our code with arrow functions, destructuring, spread/rest, classes, modules — making everything more modern, readable, and professional.

Feel free to share screenshots of your counter or password validator, ask about any event or DOM method that felt tricky, or show me your own interactive ideas.  
You’ve just unlocked **real interactivity** — this is a huge milestone! 🚀
