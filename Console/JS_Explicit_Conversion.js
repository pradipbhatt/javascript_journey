// Explicit Cobersion is done by javascript itself

// WAP for convert String '321' INTO number explicitly

const a=Number('321');  //here 321 string is converted into numeric type and printed
console.log(a);
console.log(typeof(a));

const b=Number(true);  //here true  is converted into numeric type and printed
console.log(b);
console.log(typeof(b));


const d=Number(false);  //here false  is converted into numeric type and printed
console.log(d);
console.log(typeof(d));

// String explicitly
const pradip = String(123);
console.log(pradip);
console.log(typeof(pradip));


// Two string method for type conversion

const yoge = (123).toString();  //this way we also change the type of string to number
console.log(yoge);
console.log(typeof(yoge));

// Note: When a number is added to a string, JavaScript converts the number to a string before concatenation.
// Note: JavaScript considers 0 as false and all non-zero number as true. And, if true is converted to a number, the result is always 1.



// numeric string used with + gives string type
let result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"



// numeric string used with - , / , * results number type

let result0;

result = '4' - '2'; 
console.log(result0); // 2

result = '4' - 2;
console.log(result0); // 2

result = '4' * 2;
console.log(result0); // 8

result = '4' / 2;
console.log(result0); // 2