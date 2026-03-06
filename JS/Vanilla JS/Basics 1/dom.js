/*************** SINGLE ELEMENTS *************/
const ul = document.querySelector(".items");
const btn = document.querySelector(".btn");
const myform = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const filter = document.querySelector("#filter");



// // ul.remove(); // removes the ul element from the DOM
// // ul.lastElementChild.remove(); // removes the last child of the ul element
// ul.firstElementChild.textContent = "Hello"; // changes the text of the first child of the ul element
// ul.children[1].innerText = "Brad"; // changes the text of the second child of the ul element
// ul.lastElementChild.innerHTML = "<h1>Goodbye</h1>"; // changes the inner HTML of the last child of the ul element

// const btn = document.querySelector(".btn");
// btn.style.background = "red"; // changes the background color of the button to red


// /*************** SINGLE ELEMENTS *************/

// btn.addEventListener("click", (e) => {
//     e.preventDefault(); // Prevents the default action of the button (if any)
//     console.log("Button clicked"); // Logs a message to the console when the button is clicked
//     console.log(e.target); // Logs a message to the console when the button is clicked
//     document.querySelector("#my-form").style.background = "#ccc"; // Changes the background color of the form to light gray
//     // document.querySelector("body").classList.add("bg-dark"); // Adds a class "bg-dark" to the body element
//     // document.querySelector(".items").lastElementChild.innerHTML = "<h1>Hello</h1>"; // Changes the inner HTML of the last child of the ul element to "Hello"
// })


btn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents the default action of the button (if any)

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add("error"); // Adds a class "error" to the message element
        msg.innerHTML = "Please enter all fields"; // Displays a message if the input fields are empty

        setTimeout(() => msg.remove(), 3000); // Removes the message after 3 seconds
    } else {
        const li = document.createElement("li"); // Creates a new list item element
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`)); // Appends the name and email values to the list item
        userList.appendChild(li); // Appends the list item to the user list

        // Clear fields
        nameInput.value = ""; // Clears the name input field
        emailInput.value = ""; // Clears the email input field
    }
})