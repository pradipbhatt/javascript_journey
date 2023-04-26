const x = 'pradip';
const y = 10 ;
const result = ( x + y );
console.log(result)
console.log(typeof(result));

// when we add string to number then resulting value is also string in form of numeric data



const result1=( '5' -'2');

const result2=( '5' -2);

const result3=( '5' * '2');

const result4=( '5' * 2);

const result5=( '5' / '2');

const result6=( '5' / 2);

const result7 =( '5' - 'pradip');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);

console.log(typeof(result1));
console.log(typeof(result2));
console.log(typeof(result3));
console.log(typeof(result4));
console.log(typeof(result5));
console.log(typeof(result6));
console.log(result7);  //gives NAN not a number output

// But when we do - * / to numeric and string data output is numeric


// In js True = 1 and false = 0;
let a='5'+true;
console.log(a);  //gives output as concatanate of number and boolenan 

let b='5' - true;
console.log(b); //gives output 4 because while we're substracting 1 to 5 our outcome will be 4


let c='5' - false;
console.log(c);   //gives output as 5 because while adding 0 to 5 nothing changes