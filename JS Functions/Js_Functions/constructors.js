// function Person(){ //better to capitalize first letter of constructor function
//     this.name="sapana",
//     this.age=20,
//     this.greet = function(){
//         console.log("hello");
//     }
// }

// const person1= new Person(); //object created
// const person2= new Person();

// console.log(person1.name); //accessing properties
// console.log(person1.age); 


//constructor with parameters
function Person(pname, page, proll)
{
    this.name= pname,
    this.age=page,
    this.roll=proll,
    this.greet= function(){
        return("hello"+""+this.n);
    }
}
const person1 = new Person("Sapana", 20,39);

console.log(person1.name);
console.log(person1.age);
console.log(person1.roll);