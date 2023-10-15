// In JavaScript, a variable has two types of scope:

// Global Scope
// Local Scope

// here's the eg

let age=20;  //here age is global variable

function pradip()
{
    let subject="Em"//this is local variable subject
    console.log(age);
    console.log(subject);
}
console.log(age);
// console.log(subject);  //this'll give errror because subject is locval variable and we can't use that beyond that function
pradip();