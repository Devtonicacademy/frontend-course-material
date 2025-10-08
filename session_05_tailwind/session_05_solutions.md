# ✅ Session 5: Tailwind CSS Exercise Solutions

Here are the sample solutions for the Tailwind exercises in Session 5. Compare these with your work and experiment further.

---

## 🧩 Exercise 1: Tailwind Profile Page

### 📄 `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Profile</title>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">
  <div class="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
    <img src="https://via.placeholder.com/120" alt="Profile" class="rounded-full mx-auto mb-4">
    <h1 class="text-2xl font-bold text-gray-800">Jane Doe</h1>
    <p class="text-gray-600 mb-4">Web Developer & Designer</p>
    <ul class="text-sm text-gray-500">
      <li>Email: jane@example.com</li>
      <li>Phone: 123-456-7890</li>
    </ul>
  </div>
</body>
</html>
```

---

## 🧩 Exercise 2: Feature Card Layout

### 📄 `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Feature Cards</title>
</head>
<body class="bg-gray-50 p-8">
  <div class="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
    <div class="bg-white p-6 rounded shadow flex-1 text-center">
      <img src="https://via.placeholder.com/100" class="mx-auto mb-4">
      <h3 class="text-xl font-semibold">Fast</h3>
      <p class="text-gray-600">Quick load times and lag-free interaction.</p>
    </div>
    <div class="bg-white p-6 rounded shadow flex-1 text-center">
      <img src="https://via.placeholder.com/100" class="mx-auto mb-4">
      <h3 class="text-xl font-semibold">Responsive</h3>
      <p class="text-gray-600">Looks great on all devices.</p>
    </div>
    <div class="bg-white p-6 rounded shadow flex-1 text-center">
      <img src="https://via.placeholder.com/100" class="mx-auto mb-4">
      <h3 class="text-xl font-semibold">Customizable</h3>
      <p class="text-gray-600">Easily adjust layouts and colors.</p>
    </div>
  </div>
</body>
</html>
```

---

## 🧩 Exercise 3: Interactive Button Showcase

### 📄 `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Buttons</title>
</head>
<body class="bg-gray-100 p-10">
  <div class="space-x-4 text-center">
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Primary
    </button>
    <button class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
      Secondary
    </button>
    <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
      Danger
    </button>
  </div>
</body>
</html>
```

---

🎉 Great work! Keep using Tailwind’s utility-first approach to rapidly build responsive UIs with clean markup.

