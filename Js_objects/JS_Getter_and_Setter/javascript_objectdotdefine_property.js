//in js we can also use object.defineProperty() method to add getter and setter for eg
//firstly we create the object named galaxy
const galaxy = {
    firstPlanet: 'Mercury',
};

//getting Property
Object.defineProperty(galaxy, 'getPlanet',
{
    get : function(){
        return this.firstPlanet;
    }
});

//setting Property
Object.defineProperty(galaxy, "setPlanet",
{
    set : function(value){
        this.firstPlanet = value;
    }
});

console.log(galaxy.firstPlanet);

//changing the value of the property
galaxy.setPlanet = "venus";


console.log(galaxy.firstPlanet);


// The syntax for using Object.defineProperty() is:

// Object.defineProperty(obj, prop, descriptor)