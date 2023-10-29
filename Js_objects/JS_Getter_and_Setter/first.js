//In js there're two kinds of object properties they are Data and  Accessors  Peoperties.

// here's the example showing the difference between the two.

// Data properties contain a single location for a data value.

// Accessor properties contain a getter function to return a value and a setter function to set a value.

// The getter function is called without a parameter and returns the value to use in the property access expression.

// The setter function is called with the assigned value as its only parameter.

// The setter function must assign the value to the property.

// The following example shows how to define a getter and setter for a property.

const student1 = {
    //data property
    firstName: 'pradip',
};

// Accessor Property
// we use 2 keywords "get" for define a getter method to get the property value and "set" for define a setter method to set the property value.

// Javascript Setter Method
const student ={
    // data property
    firstName: 'pradip',
    roll_nbr:33,

    //Accessor property
    get getName(){
        return this.firstName;
        return this.roll_nbr;
    }
};

//Accessing the getter method
console.logMstudent(student.getName); 
console.log(student.roll_nbr);