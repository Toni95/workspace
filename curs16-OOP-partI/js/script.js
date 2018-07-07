// define JS Objects
var obj1 = {};

var obj2 = new Object();

console.log(obj1);
console.log(obj2);

var laptop = {
    color: "green",
    brand: "Dell",
    "hard.disk.size": "1TB",
    memory: "3GB",
    price: 1500,
    start: startLaptop,
    shutDown: function() {
        console.log('shutting down laptop ' + this.brand);
    }
}

//accessing object properties
var laptopPrice = laptop.price;
var laptopColor = laptop["color"];
var hardDiskSize = laptop["hard.disk.size"];

console.log(laptop);
console.log("Laptop price is : " + laptopPrice);
console.log("Laptop color is : " + laptopColor);

// define object methods functions
function startLaptop() {
    console.log("Starting laptop now...");
}

laptop.start();
laptop.shutDown();

// class definition

// constructor function
function User(data) {
    // this is used to avoid getting console error
    // can not call property name of undefined on the first
    // example where we're not sending an object when calling
    // new User()
    data = data || {};

    this.name = data.name;
    this.age = data.age;
    this.height = null;
    this.weight = null;
}

// define class methods
User.prototype.calculateBMI = function() {
    var heightInMeters = this.height/100;
    var bmi = this.weight / (heightInMeters * heightInMeters);
    console.log(this.name + " BMI is: " + bmi);
    return bmi;
}

// create object using User class -> instance of User class
var user1 = new User();
user1.name = "John Doe";
user1.age = 25;
user1.height = 178;
user1.weight = 88;
user1.calculateBMI();

var user2 = new User({
    name: "Anne",
    age: 44
});
user2.height = 167;
user2.weight = 60;
user2.calculateBMI();

console.log(user1);
console.log(user2);