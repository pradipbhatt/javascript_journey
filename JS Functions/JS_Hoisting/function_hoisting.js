// A function can be called before declaring it. For example,


// program to print the text
// greet();

// function greet() {
//     console.log('Hi, there.');
// }
// }However, when a function is used as an expression, an error occurs because only declarations are hoisted.

// program to display text
greet();

let greet = function() {
    console.log('Hi, there.');
}

// Note: Generally, hoisting is not performed in other programming languages like Python, C, C++, Java.

// Hoisting can cause undesirable outcomes in your program. And it is best to declare variables and functions first before using them and avoid hoisting.

// In the case of variables, it is better to use let than var.

