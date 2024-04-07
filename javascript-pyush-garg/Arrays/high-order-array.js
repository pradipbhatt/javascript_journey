// Array methods
// 1. push() - Add the element from the bottom of the array
const Marks = [1,2,3,4,5,6];
Marks.push(18);
console.log(Marks);
// 2. pop() - Remove the element from the bottom of the array
Marks.pop(); // Remove the element 18 from the bottom of the array
console.log(Marks);

// 3. .forEach() - It is the method of array which is used to iterate the array.
//  for ( let i=0; i<Marks.length; i++ ){
//     console.log(Marks[i]);
//  }

// 1
// 2
// 3
// 4
// 5
// 6

function Print(n){
    console.log(n);
}


Marks.forEach(Print); 

Marks.forEach(val); 