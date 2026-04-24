# Getting Started with Tailwind CSS Locally: A Beginner's Guide

## What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that helps you build modern websites quickly by providing low-level utility classes. Instead of writing custom CSS for every element, you use pre-built classes like `bg-blue-500` for backgrounds or `text-center` for text alignment. This approach speeds up development and keeps your code consistent.

This guide assumes you have no prior experience with Tailwind CSS or CSS frameworks. We'll set up Tailwind CSS v4 (the latest version) to run locally on your computer.

## Prerequisites

Before starting, ensure you have:
- **Node.js** installed (version 18 or higher recommended). Download from [nodejs.org](https://nodejs.org/).
- **npm** (comes with Node.js) for managing packages.
- A code editor like VS Code.

To check if you have Node.js and npm installed, open your terminal/command prompt and run:
```bash
node --version
npm --version
```

## Step-by-Step Installation

### 1. Create a New Project Folder

Create a new folder for your project:
```bash
mkdir my-tailwind-project
cd my-tailwind-project
```

### 2. Initialize a Node.js Project

This creates a `package.json` file that manages your project's dependencies and scripts.

```bash
npm init -y
```

### 3. Install Tailwind CSS

Install Tailwind CSS v4 and its PostCSS plugin:
```bash
npm install tailwindcss @tailwindcss/postcss
```

### 4. Create Source Files

Create the `src` folder and your initial files:

```bash
mkdir src
```

Create `src/input.css` with this content:
```css
@import "tailwindcss";
```

Create `src/index.html` with this content:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind Project</title>
    <link rel="stylesheet" href="output.css" />
  </head>
  <body class="bg-blue-500 text-white p-4">
    <h1 class="text-2xl font-bold">Hello Tailwind!</h1>
    <p>This is a test page.</p>
  </body>
</html>
```

You can create these files using your code editor or command line.

## Project Folder Structure Explained

After installation, your project will look like this:

```
my-tailwind-project/
├── node_modules/          # Contains all installed dependencies (auto-generated)
├── package.json           # Project configuration file
├── package-lock.json      # Lock file for consistent dependency versions
├── src/                   # Source folder for your code
│   ├── input.css          # Your Tailwind CSS input file
│   ├── output.css         # Generated CSS file (created when you build)
│   └── index.html         # Your HTML file
└── README.md              # This file (documentation)
```

### Why This Structure?

- **`node_modules/`**: Stores all the libraries and tools Tailwind needs. This folder is large and auto-generated – don't edit it manually.
- **`package.json`**: Lists your project details and dependencies. It tells npm what packages to install.
- **`package-lock.json`**: Ensures everyone gets the exact same dependency versions, preventing bugs from version differences.
- **`src/` (source)**: Keeps your original files organized. You edit files here.
- **`input.css`**: Where you import Tailwind's base styles. This is your starting point.
- **`output.css`**: The final compiled CSS that browsers understand. This file is generated automatically.
- **`index.html`**: Your webpage. It links to the compiled CSS.

This separation keeps source files (what you edit) separate from generated files (what you don't edit).

## Understanding the Key Files

### `package.json`
```json
{
  "name": "my-tailwind-project",
  "version": "1.0.0",
  "dependencies": {
    "@tailwindcss/postcss": "^4.2.4",
    "tailwindcss": "^4.2.4"
  }
}
```

This file:
- Names your project
- Tracks versions
- Lists dependencies (Tailwind CSS packages)
- Defines scripts (you can add build commands here later)

### `src/input.css`
```css
@import "tailwindcss";
```

This single line imports all of Tailwind's utility classes. In v4, it's simpler than older versions – no separate `@tailwind base;`, `@tailwind components;`, etc.

### `src/output.css`
This file is generated automatically when you build. It contains only the CSS for classes you actually use in your HTML, making your site fast.

### `src/index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind Project</title>
    <link rel="stylesheet" href="output.css" />
  </head>
  <body class="bg-blue-500 text-white p-4">
    <h1 class="text-2xl font-bold">Hello Tailwind!</h1>
    <p>This is a test page.</p>
  </body>
</html>
```

This is your webpage:
- Links to `output.css` for styling
- Uses Tailwind classes like `bg-blue-500` (blue background) and `text-2xl` (large text)

## How to Run and Use Tailwind CSS

### Building CSS (One-Time Build)

To generate `output.css` from `input.css`:
```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css
```

### Development Mode (Watch for Changes)

For development, run this to automatically rebuild when you change files:
```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

Keep this running in a terminal while you work.

### Viewing Your Site

Open `src/index.html` in your web browser. You can:
- Double-click the file
- Use a local server (like `npx serve src/` if you install `serve`)

## Using Tailwind Classes

In your HTML, replace custom CSS with Tailwind classes:

```html
<!-- Instead of custom CSS, use classes -->
<div class="bg-red-500 text-white p-4 rounded-lg shadow-md">
  <h2 class="text-xl font-semibold mb-2">Card Title</h2>
  <p class="text-sm">This is styled with Tailwind utilities.</p>
</div>
```

Common classes:
- `bg-blue-500`: Blue background
- `text-center`: Center text
- `p-4`: Padding on all sides
- `m-2`: Margin
- `flex`: Flexbox layout
- `hidden md:block`: Hide on mobile, show on medium screens+

Explore classes at [tailwindcss.com/docs](https://tailwindcss.com/docs).

## Key Differences in Tailwind v4

- **CSS-first config**: Customization goes in CSS files, not JavaScript
- **Single import**: Just `@import "tailwindcss";`
- **Zero config**: Works without extra setup files
- **Automatic detection**: Finds classes in HTML/JS automatically
- **Smaller output**: Only includes used styles

## Troubleshooting Common Issues

### CSS Not Updating
- Make sure the watch command is running
- Check for errors in your terminal
- Refresh your browser

### Classes Not Working
- Verify the class name is correct (check documentation)
- Ensure `output.css` is linked in HTML
- Check browser console for errors

### Build Errors
- Confirm all dependencies are installed: `npm install`
- Check Node.js version: `node --version` (needs 18+)

## Next Steps

1. **Learn more classes**: Visit [tailwindcss.com](https://tailwindcss.com) for the full documentation
2. **Customize**: Add your own styles in `input.css` after the import
3. **Build a project**: Create multiple HTML pages or add JavaScript
4. **Deploy**: Upload your files to a web host when ready

## Additional Scripts (Optional)

Add these to your `package.json` scripts for convenience:

```json
"scripts": {
  "build": "@tailwindcss/cli -i ./src/input.css -o ./src/output.css",
  "dev": "@tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch"
}
```

Then run `npm run build` or `npm run dev`.

Happy coding with Tailwind CSS!
