//create object using Constructor Function SYNTAX
/*
function FunctionName(){
    this.PropertyName = PropertyValue;
    this.PropertyName = PropertyValue;
}

//create object using Constructor Function
const objectName1 = new FunctionName();
const objectName2 = new FunctionName();
*/

// JAVASCRIPT PROTOTYPE Starts from here . . .
//Every function and object in JS has a prototype property. The prototype property is an object which is used to attach methods and properties to a function or an object.

function FunctionName(){
    this.PropertyName = "Pradip";
    this.PropertyName = 33;
};

const objectName1 = new FunctionName();

//check the prototype value of the objectName1
console.log(FunctionName.prototype);  

//In the above example, we are trying to access the prototype property of a FunctionName constructor function.

// Since the prototype property has no value at the moment, it shows an empty object { ... }.