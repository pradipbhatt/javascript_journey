//getters are used to access(get) properties

const person=
{
    name: "sapana",

    get getname(){
        return this.name;
    }
}
console.log(person.getname);
//console.log(person.getname()) //error
