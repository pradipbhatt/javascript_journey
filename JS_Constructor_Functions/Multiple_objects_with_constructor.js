// Constructor Function
function Person(){
    this.name = 'ysho',
    this.age = 21,
    this.hobby ="To be a good programmer",

    this.greet= function(){
        console.log("Hey cat ! \n what your're doing this :(");
        console.log('The name of the person is ' +this.name );
    }
};

// Create Objects
const person1 = new Person();
const person2 = new Person();
const person3 = new Person();

// Acess properties
console.log(person1.name);
console.log(person2.age);
console.log(person3.hobby);