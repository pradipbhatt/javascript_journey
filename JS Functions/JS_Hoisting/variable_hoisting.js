// program to display value
// a = 5;
// console.log(a);
// var a; // 5

// However in JavaScript, initializations are not hoisted. For example,

// program to display value
// console.log(a);
// var a = 5;  //undefined

// In the above example, the variable a is hoisted but not its value. So, it displays undefined.
// program to display value
var a = 4;

function greet() {
    b = 'hello';
    console.log(b); // hello
    var b;
}

greet(); // hello
// console.log(b);  

// In the above example, the variable b is hoisted inside the function greet(). So, it displays hello.
//previous output in the console is cleared using console.clear() method
