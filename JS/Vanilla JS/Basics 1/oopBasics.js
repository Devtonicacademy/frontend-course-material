// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     Person.prototype.fullName = function() {
//         return this.firstName + " " + this.lastName;
//     };
// }


class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    // get firstName() {
    //     return this._firstName;
    // }
}


const person1 = new Person("John", "Doe", 30);

console.log(person1); // John