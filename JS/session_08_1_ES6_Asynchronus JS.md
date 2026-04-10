Here's a **complete tutorial + mini project** on **Asynchronous JavaScript**, with full HTML + CSS included.

### Asynchronous JavaScript Tutorial

JavaScript is **single-threaded**, but asynchronous programming allows it to handle multiple tasks without blocking the main thread (e.g., fetching data, timers, file operations).

#### Core Concepts:

1. **Callbacks**
2. **Promises**
3. **Async / Await** ← Most modern and recommended way

---

### 1. Promises

A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.

```js
const fetchUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve({ id: 1, name: "Devtonic", city: "Lagos" });
    } else {
      reject("Failed to fetch user");
    }
  }, 1500);
});

fetchUser
  .then((user) => console.log("User:", user))
  .catch((error) => console.error("Error:", error));
```

---

### 2. Async / Await (Cleanest way)

```js
async function getUserData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getUserData();
```

**Key Rules:**

- `async` functions always return a Promise
- `await` can only be used inside `async` functions
- `try...catch` is used for error handling

---

### Mini Project: **Weather Dashboard with Async/Await**

A beautiful, real-world style dashboard that:

- Fetches weather data using the **Open-Meteo API** (no API key needed)
- Uses `async/await` and `fetch()`
- Shows loading states and error handling
- Beautiful UI

#### Complete Code (Save as `async-javascript-mini-project.html`)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Async JavaScript - Weather Dashboard</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
        color: white;
        min-height: 100vh;
        padding: 40px 20px;
      }
      .container {
        max-width: 900px;
        margin: 0 auto;
      }
      h1 {
        text-align: center;
        margin-bottom: 40px;
        font-size: 2.8rem;
      }
      .search-box {
        display: flex;
        gap: 10px;
        max-width: 500px;
        margin: 0 auto 40px;
      }
      input {
        flex: 1;
        padding: 16px;
        border: none;
        border-radius: 50px;
        font-size: 1.1rem;
      }
      button {
        padding: 16px 32px;
        background: #00b4d8;
        color: white;
        border: none;
        border-radius: 50px;
        font-weight: bold;
        cursor: pointer;
      }
      button:hover {
        background: #0096c7;
      }
      .loading {
        text-align: center;
        font-size: 1.2rem;
        margin: 40px 0;
      }
      .weather-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 40px 30px;
        text-align: center;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
      }
      .city {
        font-size: 2.2rem;
        margin-bottom: 10px;
      }
      .temp {
        font-size: 5rem;
        font-weight: 700;
        margin: 20px 0;
      }
      .description {
        font-size: 1.4rem;
        margin-bottom: 30px;
        opacity: 0.9;
      }
      .details {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 20px;
        margin-top: 30px;
      }
      .detail-item {
        background: rgba(255, 255, 255, 0.15);
        padding: 15px;
        border-radius: 12px;
      }
      .error {
        color: #ff6b6b;
        text-align: center;
        margin: 30px 0;
        font-size: 1.2rem;
      }
      .footer {
        text-align: center;
        margin-top: 50px;
        opacity: 0.7;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>🌤️ Async Weather Dashboard</h1>

      <div class="search-box">
        <input
          type="text"
          id="cityInput"
          placeholder="Enter city name (e.g. Lagos, Abuja, London)"
          value="Lagos"
        />
        <button onclick="getWeather()">Get Weather</button>
      </div>

      <div id="loading" class="loading" style="display: none;">
        Fetching weather data... ⏳
      </div>
      <div id="error" class="error" style="display: none;"></div>

      <div id="weatherCard" class="weather-card" style="display: none;">
        <!-- Populated by JavaScript -->
      </div>

      <div class="footer">
        Demonstrating: fetch(), async/await, Promises, Error Handling
      </div>
    </div>

    <script>
      // Main async function
      async function getWeather() {
        const cityInput = document.getElementById("cityInput").value.trim();
        const loading = document.getElementById("loading");
        const errorDiv = document.getElementById("error");
        const weatherCard = document.getElementById("weatherCard");

        if (!cityInput) {
          showError("Please enter a city name");
          return;
        }

        // Show loading
        loading.style.display = "block";
        errorDiv.style.display = "none";
        weatherCard.style.display = "none";

        try {
          // Step 1: Get coordinates using Open-Meteo Geocoding
          const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityInput)}&count=1&language=en&format=json`,
          );
          const geoData = await geoRes.json();

          if (!geoData.results || geoData.results.length === 0) {
            throw new Error("City not found");
          }

          const { latitude, longitude, name, country } = geoData.results[0];

          // Step 2: Fetch weather data
          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`,
          );
          const weatherData = await weatherRes.json();

          const current = weatherData.current;

          // Weather code to description (simple mapping)
          const weatherDescriptions = {
            0: "Clear sky",
            1: "Mainly clear",
            2: "Partly cloudy",
            3: "Overcast",
            45: "Fog",
            51: "Light drizzle",
            61: "Rain",
            71: "Snow",
            80: "Rain showers",
          };

          const description =
            weatherDescriptions[current.weather_code] || "Unknown";

          // Render weather card
          weatherCard.innerHTML = `
                    <div class="city">${name}, ${country}</div>
                    <div class="temp">${Math.round(current.temperature_2m)}°C</div>
                    <div class="description">${description}</div>
                    
                    <div class="details">
                        <div class="detail-item">
                            <strong>Humidity</strong><br>
                            ${current.relative_humidity_2m}%
                        </div>
                        <div class="detail-item">
                            <strong>Wind Speed</strong><br>
                            ${current.wind_speed_10m} km/h
                        </div>
                        <div class="detail-item">
                            <strong>Feels Like</strong><br>
                            ${Math.round(current.temperature_2m)}°C
                        </div>
                    </div>
                `;

          weatherCard.style.display = "block";
        } catch (err) {
          showError(
            err.message || "Failed to fetch weather data. Please try again.",
          );
        } finally {
          loading.style.display = "none";
        }
      }

      function showError(message) {
        const errorDiv = document.getElementById("error");
        errorDiv.textContent = message;
        errorDiv.style.display = "block";
      }

      // Allow pressing Enter key
      document
        .getElementById("cityInput")
        .addEventListener("keypress", function (e) {
          if (e.key === "Enter") {
            getWeather();
          }
        });

      // Load default weather on page load
      window.onload = () => {
        getWeather();
      };
    </script>
  </body>
</html>
```

### What This Mini Project Demonstrates:

- `async` / `await` syntax
- `fetch()` API with Promises
- Chaining multiple async operations
- Proper error handling with `try...catch`
- Loading states and user feedback
- Real-world API usage

**How to use:**

1. Save the code as `async-javascript-mini-project.html`
2. Open in any browser
3. Search for any city (Lagos, Abuja, London, New York, etc.)
