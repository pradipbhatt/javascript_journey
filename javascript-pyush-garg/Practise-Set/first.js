// Vaiable of type string and try to add number to it.
let name = "Pradip";
let number = name + 10;

console.log(number);
console.log(typeof(number));

// when we add string to the numer we got the final string


// Use typeof operator to find the datatype of the string in above question

// Create a const object in javascript can you change it to hold a number later?

const pradip = {
    name: "pradip",
    age: 23,
    city: "Bangalore"
}
pradip.name="Harry";
console.log(pradip);  //Value of the const object is changed we can able to change it's value but not the name of the const object.


// Try to add a new key to the constant object in problem 3 were you able to do it ?

pradip.email = "pradip10bhatt@gmail.com";

console.log(pradip);


// Write a js program to ccreate a word meaning dictionary of 5 words ?

const wordMeaning = {
    word1: "The first word",
    word2: "The second word",
    word3: "The third word",
    word4: "The fourth word",
    word5: "The fifth word"
}

console.log(wordMeaning.word3);