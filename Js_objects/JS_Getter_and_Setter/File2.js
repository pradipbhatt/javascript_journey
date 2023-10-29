//javascript setter file by pradip
//in js setter methods are used to set the values of the object properties

const student = {
    firstName: 'pradip',

    //accessor properties
    set changeName(newName){
        this.firstName = newName;
    }
};

console.log(student.firstName);

//now let's set the value of the firstName property using setter

student.changeName = "parry";

console.log(student.firstName);


//in this program firstly we have created an object named student with a property named firstName and assigned a value to it.
//then we have created a setter method named 'changeName' which takes a parameter named newName.
//inside the setter method we have set the value of the firstName property to the newName parameter.