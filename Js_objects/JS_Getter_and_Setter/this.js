let person={
    name:"sapana",
    age:20,
    main: function(){
        console.log("the name is "+this.name);
        console.log(this.age);
    },
}
person.main();