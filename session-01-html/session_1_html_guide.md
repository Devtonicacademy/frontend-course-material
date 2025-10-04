## 🧑‍💻 Session 1: How the Internet Works + HTML Basics
### Learning Guide for Beginners

---

### 🌍 How the Internet Works (Simplified)
Before we dive into building websites, it's important to understand how the internet actually works:

- The **Internet** is a global network of computers that can communicate with each other.
- A **website** lives on a **server** (another computer), and when you type a URL (like `google.com`) into your browser, you're asking to visit a file from that server.
- The **browser** (like Chrome or Firefox) takes the code it receives (HTML, CSS, JS) and shows it to you as a web page.
- The main actors:
  - **Browser**: Where you view web pages.
  - **Server**: Hosts the website files.
  - **DNS**: Like a phonebook; turns names (like google.com) into IP addresses.
  - **HTTP/HTTPS**: The protocol browsers use to talk to servers and request files.

---

### 🧱 What is HTML?
**HTML** (HyperText Markup Language) is the language used to build the **structure** of a webpage.

Think of it like building blocks: HTML creates the skeleton of a webpage, which you later style with CSS and bring to life with JavaScript.

---

### 📄 Basic Structure of an HTML Document
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first web page.</p>
  </body>
</html>
```

---

### 🔤 Common & Semantic HTML Tags

| Tag | Purpose |
|-----|---------|
| `<h1>` to `<h6>` | Headings (from most important to least) |
| `<p>` | Paragraph text |
| `<a href="">` | Links |
| `<img src="" alt="">` | Images |
| `<ul>`, `<ol>`, `<li>` | Lists |
| `<div>` | Generic container |
| `<span>` | Inline container |
| `<header>` | Semantic header section |
| `<nav>` | Navigation links container |
| `<main>` | Main content of the page |
| `<section>` | A thematic grouping of content |
| `<article>` | Independent, self-contained content |
| `<footer>` | Page or section footer |

Semantic tags improve accessibility, SEO, and code readability.

---

### ✍️ Frequently Used HTML Syntax Patterns
```html
<a href="https://example.com" target="_blank">Visit Site</a>
<img src="image.jpg" alt="Description of image">
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<section>
  <h2>My Services</h2>
  <p>Web design, consulting, and more.</p>
</section>
```

---

### 🧑‍🎨 Mini Project: "My Profile"
Create a personal profile page using HTML.

#### 🔧 Instructions:
1. Create a new HTML file (`profile.html`).
2. Include:
   - Your name as a heading
   - A short bio paragraph
   - A semantic layout using `<header>`, `<main>`, and `<footer>`
   - A list of hobbies
   - A profile image
   - A link to your favorite website

#### 💡 Sample Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Profile</title>
</head>
<body>
  <header>
    <h1>Hi, I'm Sam!</h1>
  </header>
  <main>
    <p>I love learning web development and building cool websites.</p>
    <h2>Hobbies</h2>
    <ul>
      <li>Reading</li>
      <li>Drawing</li>
      <li>Cycling</li>
    </ul>
    <img src="https://via.placeholder.com/150" alt="Profile photo">
    <p>Visit my favorite site: <a href="https://example.com">Example</a></p>
  </main>
  <footer>
    <p>&copy; 2025 Sam's Web Page</p>
  </footer>
</body>
</html>
```

---

### 🧠 Quick Tips:
- Use semantic tags instead of too many `<div>`s
- Always include `alt` text for images
- Indent child elements for readability

---

### 🤖 Using AI to Help
You can ask AI to:
- Explain what a tag does
- Create templates for different page types
- Debug your structure if the page looks broken

But remember: **understand the output** before copying it.

---

### 💪 Exercise: Build a "Portfolio Intro"
Create a basic HTML-only personal portfolio intro page.

#### Requirements:
- Use at least 5 semantic HTML tags
- Add a short intro about yourself
- Include links to at least 2 websites
- Include an image

#### ✅ Solution (Sample)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Portfolio</title>
</head>
<body>
  <header>
    <h1>Jane Doe</h1>
    <p>Front-End Developer</p>
  </header>
  <main>
    <section>
      <h2>About Me</h2>
      <p>I enjoy creating responsive and beautiful websites.</p>
    </section>
    <section>
      <h2>Links</h2>
      <ul>
        <li><a href="https://github.com">GitHub</a></li>
        <li><a href="https://linkedin.com">LinkedIn</a></li>
      </ul>
      <img src="https://via.placeholder.com/200" alt="Portfolio photo">
    </section>
  </main>
  <footer>
    <p>&copy; 2025 Jane Doe</p>
  </footer>
</body>
</html>
```

---

### 🔚 End of Session 1
You're now equipped with a solid understanding of how the web works and how to build your first HTML pages.

➡️ Next up: CSS — giving your pages style and personality!

