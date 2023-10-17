// In JavaScript, when this keyword is used in a constructor function, this refers to the object when the object is created. 

// construtor function

// constructor function
function Person () {
    this.name = 'John',
}

// create object
const person1 = new Person();

// access properties
console.log(person1.name);  // John
