Here's a **complete tutorial + mini project** on **Destructuring in JavaScript** (ES6+).

### 1. What is Destructuring?

Destructuring is a convenient way to **extract** values from arrays or properties from objects into **individual variables** in a clean, readable syntax.

It was introduced in **ES6 (2015)** and is one of the most loved features in modern JavaScript.

---

### 2. Array Destructuring

#### Basic Syntax

```js
const numbers = [10, 20, 30, 40, 50];

// Traditional way
const a = numbers[0];
const b = numbers[1];

// Destructuring way
const [x, y] = numbers;

console.log(x); // 10
console.log(y); // 20
```

#### Skipping Elements

```js
const [first, , third, , fifth] = numbers;
console.log(first, third, fifth); // 10 30 50
```

#### Rest Operator (`...`)

```js
const [first, second, ...rest] = numbers;
console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]
```

#### Default Values

```js
const [a, b, c = 100] = [1, 2];
console.log(c); // 100 (default used)
```

#### Swapping Variables (Super useful!)

```js
let p = 5;
let q = 10;

[p, q] = [q, p];

console.log(p, q); // 10 5
```

---

### 3. Object Destructuring

#### Basic Syntax

```js
const user = {
  name: "Devtonic",
  age: 25,
  city: "Lagos",
  country: "Nigeria",
};

// Traditional
const name = user.name;
const age = user.age;

// Destructuring
const { name, age } = user;

console.log(name, age); // Devtonic 25
```

#### Renaming Variables

```js
const { name: fullName, city: location } = user;
console.log(fullName); // Devtonic
console.log(location); // Lagos
```

#### Default Values

```js
const { name, age, gender = "Male" } = user;
console.log(gender); // Male
```

#### Rest Operator in Objects

```js
const { name, age, ...otherInfo } = user;
console.log(otherInfo);
// { city: "Lagos", country: "Nigeria" }
```

#### Nested Object Destructuring

```js
const person = {
  name: "Devtonic",
  address: {
    city: "Lagos",
    country: "Nigeria",
    zip: "100001",
  },
};

const {
  name,
  address: { city, country },
} = person;

console.log(name, city, country); // Devtonic Lagos Nigeria
```

---

### 4. Function Parameters Destructuring

This is extremely powerful!

```js
// Without destructuring
function printUser(user) {
  console.log(user.name, user.age);
}

// With destructuring
function printUser({ name, age, city = "Unknown" }) {
  console.log(`${name} is ${age} years old and lives in ${city}`);
}

printUser(user);
// Devtonic is 25 years old and lives in Lagos
```

#### With Array Parameters

```js
function calculate([x, y]) {
  return x * y;
}

console.log(calculate([5, 3])); // 15
```

---

### 5. Mini Project: **User Profile Card Generator**

Let's build a small practical project using destructuring.

#### Project Goal:

Create a function that takes a user object and returns a nicely formatted profile summary.

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Destructuring Mini Project - User Profiles</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            min-height: 100vh;
            padding: 40px 20px;
            color: #333;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
        }

        h1 {
            text-align: center;
            color: white;
            margin-bottom: 40px;
            font-size: 2.8rem;
            text-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .profiles {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
        }

        .profile-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(0,0,0,0.15);
            transition: all 0.4s ease;
        }

        .profile-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 25px 50px rgba(0,0,0,0.2);
        }

        .profile-header {
            height: 140px;
            background: linear-gradient(135deg, #f093fb, #f5576c);
            position: relative;
        }

        .avatar {
            width: 110px;
            height: 110px;
            border-radius: 50%;
            border: 6px solid white;
            position: absolute;
            bottom: -55px;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            object-fit: cover;
        }

        .profile-body {
            padding: 70px 25px 30px;
            text-align: center;
        }

        .name {
            font-size: 1.6rem;
            font-weight: 700;
            margin-bottom: 5px;
            color: #2c3e50;
        }

        .username {
            color: #7f8c8d;
            font-size: 1.05rem;
            margin-bottom: 15px;
        }

        .info {
            display: flex;
            justify-content: center;
            gap: 25px;
            margin: 20px 0;
            font-size: 0.95rem;
        }

        .info-item {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .status {
            display: inline-block;
            padding: 4px 14px;
            border-radius: 30px;
            font-size: 0.85rem;
            font-weight: 600;
            margin: 15px 0;
        }

        .active {
            background: #d4edda;
            color: #155724;
        }

        .inactive {
            background: #f8d7da;
            color: #721c24;
        }

        .skills {
            margin: 20px 0;
        }

        .skills-title {
            font-size: 0.9rem;
            color: #7f8c8d;
            margin-bottom: 8px;
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
        }

        .skill {
            background: #f1f3f5;
            padding: 5px 14px;
            border-radius: 20px;
            font-size: 0.82rem;
            color: #34495e;
        }

        .btn {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 12px 32px;
            border-radius: 50px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 10px;
        }

        .btn:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .footer {
            text-align: center;
            margin-top: 50px;
            color: rgba(255,255,255,0.8);
            font-size: 0.95rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Destructuring in Action</h1>

        <div class="profiles" id="profiles">
            <!-- Cards will be generated by JavaScript -->
        </div>

        <div class="footer">
            Mini Project: Object & Nested Destructuring + Function Parameters
        </div>
    </div>

    <script>
        // Sample user data
        const users = [
            {
                id: 1,
                fullName: "Devtonic",
                username: "devtonic_ng",
                age: 25,
                location: { city: "Lagos", country: "Nigeria" },
                skills: ["JavaScript", "React", "Node.js", "TypeScript"],
                isActive: true,
                avatar: "https://i.pravatar.cc/150?img=68"
            },
            {
                id: 2,
                fullName: "Aisha Bello",
                username: "aishab_codes",
                age: 23,
                location: { city: "Abuja", country: "Nigeria" },
                skills: ["UI/UX", "Figma", "Webflow", "Tailwind"],
                isActive: false,
                avatar: "https://i.pravatar.cc/150?img=47"
            },
            {
                id: 3,
                fullName: "Emmanuel Okafor",
                username: "emma_dev",
                age: 28,
                location: { city: "Port Harcourt", country: "Nigeria" },
                skills: ["Python", "Django", "PostgreSQL"],
                isActive: true,
                avatar: "https://i.pravatar.cc/150?img=12"
            }
        ];

        // Function that uses heavy destructuring
        function generateProfileCard({
            fullName,
            username,
            age,
            location: { city, country },
            skills,
            isActive,
            avatar
        }) {
            const statusClass = isActive ? "active" : "inactive";
            const statusText = isActive ? "🟢 Active" : "🔴 Inactive";
            const skillHTML = skills.length
                ? skills.map(skill => `<span class="skill">${skill}</span>`).join('')
                : '<span class="skill">No skills listed</span>';

            return `
                <div class="profile-card">
                    <div class="profile-header">
                        <img src="${avatar}" alt="${fullName}" class="avatar">
                    </div>
                    <div class="profile-body">
                        <div class="name">${fullName}</div>
                        <div class="username">@${username}</div>

                        <div class="info">
                            <div class="info-item">
                                <strong>Age:</strong> ${age}
                            </div>
                            <div class="info-item">
                                <strong>Location:</strong> ${city}
                            </div>
                        </div>

                        <div class="status ${statusClass}">${statusText}</div>

                        <div class="skills">
                            <div class="skills-title">SKILLS</div>
                            <div class="skill-tags">
                                ${skillHTML}
                            </div>
                        </div>

                        <button class="btn" onclick="alert('Following @${username} in real app! 🚀')">
                            Follow
                        </button>
                    </div>
                </div>
            `;
        }

        // Render all cards
        function renderProfiles() {
            const container = document.getElementById('profiles');
            container.innerHTML = users.map(user => generateProfileCard(user)).join('');
        }

        // Initialize
        renderProfiles();
    </script>
</body>
</html>
```

**Output:**

```
Profile Card
============
Name     : Devtonic
Username : @devtonic_ng
Age      : 25
Location : Lagos, Nigeria
Status   : 🟢 Active
Skills   : JavaScript, React, Node.js
```

---

### Bonus Tips

1. **Destructuring in React** (very common):

```jsx
const { data, loading, error } = useFetch(url);
const { name, email } = user;
```

2. **Combining Array + Object Destructuring**:

```js
const [, { name, score }] = [{ id: 1 }, { name: "Devtonic", score: 95 }];
```

3. **For...of with Destructuring**:

```js
for (const { name, age } of users) {
  console.log(`${name} - ${age}`);
}
```
