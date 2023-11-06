//to add methods in objects

function Person(){
    this.name="sapana",
    this.age=20,
    this.address="mnr"
}

let person1= new Person();
let person2= new Person();

person1.marks=70; //new property/method added to person1's object
console.log(person1.name);