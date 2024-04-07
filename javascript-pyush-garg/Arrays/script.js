const Students = ["pradip","paras","Yogesh"];
console.log(Students);

// Array is the collection of similar data type in same variable it's benifit is use to store multiple values in single variable.

// Accesing the array of students
console.log(Students[0]);

// Changing the value of variables in the index of array

Students[2]="Santosh";
console.log(Students);  //Now the index of third element is changed.

// we cant change the value of array by using const keyword.
// we can change the index of the value of the variable by using the const keyword.
Students.push('Alexa');
console.log(Students); 
// Push method add the elements from the bottom of the array

// Now pop method use
Students.pop();

console.log(Students[1]);

Students.push('Dheeraj');
console.log(Students);

Students.push(18);

Students.push({
    name: 'Raj'
});

console.log(Students);

// Finding the index of paras by .indexof() method
console.log(Students.indexOf('paras'));

// Array of students having number 4
const Season = ["Ainter", "Wpring", "Summer", "Autumn"];
console.log(Season);
Season.pop();
console.log(Season);

// Reverse the order of values of array
Season.reverse();
console.log(Season);
// Sort the array in ascending order
Season.sort( );  // Sort the aray in the descinding order.
console.log(Season);
