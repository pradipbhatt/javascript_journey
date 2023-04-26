// non-numeric string used with - , / , * results to NaN

// let result;  //result variable is decleared here

// result = 'hello' - 'world';
// console.log(result); // NaN

// result = '4' - 'hello';
// console.log(result); // NaN


// null is 0 when used with number
// let result;

// result = 4 + null;
// console.log(result);  // 4

// result = 4 - null;
// console.log(result);  // 4


// Example 6: undefined used with number, boolean or null
// Arithmetic operation of undefined with number, boolean or null gives NaN

let result;

result = 4 + undefined;
console.log(result);  // NaN

result = 4 - undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN