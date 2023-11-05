//object in js

// const main={
//     name:'Sapana',
//     roll:39,
// };
// console.log(main.name); //accessing property name using dot
// console.log(main['roll']);//accessing using []


//nested objects
const main={
    name:'Sapana',
    roll:39,
    subs:{
        math:20,
        science:30,
    }
};
console.log(main.name); 
console.log(main['roll']);

console.log(main.subs.math); //accessing nested property 