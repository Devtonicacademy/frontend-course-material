# 02 - Core Concepts

Mastering Tailwind means understanding its three core pillars: **Utility-First**, **Responsive Design**, and **States**.

## 1. Utility-First Fundamentals
Building complex components from a constrained set of primitive utilities.

### Example: A Simple Alert
Instead of writing a custom CSS class, we layer utilities.
```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="https://via.placeholder.com/48" alt="Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```

---

## 2. Responsive Design (Mobile First)
Tailwind uses a **mobile-first** breakpoint system.
- `sm:` (640px)
- `md:` (768px)
- `lg:` (1024px)
- `xl:` (1280px)

### Example: Responsive Grid
```html
<!-- One column on mobile, two on medium, three on large -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-blue-200 p-4">Item 1</div>
  <div class="bg-blue-300 p-4">Item 2</div>
  <div class="bg-blue-400 p-4">Item 3</div>
</div>
```

---

## 3. Hover, Focus, & Other States
Just prefix the utility with the state.

### Example: Button Interaction
```html
<button class="bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white font-bold py-2 px-4 rounded active:scale-95 transition-all">
  Click Me
</button>
```

---

## 4. Dark Mode
Prefix with `dark:` to style elements when dark mode is enabled.

```html
<div class="bg-white dark:bg-slate-800 p-8">
  <h1 class="text-slate-900 dark:text-white">Hello World</h1>
</div>
```

[Next: Layout & Spacing](./03-layout-and-spacing.md)
