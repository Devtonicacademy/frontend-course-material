# ⚡ Session 5: Tailwind CSS Basics

Welcome to the world of **Tailwind CSS** — a utility-first CSS framework that helps you build fast and responsive UIs with ease.

---

## 🎯 What You'll Learn
- What Tailwind CSS is and why it’s useful
- How to set up Tailwind via CDN
- Basic utility classes for styling
- Tailwind’s approach vs traditional CSS
- Responsive utilities and breakpoints
- Hover and focus states
- Reusability with `@apply` and custom classes
- Project: Style your profile with Tailwind
- Practice exercise: Feature card layout

---

## 💡 What is Tailwind CSS?
Tailwind is a **utility-first CSS framework** that provides pre-made class names like:
```html
text-center bg-blue-500 p-4 rounded
```
You style by applying classes **directly in HTML**, instead of writing custom CSS files.

---

## ⚙️ How to Set Up Tailwind (CDN Method)
Add this to your HTML `<head>`:
```html
<script src="https://cdn.tailwindcss.com"></script>
```
> ✅ Easy for beginners and prototypes

---

## 🧩 Tailwind Utility Examples

### Typography
```html
<h1 class="text-3xl font-bold">Hello</h1>
<p class="text-gray-600">Welcome to Tailwind CSS</p>
```

### Box Styling
```html
<div class="p-6 m-4 border rounded shadow-lg bg-white">
  Content here
</div>
```

### Buttons
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>
```

---

## 📱 Responsive Classes
Tailwind uses **mobile-first breakpoints**:
- `sm:` (min-width: 640px)
- `md:` (768px)
- `lg:` (1024px)
- `xl:` (1280px)

Example:
```html
<p class="text-sm md:text-lg lg:text-xl">Responsive Text</p>
```

---

## 🎨 Pseudo-Class Variants
Use hover/focus/active states:
```html
<a class="text-blue-500 hover:underline">Learn More</a>
```

---

## 🧠 `@apply` (for Custom Styling)
In full Tailwind setup (not CDN), you can:
```css
.btn {
  @apply bg-green-500 text-white px-4 py-2 rounded;
}
```
This is used in real-world projects to simplify and reuse styles.

---

## 🧑‍🎨 Mini Project: Tailwind-Styled Profile Page

### Objective:
Recreate your Session 1 profile page using only Tailwind classes.

### Requirements:
- Use utility classes for spacing, color, and layout
- Center image and text
- Use responsive text sizes

---

## ✍️ Practice Exercise: Feature Card Layout

### Task:
Build 3 horizontal feature cards using Tailwind. Each card includes:
- Icon/image
- Heading
- Description

### Bonus:
- Add responsive design (stack cards vertically on small screens)
- Add hover effects

---

## ✅ You've Completed Session 5!
You're now ready to explore **advanced Tailwind components** and responsive patterns in the next session.

➡️ [Go to Session 6 → Tailwind Components & Layouts](../session-06-tailwind-components/README.md)

