Here's a **complete tutorial + mini project** on **Classes in JavaScript** (ES6+), including full HTML + CSS.

### JavaScript Classes Tutorial

#### 1. What are Classes?

Classes are a cleaner, more organized way to create objects and implement object-oriented programming (OOP) in JavaScript.

They were introduced in ES6 and are **syntactic sugar** over JavaScript's prototype-based inheritance.

#### 2. Basic Class Syntax

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }

  // Getter
  get birthYear() {
    return new Date().getFullYear() - this.age;
  }
}

// Creating instances
const devtonic = new Person("Devtonic", 25);
devtonic.greet();
// Output: Hello, my name is Devtonic and I am 25 years old.
```

#### 3. Key Features of Classes

- **Constructor** – Runs when you create a new object (`new`)
- **Methods** – Functions inside the class
- **Getters & Setters**
- **Inheritance** (`extends` and `super()`)
- **Static Methods**

#### 4. Inheritance Example

```js
class Developer extends Person {
  constructor(name, age, programmingLanguage) {
    super(name, age); // Call parent constructor
    this.programmingLanguage = programmingLanguage;
  }

  code() {
    console.log(`${this.name} is coding in ${this.programmingLanguage}`);
  }

  // Override parent method
  greet() {
    console.log(
      `Hi! I'm ${this.name}, a ${this.programmingLanguage} developer.`,
    );
  }
}

const dev = new Developer("Devtonic", 25, "JavaScript");
dev.greet();
dev.code();
```

---

### Mini Project: **Employee Management System**

We'll build a clean, interactive web app using JavaScript Classes.

**Features:**

- Add employees (Manager or Developer)
- Display employee cards
- Use inheritance, getters, and methods
- Beautiful UI with HTML + CSS

#### Complete Code (Copy & Save as `classes-mini-project.html`)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Classes in JS - Employee Management</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #1e3c72, #2a5298);
        min-height: 100vh;
        padding: 40px 20px;
        color: #333;
      }
      .container {
        max-width: 1100px;
        margin: 0 auto;
      }
      h1 {
        text-align: center;
        color: white;
        margin-bottom: 30px;
        font-size: 2.8rem;
      }
      .form-container {
        background: white;
        padding: 25px;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        margin-bottom: 40px;
      }
      .form-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 15px;
      }
      input,
      select,
      button {
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 1rem;
      }
      button {
        background: #2a5298;
        color: white;
        border: none;
        cursor: pointer;
        font-weight: bold;
      }
      button:hover {
        background: #1e3c72;
      }
      .employees {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 25px;
      }
      .card {
        background: white;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        transition: all 0.3s;
      }
      .card:hover {
        transform: translateY(-8px);
      }
      .card-header {
        height: 120px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        padding: 20px;
        color: white;
        position: relative;
      }
      .role {
        position: absolute;
        top: 15px;
        right: 15px;
        background: rgba(255, 255, 255, 0.3);
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.85rem;
      }
      .card-body {
        padding: 25px;
      }
      .name {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 8px;
      }
      .info {
        margin: 15px 0;
        line-height: 1.8;
      }
      .badge {
        display: inline-block;
        padding: 4px 12px;
        background: #e3f2fd;
        color: #1976d2;
        border-radius: 20px;
        font-size: 0.85rem;
        margin-top: 10px;
      }
      .delete-btn {
        background: #e74c3c;
        color: white;
        padding: 8px 16px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 15px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Employee Management System</h1>

      <!-- Form -->
      <div class="form-container">
        <h2 style="margin-bottom: 15px;">Add New Employee</h2>
        <div class="form-grid">
          <input type="text" id="name" placeholder="Full Name" required />
          <input type="number" id="age" placeholder="Age" required />
          <select id="role">
            <option value="Developer">Developer</option>
            <option value="Manager">Manager</option>
          </select>
          <input
            type="text"
            id="specialty"
            placeholder="Specialty / Department"
          />
          <button onclick="addEmployee()">Add Employee</button>
        </div>
      </div>

      <!-- Employee Cards -->
      <div class="employees" id="employees"></div>
    </div>

    <script>
      // Base Class
      class Employee {
        constructor(name, age, role) {
          this.name = name;
          this.age = age;
          this.role = role;
          this.id = Date.now();
        }

        getInfo() {
          return `${this.name} (${this.age} years old)`;
        }

        // Static method
        static getCompany() {
          return "TechNova Solutions";
        }
      }

      // Derived Class - Developer
      class Developer extends Employee {
        constructor(name, age, specialty) {
          super(name, age, "Developer");
          this.specialty = specialty || "Full Stack";
          this.language = "JavaScript";
        }

        code() {
          return `${this.name} is writing clean ${this.language} code.`;
        }

        getInfo() {
          return `${super.getInfo()} - ${this.specialty} Developer`;
        }
      }

      // Derived Class - Manager
      class Manager extends Employee {
        constructor(name, age, department) {
          super(name, age, "Manager");
          this.department = department || "Engineering";
        }

        manageTeam() {
          return `${this.name} is managing the ${this.department} team.`;
        }

        getInfo() {
          return `${super.getInfo()} - ${this.department} Manager`;
        }
      }

      // Array to store employees
      let employees = [];

      // Function to add employee
      function addEmployee() {
        const name = document.getElementById("name").value.trim();
        const age = parseInt(document.getElementById("age").value);
        const role = document.getElementById("role").value;
        const specialty = document.getElementById("specialty").value.trim();

        if (!name || !age) {
          alert("Please fill name and age!");
          return;
        }

        let newEmployee;

        if (role === "Developer") {
          newEmployee = new Developer(name, age, specialty);
        } else {
          newEmployee = new Manager(name, age, specialty);
        }

        employees.push(newEmployee);
        renderEmployees();

        // Clear form
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("specialty").value = "";
      }

      // Render all employee cards
      function renderEmployees() {
        const container = document.getElementById("employees");
        container.innerHTML = employees
          .map((emp) => {
            const isDeveloper = emp instanceof Developer;

            return `
                    <div class="card">
                        <div class="card-header">
                            <div class="role">${emp.role}</div>
                            <h3 style="margin-top: 50px; font-size: 1.4rem;">${emp.name}</h3>
                        </div>
                        <div class="card-body">
                            <div class="info">
                                <strong>Age:</strong> ${emp.age} years<br>
                                <strong>Info:</strong> ${emp.getInfo()}<br>
                                ${
                                  isDeveloper
                                    ? `<strong>Specialty:</strong> ${emp.specialty}<br>`
                                    : `<strong>Department:</strong> ${emp.department}<br>`
                                }
                            </div>
                            <div class="badge">
                                ${Employee.getCompany()}
                            </div>
                            <button class="delete-btn" onclick="deleteEmployee(${emp.id})">
                                Remove
                            </button>
                        </div>
                    </div>
                `;
          })
          .join("");
      }

      // Delete employee
      function deleteEmployee(id) {
        employees = employees.filter((emp) => emp.id !== id);
        renderEmployees();
      }

      // Initial demo data
      window.onload = () => {
        employees = [
          new Developer("Devtonic", 25, "Frontend"),
          new Manager("Aisha Bello", 30, "Product"),
          new Developer("Emmanuel Okafor", 27, "Backend"),
        ];
        renderEmployees();
      };
    </script>
  </body>
</html>
```

### How to Use:

1. Save the code as `classes-mini-project.html`
2. Open it in your browser
3. Add new employees using the form
4. See inheritance and classes working live

**Concepts demonstrated:**

- Class declaration
- Constructor
- Inheritance (`extends` + `super()`)
- Method overriding
- `instanceof`
- Static methods
- Getters (via method overriding)
