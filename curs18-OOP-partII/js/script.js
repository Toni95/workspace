// Define parent class
function Animal(options) {
    // this is used to be able to call new Animal with
    // no parameter object
    options = options || {};
    this.legs = options.legs || 0;
    this.color="";
    this.fur="";
    this.height=0;
    this.weight=0;
}

Animal.prototype.eat = function() {
    console.log("nom nom, animal is eating");
}

Animal.prototype.walk = function() {
    console.log("Animal is walking");
}

// Define child class
function Dog(options) {
    // the next line is used to inherit all the properties
    // from parent class
    Animal.call(this, {legs: 3});
    this.humanFriendly = true;
    this.breed = "";
    //composition relationship (has a)
    this.owner = new Owner({
        name: options.ownerName || "",
        age: options.ownerAge || 0
    });
}

//set static attribute
Dog.HAS_PAWS = true;
Dog.SIT = function() {
    console.log("Sitting down from a static method");
}

// the next line is used to inherit all the Class methods
// from parent class
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
    console.log("wof wof");
}

Dog.prototype.playFetch = function() {
    console.log("This is so fun!!");
}

// method overwrite - we're changing completely
// the method behaviour that is defined in parent class
Dog.prototype.eat = function(){
    console.log("Eating like e dog!");
}
    // method overwrite - we're keeping the behaviour of parent class
    // but we want to add extra code for child class
Dog.prototype.walk = function() {
    // the next line will preserve the behaviour defined
    // in the parent class
    Animal.prototype.walk();
    console.log("walking nice in a leash");
}

//define Owner class for composition example
function Owner(data) {
    this.name = data.name || "";
    this.age = data.age;
}

Owner.prototype.walkDog = function() {
    console.log("walking my dog");
}

var animal = new Animal();
console.log(animal);
animal.walk();

var dog = new Dog({
    ownerName:"Kim",
    ownerAge:55
});
console.log(dog);
dog.eat();
dog.walk();

var owner = new Owner({
    name: "John",
    age: 25
});
// owner.name = "John";
// owner.age = 25;
console.log(owner);
console.log(dog.owner);

var dog2 = new Dog({
    ownerName:"Kevin",
    ownerAge: 44
});

// dog2.owner.name = "Kevin";
console.log(dog2.owner);

//test static attributes
// static attributes don't need an instance of Dog class
console.log(Dog.HAS_PAWS);
console.log(dog2.breed);

//test static methods
Dog.SIT();
dog2.bark();

var arr = ['apple','bannana','orange'];
function fruits(fruit1,fruit2,frui3){
    
}
fruits.apply(this,arr);
fruits(arr);