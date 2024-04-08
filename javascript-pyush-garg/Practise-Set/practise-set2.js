// Use logical operator to find wheather the age of a person lies within between 10 and 20.

let age = 11;

if(age < 10 ){
    console.log("Age is less than 10");
}

else if(age > 20){
    console.log("Age is greater than 20");
}

else{
    console.log("Age is between 10 and 20");
}

// Demonstrate the use of switch case statements in js

// Making the calculator

let num1=10,num2=20;
let op = "+" || "-" || "*" || "/";

switch(op){
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default:
        console.log("Invalid operator");
}


// WAP in js to find wheather a number is divisible by either 2 or 3.
let num =9;
if (num % 2 == 0){
    console.log(num + " is divisible by 2");
}
else if(num%3 == 0){
    console.log(num + " is divisible by 3");
}
else{
    console.log(num + " is not divisible by 2 or 3");
}

// WAP to print "You can drive" or "You cannot Drive" based on the age.

let age1 =19;

if (age1 >18){
  console.log("You can drive");
}

else{
  console.log("You cannot drive");
}