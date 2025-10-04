# 🎨 Session 2: Introduction to CSS Styling

Welcome to Session 2! In this session, you'll learn how to style your HTML pages using **CSS (Cascading Style Sheets)** to make them visually appealing and user-friendly.

---

## 🎯 What You'll Learn
- What CSS is and how it works
- Ways to apply CSS to HTML
- CSS syntax, rules, and structure
- Selectors and combinators
- Styling text, backgrounds, borders, and boxes
- Understanding the Box Model
- Units of measurement (px, %, em, rem)
- Google Fonts and `@import`
- Class vs ID usage
- External CSS best practices
- Using dev tools for debugging
- Mini project: Styled profile page
- Practice exercises with solutions

---

## 🧾 What is CSS?
**CSS** stands for *Cascading Style Sheets*. It tells the browser **how** to display HTML elements.

While HTML is the **structure**, CSS is the **style** — it controls layout, colors, fonts, spacing, and more.

---

## 🧪 3 Ways to Apply CSS

1. **Inline CSS** (inside an HTML tag)
```html
<p style="color: blue;">Hello!</p>
```

2. **Internal CSS** (inside a `<style>` tag in the `<head>`)
```html
<head>
  <style>
    p { color: green; }
  </style>
</head>
```

3. **External CSS** (in a `.css` file)
```html
<link rel="stylesheet" href="styles.css">
```
```css
/* styles.css */
p { color: red; }
```

> ✅ Best practice: Use **external CSS** for real projects.

---

## 🎨 CSS Syntax
```css
selector {
  property: value;
  property: value;
}
```
Example:
```css
h1 {
  color: blue;
  font-size: 32px;
}
```

---

## 🔍 CSS Selectors
| Selector | Matches |
|----------|---------|
| `*` | All elements |
| `p` | All `<p>` tags |
| `.class` | All elements with a specific class |
| `#id` | An element with a specific ID |
| `element, element` | Multiple elements |
| `element element` | Descendant elements |
| `element > element` | Direct children only |
| `element:hover` | Hover state |

### 🧪 Example Use Case
```css
/* Select all paragraphs inside .blog */
.blog p {
  color: gray;
  line-height: 1.6;
}
```

---

## 💅 Common CSS Properties
```css
/* Text */
color: red;
font-size: 18px;
font-family: Arial, sans-serif;
text-align: center;

/* Box model */
margin: 20px;
padding: 10px;
border: 2px solid black;
background-color: lightblue;

/* Layout */
display: block;
width: 100%;
height: auto;
```

### 🧪 Example Use Case: Card Styling
```css
.card {
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
```

---

## 📦 The Box Model
Every HTML element is a box. The box model includes:
- `content`
- `padding`
- `border`
- `margin`

![Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)

Use DevTools (Right-click → Inspect) to explore the box model in real-time.

---

## 🔢 Units in CSS
- `px` – fixed size (e.g., `width: 300px`)
- `%` – relative to parent (e.g., `width: 80%`)
- `em` – relative to parent’s font-size
- `rem` – relative to root font-size (e.g., 1rem = 16px by default)

### 🧪 Example:
```css
.container {
  width: 90%;
  padding: 2rem;
}
```

---

## 🔡 Google Fonts + `@import`
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
```

---

## 🆚 Class vs ID
```html
<!-- HTML -->
<p class="note">Note content</p>
<p id="summary">Summary content</p>
```
```css
/* CSS */
.note {
  background-color: yellow;
}

#summary {
  font-style: italic;
}
```

> ✅ Use `.class` for reusable styles, `#id` for one-off elements.

---

## 🧑‍🎨 Mini Project: Style Your Profile Page

Continue from Session 1. Add styles using an external CSS file.

### Instructions
1. Create `style.css`
2. Link it to your `profile.html` with:
```html
<link rel="stylesheet" href="style.css">
```
3. Style the header, image, bio, list, and footer

### ✅ Sample CSS Snippet
```css
body {
  background-color: #f4f4f4;
  font-family: 'Roboto', sans-serif;
  color: #333;
}

h1 {
  text-align: center;
  color: #0055ff;
}

img {
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  width: 150px;
}
```

---

## ✍️ Practice Exercise: Build a Stylish Landing Page

### Task:
- Create an HTML page with:
  - Full-width hero banner
  - Heading + subheading
  - CTA button with hover effect
  - Custom font

### ✅ Sample Output (HTML + CSS preview)
```html
<!-- HTML -->
<section class="hero">
  <h1>Welcome to My App</h1>
  <p>Experience fast, responsive web design.</p>
  <a href="#" class="cta">Get Started</a>
</section>
```
```css
.hero {
  background-color: #333;
  color: white;
  padding: 60px;
  text-align: center;
}

.cta {
  display: inline-block;
  background: #ff6600;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s;
}

.cta:hover {
  background: #cc5500;
}
```

---

## ✅ You’ve Completed Session 2!

You're now ready to explore layout tools like **Flexbox**, the **Box Model**, and modern positioning in the next session.

➡️ [Go to Session 3 → CSS Layouts & Box Model](../session-03-css-layout/README.md)

