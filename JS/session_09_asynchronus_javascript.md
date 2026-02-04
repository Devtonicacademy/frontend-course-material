Here is the detailed, beginner-friendly tutorial for **Topic 9: Asynchronous JavaScript**.

This topic is one of the most important in modern JavaScript.  
Almost every real-world application needs to **wait for something** — fetching data from a server, reading a file, waiting for a timer, loading an image, etc. — **without freezing the entire page**.

We’ll cover the three main eras of handling asynchrony in JavaScript: callbacks → promises → async/await.

### Topic 9: Asynchronous JavaScript

**Goal of this topic**  
By the end, you will:
- Understand why JavaScript is single-threaded and what “asynchronous” really means
- Recognize callback hell and why we moved away from it
- Master **Promises** (.then / .catch / .finally / Promise.all)
- Write clean asynchronous code with **async / await**
- Use the **Fetch API** to make real HTTP requests
- Handle errors properly in async code
- Build two practical projects that fetch and display real data

**1. Synchronous vs Asynchronous – Quick Intuition**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Output:
// Start
// End
// This runs after 2 seconds
```

JavaScript runs **one thing at a time** (single-threaded), but it can **schedule tasks** to run later (asynchronous) without blocking.

**2. Callbacks (The Old Way – You Still See It)**

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Laptop", price: 850000 };
    callback(data);
  }, 1500);
}

fetchData((result) => {
  console.log("Data received:", result);
});
```

Problem: **Callback Hell** (nested callbacks)

```javascript
step1((res1) => {
  step2(res1, (res2) => {
    step3(res2, (res3) => {
      // ... nightmare
    });
  });
});
```

**3. Promises – The Modern Foundation**

A **Promise** is an object representing the eventual completion (or failure) of an async operation.

States:  
- pending → fulfilled (resolved) / rejected

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Operation successful! 🎉");
    } else {
      reject("Something went wrong 😢");
    }
  }, 1200);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise finished (success or failure)");
  });
```

**Promise.all** – wait for multiple promises

```javascript
Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
])
  .then(([user, posts, comments]) => {
    console.log("All data loaded!");
  })
  .catch(err => console.error("One failed:", err));
```

**4. async / await – The Cleanest & Most Popular Way (2025 Standard)**

```javascript
async function getUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) throw new Error("Network response was not ok");

    const user = await response.json();
    console.log("User:", user.name);
  } catch (error) {
    console.error("Fetch failed:", error);
  } finally {
    console.log("Request completed");
  }
}

getUserData();
```

**Key rules**:
- `async` function always returns a promise
- `await` can only be used inside `async` functions
- Use `try/catch` to handle errors

**5. Fetch API – The Modern Way to Make HTTP Requests**

```javascript
// GET
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// POST example
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "My New Post",
    body: "This is the content",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log("Created:", data));
```

### Project 1: Random Dad Joke Generator

Fetches jokes from a free public API and displays them.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Dad Joke Generator</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      margin: 0;
      padding: 20px;
      text-align: center;
    }
    h1 { margin-bottom: 30px; }
    #joke {
      font-size: 1.8rem;
      max-width: 700px;
      line-height: 1.5;
      background: rgba(255,255,255,0.15);
      padding: 30px;
      border-radius: 16px;
      backdrop-filter: blur(10px);
      margin: 20px;
    }
    button {
      padding: 14px 40px;
      font-size: 1.3rem;
      background: #ff6b6b;
      color: white;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }
    button:hover { background: #ff4757; transform: scale(1.05); }
    button:disabled { opacity: 0.6; cursor: not-allowed; }
  </style>
</head>
<body>
  <h1>Dad Joke Generator 😂</h1>
  <div id="joke">Click the button to get a terrible joke!</div>
  <button id="newJokeBtn">New Joke Please!</button>

  <script>
    "use strict";

    const jokeDiv = document.getElementById("joke");
    const btn = document.getElementById("newJokeBtn");

    async function fetchJoke() {
      try {
        btn.disabled = true;
        btn.textContent = "Loading...";

        const response = await fetch("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json"
          }
        });

        if (!response.ok) throw new Error("Failed to fetch joke");

        const data = await response.json();
        jokeDiv.textContent = data.joke;
      } catch (err) {
        jokeDiv.textContent = "Oops! Couldn't load a joke. Try again.";
        console.error(err);
      } finally {
        btn.disabled = false;
        btn.textContent = "New Joke Please!";
      }
    }

    btn.addEventListener("click", fetchJoke);

    // Load one on page start
    fetchJoke();
  </script>
</body>
</html>
```

### Project 2: Weather Dashboard (City Search)

Fetches weather data from OpenWeatherMap API.

**Note**: You need a free API key from https://openweathermap.org/api

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Weather Dashboard</title>
  <style>
    body {
      font-family: system-ui;
      max-width: 700px;
      margin: 40px auto;
      padding: 20px;
      background: #f0f4f8;
    }
    h1 { text-align: center; color: #2c3e50; }
    .search { display: flex; margin-bottom: 30px; }
    input {
      flex: 1;
      padding: 14px;
      font-size: 1.1rem;
      border: 1px solid #ccc;
      border-radius: 8px 0 0 8px;
    }
    button {
      padding: 14px 28px;
      background: #3498db;
      color: white;
      border: none;
      border-radius: 0 8px 8px 0;
      cursor: pointer;
    }
    #weather {
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      text-align: center;
    }
    #weather.hidden { display: none; }
    .temp { font-size: 4rem; font-weight: bold; margin: 10px 0; }
    .error { color: #e74c3c; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Weather Dashboard</h1>

  <div class="search">
    <input type="text" id="cityInput" placeholder="Enter city name (e.g. Lagos)">
    <button onclick="getWeather()">Get Weather</button>
  </div>

  <div id="weather" class="hidden">
    <h2 id="city"></h2>
    <div class="temp" id="temp"></div>
    <p id="description"></p>
    <p>Humidity: <span id="humidity"></span>% | Wind: <span id="wind"></span> m/s</p>
    <p class="error" id="error"></p>
  </div>

  <script>
    "use strict";

    const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY_HERE"; // ← replace this!

    async function getWeather() {
      const city = document.getElementById("cityInput").value.trim();
      if (!city) return alert("Please enter a city name");

      const weatherDiv = document.getElementById("weather");
      const errorP = document.getElementById("error");
      errorP.textContent = "";

      try {
        weatherDiv.classList.remove("hidden");

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.status === 404 ? "City not found" : "Failed to fetch weather");
        }

        const data = await response.json();

        document.getElementById("city").textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById("temp").textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById("description").textContent = data.weather[0].description;
        document.getElementById("humidity").textContent = data.main.humidity;
        document.getElementById("wind").textContent = data.wind.speed.toFixed(1);

      } catch (err) {
        errorP.textContent = err.message;
        weatherDiv.classList.add("hidden");
      }
    }

    // Allow Enter key
    document.getElementById("cityInput").addEventListener("keypress", e => {
      if (e.key === "Enter") getWeather();
    });
  </script>
</body>
</html>
```

**Extra Challenges / Homework**
1. Add loading spinner while fetching weather
2. Show weather icon (`data.weather[0].icon`)
3. Save last searched city in `localStorage` and load it on page start
4. Use `Promise.all` to fetch weather for multiple cities at once
5. Create a joke + weather combo app (two async calls)

**Next Topic Teaser**  
Topic 10: Advanced Topics & Best Practices  
We’ll cover closures, prototypes, error handling patterns, debugging techniques, code organization, performance tips, and modern best practices — preparing you for real-world projects and interviews.

Feel free to share screenshots of your dad jokes or weather app, ask about promises vs async/await, error handling, or API keys — or show me your own async experiments.  
You’ve now unlocked **real data from the internet** — this is a massive step toward building actual applications! 🚀
