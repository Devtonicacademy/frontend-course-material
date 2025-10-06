# ✅ Session 2: CSS Exercise Solutions

Below are the solutions to the Session 2 exercises. Compare your attempts before checking these files.

---

## 🧩 Exercise 1: Product Card

### 📄 `card.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Product Card</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <img src="https://via.placeholder.com/300x200" alt="Product">
    <h2>Product Title</h2>
    <p>This is a great product description.</p>
    <button>Buy Now</button>
  </div>
</body>
</html>
```

### 🎨 `style.css`
```css
body {
  font-family: Arial, sans-serif;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  padding: 40px;
}

.card {
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.card button {
  padding: 10px 20px;
  background: #007BFF;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.card button:hover {
  background: #0056b3;
}
```

---

## 🧩 Exercise 2: Navigation Bar

### 📄 `navbar.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Navbar</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav>
    <ul>
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</body>
</html>
```

### 🎨 `style.css`
```css
body {
  margin: 0;
  font-family: sans-serif;
}

nav {
  background-color: #333;
  padding: 10px;
}

nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  display: block;
}

nav ul li a:hover {
  background-color: #555;
  border-radius: 4px;
}

nav ul li a.active {
  background-color: #007BFF;
  border-radius: 4px;
}
```

---

## 🧩 Exercise 3: Box Model Demo

### 📄 `box.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Box Model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="box">This is a box!</div>
</body>
</html>
```

### 🎨 `style.css`
```css
body {
  font-family: Arial;
  padding: 40px;
  background-color: #f0f0f0;
}

.box {
  width: 300px;
  padding: 20px;
  margin: 30px;
  border: 2px solid gray;
  background-color: lightyellow;
}
```

---

🎉 Great job completing these exercises! Try tweaking the colors, spacing, and layout to build your own variations.

