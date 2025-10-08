# ✅ Session 4: Responsive Design Exercise Solutions

Below are sample solutions for the responsive layout exercises from Session 4. Compare with your own versions and experiment further!

---

## 🧩 Exercise 1: Responsive Landing Page

### 📄 `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="hero">
    <h1>Build Fast Websites</h1>
    <p>Responsive, modern, and clean design.</p>
    <a href="#" class="cta">Get Started</a>
  </header>
  <section class="info">
    <div class="image"></div>
    <div class="text">
      <h2>Why Choose Us?</h2>
      <p>Our websites are built with performance and usability in mind.</p>
    </div>
  </section>
</body>
</html>
```

### 🎨 `style.css`
```css
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  background-color: #0055ff;
  color: white;
}

.cta {
  background: white;
  color: #0055ff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  display: inline-block;
  margin-top: 20px;
}

.info {
  display: flex;
  padding: 40px;
  gap: 20px;
  flex-wrap: wrap;
}

.image {
  flex: 1;
  min-width: 280px;
  background: url('https://via.placeholder.com/600x400') no-repeat center/cover;
  height: 300px;
}

.text {
  flex: 1;
  min-width: 280px;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 1.8rem;
  }
  .info {
    flex-direction: column;
  }
}
```

---

## 🧩 Exercise 2: Responsive 3-Column Feature Grid

### 📄 `index.html`
```html
<div class="features">
  <div class="feature">
    <img src="https://via.placeholder.com/100" alt="">
    <h3>Fast</h3>
    <p>Our sites load quickly on all devices.</p>
  </div>
  <div class="feature">
    <img src="https://via.placeholder.com/100" alt="">
    <h3>Responsive</h3>
    <p>Works on phones, tablets, and desktops.</p>
  </div>
  <div class="feature">
    <img src="https://via.placeholder.com/100" alt="">
    <h3>Modern</h3>
    <p>Trendy and accessible designs.</p>
  </div>
</div>
```

### 🎨 `style.css`
```css
.features {
  display: flex;
  justify-content: space-around;
  padding: 40px;
  gap: 20px;
  flex-wrap: wrap;
}

.feature {
  flex: 1 1 300px;
  text-align: center;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .features {
    flex-direction: column;
    align-items: center;
  }
}
```

---

## 🧩 Exercise 3: Responsive Image Card

### 📄 `index.html`
```html
<div class="card">
  <img src="https://via.placeholder.com/600x300" alt="">
  <h2>Beautiful Layouts</h2>
  <p>Create responsive designs with ease.</p>
</div>
```

### 🎨 `style.css`
```css
.card {
  max-width: 500px;
  margin: 40px auto;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.card img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
}
```

---

🎉 Well done! Practice tweaking layouts and colors to build your design confidence. Onward to Tailwind CSS!

