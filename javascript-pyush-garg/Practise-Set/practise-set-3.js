for (let i=0; i<100; i++){
    // console.log("I love you",i,"P");
}

const Students ={
    name :"pradip",
    age:23,
    gender:"Male"
}

// For in loop in js

for (let key in Students){
    console.log(key,Students[key]);
}

// For of loop in js

// for (let key of Students){
//     console.log(key,Students[key]);
// }

// For in loop in js

// Syntax for for in loop
// for (let key in objectName){ //code to execute in js}

const Colleges={
    name : "FWU",
    address:"MNR"
}

for(let key in Colleges){
    console.log(key,Colleges[key]);
}


// Syntax of for of loop in js
// for(variable of literals){ //Code to execute}
// Write a code in js For Demonstratng the for of loop in js
let age = [10,20,30,40,50,60,70,80,90,100];
for(let pradip of age){
    console.log(pradip);
}

// WAP demonstarting the while loop
let j=0;
while(j<10)
{
console.log("I AM EXECUTED",j++);
}