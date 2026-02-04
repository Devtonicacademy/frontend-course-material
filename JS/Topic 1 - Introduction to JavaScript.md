### Topic 1: Introduction to JavaScript

**Goal of this topic**  
By the end, you will:
- Understand what JavaScript is and where it runs
- Know how to add JavaScript to a web page
- Be comfortable using the three most common ways to output information (console, alert, prompt)
- Write your first working JavaScript programs
- Complete two mini-projects to build confidence

**1. What is JavaScript?**

JavaScript (often abbreviated as **JS**) is the programming language that brings websites to life. It runs **in the browser** (Chrome, Firefox, Edge, Safari, etc.) and makes pages interactive.

- HTML → structure (like the skeleton)
- CSS → styling (like clothes and makeup)
- JavaScript → behavior (like muscles and brain)

JavaScript can also run outside the browser using **Node.js**, but for this course (and most web development), we’ll focus on **browser JavaScript** first.

**2. How to Run JavaScript**

Three main ways to include JavaScript in a webpage:

**Option A: Inline (inside HTML tags – not recommended for real projects)**

```html
<button onclick="alert('Hello!')">Click me</button>
```

**Option B: Internal `<script>` tag (good for learning)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First JS Page</title>
</head>
<body>
  <h1>Welcome to JavaScript</h1>

  <script>
    // Your JavaScript code goes here
    console.log("Hello from inside the page!");
  </script>
</body>
</html>
```

**Option C: External file (best practice – what professionals use)**

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First JS Page</title>
</head>
<body>
  <h1>Welcome to JavaScript</h1>

  <script src="script.js"></script>
</body>
</html>
```

```javascript
// script.js
console.log("Hello from an external file!");
```

**Pro Tip**: Always place the `<script>` tag just before the closing `</body>` tag (or use `defer` attribute) so the HTML loads first.

**3. Your First Output Methods**

JavaScript gives us several ways to “see” or “show” results.

**A. console.log() – The developer’s best friend**

```javascript
console.log("Hello World!");
console.log(42);
console.log(true);
console.log("My name is", "Alex", "and I am", 25, "years old");
```

Open your browser → right-click → **Inspect** → **Console** tab to see the output.

**B. alert() – Popup message**

```javascript
alert("Welcome to JavaScript!");
alert("Never use too many alerts – they annoy users!");
```

**C. prompt() – Get input from user**

```javascript
let name = prompt("What is your name?");
alert("Hello, " + name + "!");
```

**D. confirm() – Yes/No dialog (returns true/false)**

```javascript
let isAdult = confirm("Are you over 18?");
console.log("User is adult:", isAdult);
```

**4. Comments & Basic Syntax Rules**

```javascript
// This is a single-line comment

/*
  This is a
  multi-line comment
*/

// JavaScript is case-sensitive
let Name = "Alex";    // different from
let name = "Sara";

// Good habit: end statements with semicolon ;
console.log("Hello");   // ← recommended
console.log("World")    // works but not best practice
```

**5. "use strict" – Safer JavaScript**

Add this at the top of your script to catch common mistakes early.

```javascript
"use strict";

x = 10; // Error! Cannot use variable without declaring it
```

### Project 1: "Hello World" Personalized Greeting Page

**Goal**: Create a page that asks for the user’s name and shows a friendly greeting using both alert and the page itself.

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Personalized Greeting</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 50px;
      background-color: #f0f4f8;
    }
    h1 {
      color: #2c3e50;
    }
    #greeting {
      font-size: 2rem;
      margin-top: 30px;
      color: #2980b9;
    }
  </style>
</head>
<body>
  <h1>Hello World - Let's Get Personal!</h1>
  <div id="greeting">Waiting for your name...</div>

  <script src="script.js"></script>
</body>
</html>
```

**script.js**

```javascript
"use strict";

// Ask for name
let userName = prompt("What is your beautiful name?");

// Check if user entered something
if (userName === "" || userName === null) {
  userName = "Awesome Friend";
}

// Show popup greeting
alert("Hello, " + userName + "! Welcome to JavaScript 🚀");

// Show greeting on the page
document.getElementById("greeting").textContent = 
  "Hello there, " + userName + "! You're going to love JavaScript!";
```

**What you learned**:
- prompt() for input
- String concatenation
- Basic condition (if)
- Manipulating the page (very light DOM intro)

### Project 2: Simple Mad Libs Story Generator

**Goal**: Ask the user for a few words and generate a funny short story.

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mad Libs Fun</title>
  <style>
    body { 
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 700px;
      margin: 40px auto;
      padding: 20px;
      background: #fffef7;
      line-height: 1.6;
    }
    h1 { color: #e74c3c; text-align: center; }
    #story { 
      background: #ecf0f1;
      padding: 25px;
      border-radius: 12px;
      margin-top: 30px;
      white-space: pre-wrap;
    }
    button {
      background: #3498db;
      color: white;
      border: none;
      padding: 12px 30px;
      font-size: 1.1rem;
      border-radius: 8px;
      cursor: pointer;
      margin: 20px auto;
      display: block;
    }
    button:hover { background: #2980b9; }
  </style>
</head>
<body>
  <h1>Mad Libs Story Generator</h1>
  <button onclick="createStory()">Generate Crazy Story!</button>
  <div id="story"></div>

  <script>
    function createStory() {
      "use strict";

      let noun = prompt("Enter a noun (person, place, or thing):");
      let adjective = prompt("Enter an adjective (describes something):");
      let verb = prompt("Enter a verb (action word):");
      let place = prompt("Enter a funny place:");

      // Fallbacks if user cancels or leaves empty
      noun = noun || "cat";
      adjective = adjective || "fluffy";
      verb = verb || "dance";
      place = place || "on the moon";

      let story = 
`Once upon a time, there was a very ${adjective} ${noun}.
Every day, this ${noun} loved to ${verb} ${place}.
One day, something magical happened...
The end! 😂`;

      document.getElementById("story").textContent = story;
    }
  </script>
</body>
</html>
```

**What you learned**:
- Multiple user inputs with prompt()
- String templates (multi-line with backticks)
- Fallback values (|| operator)
- Updating page content
- Wrapping code in a function (intro to functions)
- onclick event (very light events intro)

**Homework / Extra Practice**
1. Add a “Reset” button that clears the story.
2. Ask for one more word (e.g., an animal) and include it in the story.
3. Try using `console.log()` to show each word the user typed before building the story.

**Next Topic Teaser**  
In Topic 2 we’ll learn how to store these answers properly using **variables**, do math with numbers, and build real calculators!

Feel free to ask questions, share your version of the projects, or tell me if you want a video walkthrough style explanation of any part.  
You’ve just taken your first big step — great job! 🚀
