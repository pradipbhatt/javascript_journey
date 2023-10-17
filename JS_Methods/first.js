// JS Methods and THIS keyword
//Object containing method

const person = {
    name: 'pradip',
    greet :function(){
        console.log("Hello namaste \n Please enter contribute this repo if you're open source lover");
    },
};

person.greet();
// In the above example, a person object has two keys (name and greet), which have a string value and a function value, respectively.

// Hence basically, the JavaScript method is an object property that has a function value.

// Accessing Object Methods
// You can access an object method using a dot notation. The syntax is:

// objectName.methodKey()