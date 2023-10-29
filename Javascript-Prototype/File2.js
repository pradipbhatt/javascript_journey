// Add Methods to a constructor function using prototype

//hami new methods add garna sakxau constructor function ma prototype bata

//construcotr function
function fruits(){
    this.fruit1 ="apple",
    this.fruit2 = "mango"
};

//objects creation
const fruit1 = new fruits();
const fruit2 = new fruits();

//add methods to the constructor function using prototype
fruits.prototype.fruit3 =function(){
    console.log("banana");
}

fruit1.fruit3();
fruit2.fruit3();
console.log(fruit1);