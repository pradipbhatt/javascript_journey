//JS ma Prototype, properties rw methods haru lai access garna ko lagi use hunxa.

//Objects haru le properties rw methods inherit garcha prototype bata.
//prototype is a property of a function.
//constructor function

function classroom(){
    this.firstperson = "Achhyut",
    this.roll_nbr = 1
};

//objects create garau yaha person1 rw person2 naam ka 2 objects create vaye ;😉

const person1 = new classroom();
const person2 = new classroom();

//AAba constructor function ma property add garnu paryo ;

classroom.prototype.age= 22;
classroom.prototype.gender="male";

//lets see the prototype value of the classrrom
// console.log(classroom);
console.log(classroom.prototype);


//prototype bata property inherit garnu paryo;
console.log(person1.age);
console.log(person2.age);