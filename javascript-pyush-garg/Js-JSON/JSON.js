// JSON- Javascript object Notation
// JSON is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.

// JSON is built on two structures:
// A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.


let Pradip ={
    name: "pradip",
    age: 23,
    city: "Bangalore"
}

console.log(Pradip);

// Converting this Object into String using stringify 
let myString = JSON.stringify(Pradip);
console.log(myString);  //Now it's coverted to String

// Before conversion let's use some string functions here
//  Replace pradip with parry

myString = myString.replace('pradip', "paras");   //storing the value in variable
console.log(myString); //Now pradip is converted to Paras


// Converting this String into Object using parse

let myObj = JSON.parse(myString);
console.log(myObj);