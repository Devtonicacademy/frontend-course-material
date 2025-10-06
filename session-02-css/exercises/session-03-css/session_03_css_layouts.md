# 🧱 Session 3: CSS Layouts & The Box Model

Welcome to Session 3! In this lesson, you’ll learn how to structure your webpage layouts using foundational CSS techniques like the **box model**, **positioning**, and **display properties** — essential for responsive web design.

---

## 🎯 What You’ll Learn
- Understanding the box model in depth
- Display properties: `block`, `inline`, `inline-block`, `none`
- Width and height control
- `margin`, `padding`, and `border`
- Overflow handling
- Element visibility and display
- Positioning elements: `static`, `relative`, `absolute`, `fixed`, `sticky`
- `z-index` and stacking order
- Centering techniques
- Project: Two-column layout
- Practice exercise: Card layout with float and flex

---

## 📦 Understanding the Box Model
Every HTML element is a rectangular box with 4 areas:

```
| margin |
| border |
| padding |
| content |
```

### 🔍 Box Model Properties
```css
.box {
  width: 300px;
  padding: 20px;
  border: 2px solid #333;
  margin: 30px;
}
```

![Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)

---

## 📐 Width, Height, and `box-sizing`
- By default, width does **not** include padding/border.
- Set `box-sizing: border-box;` to include them:
```css
* {
  box-sizing: border-box;
}
```

---

## 🧍 Display Property
| Value | Description |
|-------|-------------|
| `block` | Starts on a new line, full width |
| `inline` | Doesn’t break line, no width/height control |
| `inline-block` | Acts inline but can set size |
| `none` | Hides the element |

---

## 🔀 Positioning in CSS
| Type | Behavior |
|------|----------|
| `static` | Default (no positioning) |
| `relative` | Offsets from its normal position |
| `absolute` | Positioned relative to nearest ancestor with `position: relative` |
| `fixed` | Stays fixed to viewport (e.g., sticky navbars) |
| `sticky` | Scrolls with content then sticks |

### 🧪 Example:
```css
.navbar {
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}
```

---

## 🗂️ Overflow Handling
```css
.container {
  width: 300px;
  height: 200px;
  overflow: auto;
}
```
Values: `visible`, `hidden`, `scroll`, `auto`

---

## 📌 Z-Index (Stacking)
- Controls which elements appear "on top"
```css
.modal {
  position: absolute;
  z-index: 1000;
}
```

---

## 🎯 Centering Elements
- **Horizontally (block):**
```css
.centered {
  width: 300px;
  margin: 0 auto;
}
```
- **Horizontally & Vertically (flexbox):**
```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

---

## 🧑‍🎨 Mini Project: Two-Column Layout

### Instructions:
1. Create a layout with two columns:
   - Left: Sidebar (fixed width)
   - Right: Main content (fills remaining space)
2. Use either `float`, `flexbox`, or `inline-block` layout
3. Style each section with background color, padding, and border

### ✅ Output:
```html
<div class="container">
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
</div>
```

---

## ✍️ Practice Exercise: Cards Layout

### Objective:
Create a row of cards that flow nicely on larger screens.

- Use `.card` class
- Set equal width, margin, and padding
- Use `inline-block` or `flex` to display them side-by-side

### Bonus:
- Add hover shadow
- Use media query to stack cards on smaller screens

---

## ✅ You’ve Completed Session 3!

You’re now ready to explore **responsive layouts** using **media queries**, **flexbox**, and **CSS grid** in Session 4!

➡️ [Go to Session 4 → Responsive Design & Media Queries](../session-04-responsive/README.md)

