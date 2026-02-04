### Topic 6: Objects & JSON (Expanded & Deeper)

**Why Objects Matter – Real-World Context**

In real applications, data is rarely just a single number or a single string.  
Think about:

- A user profile (name, email, role, preferences, last login…)
- A product in an e-commerce site (title, price, category, images, stock, reviews…)
- An employee record (ID, full name, department, salary, join date, skills…)
- A blog post (title, content, author, tags, publish date, comments…)

All of these are **complex, structured pieces of data** — they have multiple properties that belong together.  
JavaScript **objects** are the natural way to group related data and behavior.

**Objects ≈ real-world things**  
An object is like a “thing” in your program that has:

- **Properties** (characteristics / data) → like adjectives
- **Methods** (actions / behavior) → like verbs

Example: A `car` isn’t just a name — it has color, speed, fuel level, and can `start()`, `stop()`, `honk()`.

This is why objects are everywhere in modern JavaScript: React components, API responses, configuration settings, game characters, UI state — almost everything serious uses objects.

**1. Creating & Understanding Objects (with more intuition)**

```javascript
// Most common & readable way: object literal
const student = {
  id: "STU-2025-001",
  fullName: "Aisha Ibrahim",
  age: 21,
  isActive: true,
  courses: ["JavaScript", "Power Apps", "SQL"],
  grades: {
    js: 88,
    powerApps: 95,
    sql: 82
  },
  introduce() {
    console.log(`Hi, I'm ${this.fullName}, ${this.age} years old.`);
  }
};

// Reading data
console.log(student.fullName);              // Aisha Ibrahim
console.log(student.grades.powerApps);      // 95

// Bracket notation (useful when property name is dynamic)
const prop = "isActive";
console.log(student[prop]);                 // true

// Adding new info later
student.graduationYear = 2026;
student.email = "aisha@company.com";

// Removing something
delete student.courses;
```

**Key takeaway**:  
Objects let you **bundle related data** so you don’t have 10 separate variables floating around (`name`, `age`, `email`, `role`…).  
Instead: one clean `user` object.

**2. Methods – Giving Objects Behavior**

Methods are functions that **belong to** an object.

```javascript
const timer = {
  seconds: 0,
  
  start() {
    console.log("Timer started!");
    // In real apps you'd use setInterval here
  },
  
  reset() {
    this.seconds = 0;
    console.log("Timer reset to 0");
  },
  
  getFormattedTime() {
    return `${this.seconds} seconds`;
  }
};

timer.start();              // Timer started!
timer.seconds = 45;
console.log(timer.getFormattedTime()); // 45 seconds
timer.reset();              // Timer reset to 0
```

**Why `this` is important**  
`this` means **“the object I’m currently inside of”**.  
It lets the object talk about **itself** without hard-coding its name.

**3. Creating Many Similar Objects – Factory Functions**

If you need 10 students or 50 products, you don’t want to write the object 50 times.

```javascript
function createEmployee(id, name, department, salary) {
  return {
    id,
    name,
    department,
    salary,
    getBonus() {
      return this.salary * 0.1; // 10% bonus
    },
    promote(newDept) {
      this.department = newDept;
      console.log(`${this.name} promoted to ${newDept}`);
    }
  };
}

const emp1 = createEmployee("E001", "Tunde Ade", "IT", 450000);
const emp2 = createEmployee("E002", "Fatima Yusuf", "HR", 380000);

console.log(emp1.getBonus());      // 45000
emp2.promote("Finance");
```

**4. Destructuring – Cleaner & Modern Way to Extract Data**

Very common when working with API responses or function parameters.

```javascript
const product = {
  id: 789,
  name: "Wireless Mouse",
  price: 8500,
  discount: 15,
  inStock: true
};

// Old long way
const name = product.name;
const price = product.price;

// Modern destructuring
const { name, price, discount = 0, inStock: available } = product;

console.log(name, price, discount, available);
// Wireless Mouse 8500 15 true
```

**5. JSON – The Universal Data Format**

Almost every API on the internet returns data as **JSON**.  
JavaScript objects ↔ JSON strings is a daily task.

```javascript
// Object → JSON (to send to server or save)
const order = {
  customer: "Chinedu Okeke",
  items: ["Laptop", "Mouse"],
  total: 485000
};

const json = JSON.stringify(order, null, 2); // pretty print with 2 spaces
console.log(json);
/*
{
  "customer": "Chinedu Okeke",
  "items": [
    "Laptop",
    "Mouse"
  ],
  "total": 485000
}
*/

// JSON → Object (when receiving from API)
const received = JSON.parse(json);
console.log(received.customer); // Chinedu Okeke
```

**Common real-world pattern**:  
Fetch data from API → `response.json()` → get JavaScript object → use it.

### Project 1: Contact Book (Enhanced with more features & context)

(Kept the same structure as before but added comments explaining decisions)

```html
<!-- Same HTML structure as previous version -->

<script>
  "use strict";

  // We use an array of objects — very common pattern in real apps
  let contacts = [];

  function renderContacts(filtered = contacts) {
    // Clear previous content
    const container = document.getElementById("contactsList");
    container.innerHTML = "";

    if (filtered.length === 0) {
      container.innerHTML = "<p>No matching contacts found.</p>";
      return;
    }

    // forEach is perfect here: we want to do something for each contact
    filtered.forEach((contact, index) => {
      const card = document.createElement("div");
      card.className = "contact-card";

      // Template literal + object properties
      card.innerHTML = `
        <div>
          <strong>${contact.name}</strong><br>
          <span>${contact.phone}</span>
          ${contact.email ? `<br><small>${contact.email}</small>` : ""}
        </div>
        <button onclick="deleteContact(${index})">Delete</button>
      `;

      container.appendChild(card);
    });
  }

  function addContact() {
    const name  = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !phone) return alert("Name & phone required!");

    // Create object literal — clean & expressive
    contacts.push({ name, phone, email });

    // Reset form (good UX)
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    renderContacts();
  }

  // Other functions (deleteContact, searchContacts) remain similar
</script>
```

### Project 2: Simple Library System (with extra context)

(Same base structure — added inline comments explaining why we made certain choices)

```html
<!-- Same HTML table-based UI -->

<script>
  "use strict";

  // Array of book objects — very realistic data structure
  let books = [];

  function renderBooks() {
    const tbody = document.getElementById("bookBody");
    tbody.innerHTML = "";

    books.forEach((book, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td class="${book.available ? 'available' : 'borrowed'}">
          ${book.available ? "Available" : "Borrowed"}
        </td>
        <td>
          ${book.available 
            ? `<button onclick="borrowBook(${index})">Borrow</button>`
            : `<button onclick="returnBook(${index})">Return</button>`
          }
        </td>
      `;
      tbody.appendChild(row);
    });
  }

  // Factory-like creation pattern
  function addBook() {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();

    if (!title || !author) return alert("Title & author required!");

    // Each book is an object with state (available)
    books.push({
      title,
      author,
      available: true
    });

    renderBooks();
  }
</script>
```

**Extra Challenges (more advanced thinking)**  
1. Save contacts/books to `localStorage` so they persist after refresh  
   → `localStorage.setItem("contacts", JSON.stringify(contacts))`  
   → Load on page load: `contacts = JSON.parse(localStorage.getItem("contacts")) || []`
2. Add an “Edit Contact” button that populates the form with existing data
3. Add a summary section: “Total books: 12 | Available: 8 | Borrowed: 4”
4. Add tags or categories to contacts/books and filter by them

**Next Topic Teaser**  
Topic 7: DOM Manipulation & Events  
Now that we can structure data beautifully with objects, we’ll learn how to **dynamically change the page** — update text, add/remove elements, change styles, and react to clicks, typing, form submissions, etc. This is where websites become **alive**.

Let me know if this level of explanation feels right, or if you want even more examples / analogies / real-world scenarios for any part.  
You’re building a very solid foundation — keep going! 🚀
