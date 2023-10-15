// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

// using test before declaring
console.log(typeof(test));   // undefined
var test;

/*Note: In hoisting, though it seems that the declaration has moved up in the program, the actual thing that happens is that the function and variable declarations are added to memory during the compile phase.*/

// Variable Hoisting
// In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

// program to display value
a = 5;
console.log(a);
var a; // 5


//  in JavaScript, initializations are not hoisted. For example,
// program to display value
console.log(a);
var a = 6; //undefined

// new program
// program to display value
var a = 4;

function greet() {
    b = 'hello';
    console.log(b); // hello
    var b;
}

greet(); // hello
console.log(b);