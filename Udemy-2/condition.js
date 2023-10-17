// Comparison
// == equal
// != not equal
// > greater than
// >= greater than or equal to
// < less than
// <= less than or equal to
// === identical (equal and of same type)
// !== not identical
// result = condition ? expression : alternative;
// if (condition) {
// result = expression;
// } else {
// result = alternative;
// }
//Automatic type coercion
alert(true == 2 ); // false... true → 1 !== 2 ← 2
alert(false == 2 ); // false... false → 0 !== 2 ← 2
alert(true == 1 ); // true.... true → 1 === 1 ← 1
alert(false == 0 ); // true.... false → 0 === 0 ← 0
alert(true == "2"); // false... true → 1 !== 2 ← "2"
alert(false == "2"); // false... false → 0 !== 2 ← "2"
alert(true == "1"); // true.... true → 1 === 1 ← "1"
alert(false == "0"); // true.... false → 0 === 0 ← "0"
alert(false == "" ); // true.... false → 0 === 0 ← ""
alert(false == NaN); // false... false → 0 !== NaN
//Type checked comparison (no conversion of types and values)
alert(true === 1); // false... data types do not match