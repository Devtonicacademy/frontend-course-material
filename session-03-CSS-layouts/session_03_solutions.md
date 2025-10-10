# ✅ Session 3: CSS Layout Exercise Solutions

Below are the sample solutions for the layout exercises from Session 3. Use these to compare and enhance your own versions.

---

## 🧩 Exercise 1: Two-Column Layout

### 📄 `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Two-Column Layout</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <div class="sidebar">Sidebar</div>
    <div class="main">Main Content</div>
  </div>
</body>
</html>
```

### 🎨 `style.css`
```css
body {
  margin: 0;
  font-family: sans-serif;
}

.container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background: #f0f0f0;
  padding: 20px;
}

.main {
  flex: 1;
  background: #fff;
  padding: 20px;
}
```

---

## 🧩 Exercise 2: Flexbox Card Grid

### 📄 `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flexbox Cards</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card-container">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
  </div>
</body>
</html>
```

### 🎨 `style.css`
```css
body {
  font-family: sans-serif;
  padding: 40px;
  background: #fafafa;
}

.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 200px;
  padding: 20px;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 6px 10px rgba(0,0,0,0.2);
}

@media (max-width: 600px) {
  .card {
    width: 100%;
  }
}
```

---

## 🧩 Exercise 3: Positioned Banner

### 📄 `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Banner Positioning</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="banner">
    <h1>Welcome to Our Site</h1>
  </div>
</body>
</html>
```

### 🎨 `style.css`
```css
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: sans-serif;
}

.banner {
  position: relative;
  height: 300px;
  background: url('https://via.placeholder.com/1200x300') no-repeat center/cover;
}

.banner h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2.5rem;
}
```

---

🎉 Great job! Keep tweaking the layout and colors to improve your visual design skills.

