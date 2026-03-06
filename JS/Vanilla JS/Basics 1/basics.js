/********************  OBJECTS **********************************/

const person = {
    name: "John Doe",
    age: 30,
    hobbies: ["reading", "gaming", "hiking"],
    address: {
        street: '50 main st',
        city: 'New York',
        state: 'MA'
    }
};


// const {name, address: {city}} = person; // Destructuring assignment

person.email = "eyobor.elvis@gmail.com"

console.log(person.email); // John Doe

/********************  ARRAYS **********************************/

// ...existing code...

const dummyArray = [
    {
        id: 1,
        name: "Alice",
        isCompleted: true,
        age: 25,
        hobbies: ["painting", "cycling"],
        address: {
            street: "123 Elm St",
            city: "Los Angeles",
            state: "CA"
        }
    },
    {
        id: 2,
        name: "Bob",
        isCompleted: true,
        age: 28,
        hobbies: ["running", "coding"],
        address: {
            street: "456 Oak St",
            city: "San Francisco",
            state: "CA"
        }
    },
    {
        id: 3,
        name: "Charlie",
        isCompleted: false,
        age: 32,
        hobbies: ["swimming", "chess"],
        address: {
            street: "789 Pine St",
            city: "Seattle",
            state: "WA"
        }
    }
];

// const dummyArrayJSON =JSON.stringify(dummyArray, null, 2); // Convert to JSON string
// console.log(dummyArrayJSON); // Log the JSON string
// ...existing code...  


/********************  FOR LOOP **********************************/


// for (let i = 0; i < dummyArray.length; i++) {
    //     const person = dummyArray[i];
    //     console.log(`Name: ${person.name}, Age: ${person.age}`);
    //     console.log(`Hobbies: ${person.hobbies.join(", ")}`);
    //     console.log(`Address: ${person.address.street}, ${person.address.city}, ${person.address.state}`);
    //     console.log("------------------------------");
    // }
    
    /********************  FOR OF LOOP **********************************/
    
    // for(let person of dummyArray) {
    //     console.log(person.name); // Accessing properties of each object in the array
    // }
    
    /********************  HIGH ORDER ARRAY METHODS **********************************/
    
    // FORE EACH LOOP
    // dummyArray.forEach((person) => {
        //     console.log(person.name); // Accessing properties of each object in the array
        // })
        
        //MAP LOOP = RETURNS A NEW ARRAY
        // const personArray = dummyArray.map((person) => {
            //     return person.name // Accessing properties of each object in the array
            // });
            
            // //FILTER LOOP = RETURNS A NEW ARRAY
            // const personArray = dummyArray.filter((person) => {
                //     return person.isCompleted === true; // Accessing properties of each object in the array
                // }).map((person) => {
                    //     return person.name // Accessing properties of each object in the array
                    // });
                    
                    
                    // console.log(personArray)
                    
                    
                    
                    
/********************  CONDITIONALS **********************************/

// const age = 20;

// if(age === 25) {
//     console.log("x is 18");
// } else if(age > 25) {
//     console.log("x is greater than 25");
// } else {
//     console.log("x is less than 25");
// }