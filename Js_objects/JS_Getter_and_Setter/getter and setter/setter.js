//setter method is used to change the value of object

const person={
    name:"sapana",
    set setname(name2){ //setter method must have one parameter
        this.name= name2;
    }
}
console.log(person.name);//sapana
person.setname= "candy";
console.log(person.name);//candy