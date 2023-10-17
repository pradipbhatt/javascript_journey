// To access a property of an object from within a method of the same object, we need to  use the this keyword

let person ={
    name: 'pradip',
    roll : 33,
    greet: function(){
        console.log("Hey cat ! \n what your're doing this :(");
        console.log('The name of the person is ' +this.name );
    }
};

person.greet();