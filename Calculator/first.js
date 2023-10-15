//simple calculator in js
let a,b,sum,diffrence,product,division;
a=parseInt(prompt("Enter first Number"));
b=parseInt(prompt("Enter Second Number"));
sum=a+b;
diffrence=a-b;
product=a*b;
division=a/b;
document.getElementById("add1").innerHTML="Sum of two number is ="+sum;
document.getElementById("add2").innerHTML="diffrence of two number is ="+diffrence;
document.getElementById("add3").innerHTML="product of two number is ="+product;
document.getElementById("add4").innerHTML="division of two number is ="+division;


// console here . .  
console.log("Sum of two number is = "+sum);
console.log("Diffrence of two number is = "+diffrence);
console.log("Product  of two number is = "+product);
console.log("Divison of two number is = "+division);
