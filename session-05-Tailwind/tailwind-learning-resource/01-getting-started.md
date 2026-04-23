# 01- Getting Started with Tailwind CSS

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding CSS and then writing it to a static CSS file.

## 1. Quick Start: Play CDN
For learning and prototyping, you can use the Play CDN. **Note: Not for production!**

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-3xl font-bold underline text-blue-600">
    Hello world!
  </h1>
</body>
</html>
```

## 2. Professional Setup: Tailwind CLI
The most reliable way to use Tailwind CSS is with the CLI tool.

### Step 1: Install Tailwind CSS
```bash
npm install -D tailwindcss
npx tailwindcss init
```

### Step 2: Configure Template Paths
Add the paths to all of your template files in your `tailwind.config.js`.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 3: Add the Tailwind directives to your CSS
Create a `src/input.css` file and add the following:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 💡 Quick Tip: "The Vibe"
In Tailwind, you don't write CSS. You compose styles using tiny building blocks (utility classes). Instead of creating a `.btn` class, you write `class="px-4 py-2 bg-blue-500 rounded text-white"`.

[Next: Core Concepts](./02-core-concepts.md)
