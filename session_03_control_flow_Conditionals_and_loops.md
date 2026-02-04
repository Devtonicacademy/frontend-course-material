### Topic 3: Control Flow – Conditionals & Loops

**Goal of this topic**  
By the end, you will:
- Make decisions using `if`, `else if`, `else`, ternary, and `switch`
- Repeat actions with `for`, `while`, `do...while`
- Control loops with `break`, `continue`
- Combine conditions and loops for real logic
- Build two classic beginner projects with immediate feedback

**1. Conditional Statements – Making Decisions**

**A. if / else if / else**

```javascript
let age = 17;

if (age >= 18) {
  console.log("You can vote!");
} else if (age >= 16) {
  console.log("You can drive (in some places)!");
} else {
  console.log("You're still young — enjoy it!");
}
```

**Flowchart visual** (classic if-else structure):




Another simple if flowchart:




**B. Ternary Operator** (short if-else)

```javascript
let message = age >= 18 ? "Adult" : "Minor";
console.log(message); // "Minor"
```

**C. switch Statement** (great for multiple exact matches)

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Just another day...");
}
```

**switch** flowchart idea:




**2. Loops – Repeating Actions**

**A. for loop** (best when you know how many times)

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}
// Output: Count: 1 → Count: 5
```

**B. while loop** (repeat while condition is true)

```javascript
let count = 1;
while (count <= 5) {
  console.log(`While count: ${count}`);
  count++;
}
```

**C. do...while** (runs at least once)

```javascript
let num = 6;
do {
  console.log(`Do-while: ${num}`);
  num++;
} while (num <= 5);
// Still runs once even though condition is false
```

**D. Loop control: break & continue**

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;   // skip 5
  if (i === 8) break;       // stop at 8
  console.log(i);           // 1,2,3,4,6,7
}
```

**3. Common Patterns**
- Counters (`i++`)
- Accumulators (`sum += number`)
- Nested loops (tables, grids)
- Searching / validating in loops

### Project 1: Number Guessing Game

**Goal**: Computer picks a random number (1–100). User guesses until correct. Give hints ("too high" / "too low") and count attempts.

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Number Guessing Game</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      text-align: center;
      background: linear-gradient(135deg, #6a11cb, #2575fc);
      color: white;
      min-height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h1 { margin-bottom: 20px; }
    #message {
      font-size: 1.6rem;
      margin: 20px;
      padding: 15px;
      background: rgba(255,255,255,0.2);
      border-radius: 12px;
      min-height: 60px;
    }
    input, button {
      padding: 12px 20px;
      font-size: 1.2rem;
      margin: 10px;
      border-radius: 8px;
      border: none;
    }
    button {
      background: #ff6b6b;
      color: white;
      cursor: pointer;
    }
    button:hover { background: #ff4757; }
  </style>
</head>
<body>
  <h1>Number Guessing Game</h1>
  <div id="message">Guess a number between 1 and 100!</div>
  <input type="number" id="guessInput" placeholder="Your guess..." min="1" max="100">
  <button onclick="checkGuess()">Submit Guess</button>
  <div id="attempts">Attempts: 0</div>

  <script>
    "use strict";

    // Generate random number (1-100)
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function checkGuess() {
      const userGuess = Number(document.getElementById("guessInput").value);
      const messageDiv = document.getElementById("message");
      const attemptsDiv = document.getElementById("attempts");

      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDiv.textContent = "Please enter a number between 1 and 100!";
        return;
      }

      attempts++;
      attemptsDiv.textContent = `Attempts: ${attempts}`;

      if (userGuess === secretNumber) {
        messageDiv.textContent = `🎉 Correct! The number was ${secretNumber}. You got it in ${attempts} attempts!`;
        messageDiv.style.background = "rgba(46, 204, 113, 0.6)";
      } else if (userGuess < secretNumber) {
        messageDiv.textContent = "Too low! Try a higher number.";
      } else {
        messageDiv.textContent = "Too high! Try a lower number.";
      }

      // Clear input for next guess
      document.getElementById("guessInput").value = "";
      document.getElementById("guessInput").focus();
    }
  </script>
</body>
</html>
```

**Gameplay example** (interface inspiration):




Another version screenshot:




**What you learned**:
- `Math.random()` & `Math.floor()`
- `while`-like logic via button clicks
- Multiple conditions (`if` / `else if`)
- Updating UI in real-time
- Input validation

### Project 2: FizzBuzz (Classic Coding Challenge)

**Goal**: Print numbers 1–100. For multiples of 3 → "Fizz", of 5 → "Buzz", of both → "FizzBuzz".

**index.html** (shows output in page + console)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>FizzBuzz Challenge</title>
  <style>
    body {
      font-family: monospace;
      background: #1e272e;
      color: #c8d6e5;
      padding: 40px;
      line-height: 1.6;
    }
    h1 { color: #ee5253; text-align: center; }
    pre {
      background: #2f3640;
      padding: 25px;
      border-radius: 12px;
      max-width: 700px;
      margin: 30px auto;
      white-space: pre-wrap;
      font-size: 1.1rem;
    }
  </style>
</head>
<body>
  <h1>FizzBuzz (1 to 100)</h1>
  <pre id="output"></pre>

  <script>
    "use strict";

    let output = "";
    const resultDiv = document.getElementById("output");

    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        output += "FizzBuzz\n";
      } else if (i % 3 === 0) {
        output += "Fizz\n";
      } else if (i % 5 === 0) {
        output += "Buzz\n";
      } else {
        output += i + "\n";
      }
    }

    resultDiv.textContent = output;

    // Bonus: console version with colors (for dev tools)
    console.log("%cFizzBuzz Output in Console:", "font-weight:bold; color:#ee5253;");
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) console.log("%cFizzBuzz", "color:#2ecc71");
      else if (i % 3 === 0) console.log("%cFizz", "color:#3498db");
      else if (i % 5 === 0) console.log("%cBuzz", "color:#f39c12");
      else console.log(i);
    }
  </script>
</body>
</html>
```

**FizzBuzz code examples** (visual inspiration):




Another clean version:




**Extra Challenges / Homework**
1. Let user choose range (1–20 or 1–1000) in guessing game.
2. Add "Fizz" color red, "Buzz" blue, "FizzBuzz" green in page output.
3. Create a loop that asks user for numbers until they enter 0, then show sum & average.
4. Modify FizzBuzz to use `while` instead of `for`.

**Next Topic Teaser**  
Topic 4: Functions — we’ll learn how to organize code into reusable blocks so we stop repeating ourselves and make projects cleaner and more powerful!

Share your game results (how many attempts?) or your FizzBuzz output — or ask about any part that felt tricky.  
You're building real logic now — fantastic progress! 🚀
