# 📱 Session 4: Responsive Design & Media Queries

In this session, you’ll learn how to make your websites **responsive**, so they look good on all screen sizes — from phones to desktops.

---

## 🎯 What You'll Learn
- What is responsive design
- Viewport and screen sizes
- Mobile-first approach
- Media queries
- Responsive typography and layout
- Responsive images and buttons
- Fluid widths vs fixed widths
- Flexbox and grid in responsive contexts
- Project: Responsive landing page
- Exercise: 3-feature section with responsive design

---

## 📐 What is Responsive Design?
Responsive design means that a website adapts to different screen sizes and devices (desktop, tablet, mobile).

> Goal: One site that works well everywhere 📱💻🖥️

---

## 🔍 The Viewport Meta Tag
Make sure every HTML file includes this in the `<head>`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
This ensures proper scaling on mobile devices.

---

## 🧪 Media Queries
Media queries allow you to apply styles based on the device’s width or features.

### Syntax:
```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```
### Common Breakpoints:
- `max-width: 1200px` (large desktops)
- `max-width: 992px` (tablets)
- `max-width: 768px` (large phones)
- `max-width: 480px` (small phones)

---

## 📏 Fixed vs Fluid Layouts
- **Fixed**: Uses `px` (not flexible)
- **Fluid**: Uses `%`, `vw`, `em`, `rem` — adjusts to screen

```css
.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}
```

---

## 🔠 Responsive Typography
```css
h1 {
  font-size: 2rem;
}

@media (max-width: 600px) {
  h1 {
    font-size: 1.5rem;
  }
}
```

---

## 🖼️ Responsive Images
```css
img {
  max-width: 100%;
  height: auto;
}
```
Use `.img-responsive` class or just style all images.

---

## 🔧 Responsive Buttons
```css
button {
  padding: 10px 20px;
  width: 100%;
}

@media (min-width: 600px) {
  button {
    width: auto;
  }
}
```

---

## 🧑‍🎨 Mini Project: Responsive Landing Page

### Structure:
- Hero section with heading and subheading
- CTA button
- 2-column section for features
- Mobile-friendly layout using media queries

### Tools:
- Flexbox
- Fluid widths
- Google Fonts
- Responsive images

---

## ✍️ Practice Exercise: Responsive Features Grid

Create a 3-column features section that collapses to 1 column on small screens.

**Bonus:**
- Add spacing using `gap` or `margin`
- Style buttons for touch friendliness

---

## ✅ You've Completed Session 4!

You now understand responsive layout design! Next session: **Tailwind CSS Basics** to speed up your styling workflow.

➡️ [Go to Session 5 → Tailwind CSS Basics](../session-05-tailwind/README.md)

