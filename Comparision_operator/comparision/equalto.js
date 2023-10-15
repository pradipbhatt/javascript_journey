/*
==	Equal to: true if the operands are equal	5==5; //true
!=	Not equal to: true if the operands are not equal	5!=5; //false
===	Strict equal to: true if the operands are equal and of the same type	5==='5'; //false
!==	Strict not equal to: true if the operands are equal but of different type or not equal at all	5!=='5'; //true
>	Greater than: true if the left operand is greater than the right operand	3>2; //true
>=	Greater than or equal to: true if the left operand is greater than or equal to the right operand	3>=3; //true
<	Less than: true if the left operand is less than the right operand	3<2; //false
<=	Less than or equal to: true if the left operand is less than or equal to the right operand	2<=2; //true*/


// greater than operator

console.log(8>5);
// retuen true
console.log(3>7);
// retuens false


// using less then operator <

console.log(3<7);

console.log(3<2);


// using greater than equal to operator >=
console.log(5>=4);   //returns true when operator staisfies any one condition either greater than or equals to operator
console.log(5>=5);
console.log(3>=7);
// similar case in also <=operator
console.log(9<=7);
console.log(3<=7);

// using == opearator
console.log(5==5); //returns true
console.log(4==7); //returns false


console.log('5'<7);  //'5' is a srting and 7 is a number so it returns true

console.log(5!='5'); //returns false 

// strict equal to operator helps to equate numerical and string value 
console.log(5!=="5");
