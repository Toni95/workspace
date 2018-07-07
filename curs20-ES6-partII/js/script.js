// define a class with ES6
class Animal {
    constructor(options){
    // this is used to be able to call new animal with
    // no parameter object
    options = options || {};
    this.leg = options.leg || 0;
    this.color = options.color || "";
    this.fur = options.fur || "";
    this.height = 0;
    this.weight = 0;
    }
    
    eat(){
        console.log("nom nom, animal is eating");
    }
     walk(){
        console.log("Animal is walking");
    }
    //define getter methods
    get biometricData() {
        return `This animal is: ${this.height} tall and weights: ${this.weight}`;
       // return "This animal is: " + this.height + "tall and weights: " +this.weight;
    }
    //define setter methods
    set biometricData(data) {
        this.height = data[0];
        this.weight = data[1];
    }
    //static methods
    static SIT() {
        console.log("Sitting down from a static method");
    }
}

const animal = new Animal({
    legs:4,
    color:'black',
    fur: 'long'
});

// invoke class methods 
animal.walk();
// use setter methods
animal.biometricData = [25, 50];

// use getter methods 
console.log(animal.biometricData);

console.log(animal);

// define child class
class Dog extends Animal {
    // constructor function is optional in child class ES6 only 
    constructor(options){
        super();
        // need to call super method before using 'this' in child class constructor
        this.humanFriendly = true;
        this.breed = "";
    }
    
    // method overwrite
    eat() {
        console.log("Eating like a dog");
    }
    
    // method overwrite - we're keeping the behaviour of parent class
    // but we want to add extra code for child class
    walk() {
        super.walk();
        console.log("Walk nice in a leash");
    }
}

const dogInstance = new Dog();

// we can use getter/setter methods from parent class
dogInstance.biometricData = [40, 60];
console.log(dogInstance.biometricData);

// we can invoke parent class methods
dogInstance.eat();


console.log(dogInstance);


var arr = ['apple', 'banana', 'orange'];
// spread operators ex. function
const listFruits = (fruit1, fruit2, fruit3) => {
    console.log(fruit1);
    return `List of fruits: ${fruit1}, ${fruit2}, ${fruit3}`;
};
//listFruits(arr);
// this is same with ...arr
//listFruits.apply(this, arr);
// ES6 Spread operator 
listFruits(...arr);

// rest parameters exemple function
const listVegetables = (...vegetables) => {
    let listing = "";
    for(let i=0; i<vegetables.length; i++) {
        listing += ' ' + vegetables[i];
    }
    return listing.trim();
};

console.log(listVegetables('tomato', 'potato', 'carrot'));

// async/await

const getServerData = async () => {
    try {
        // await key word will not execute the next line until the async code is executed 
        await countTo100();
        console.log("just finished counting to 100!")
    } catch(err) {
        alert('Opps! Something went wrong!');
    }
};

const countTo100 = () => {
    const p = new Promise((resolve, reject) => {
        this.count = 0;
        const intervalId = setInterval(()=>{
        this.count++;
        console.log(this.count)
        // success use cas
        if (this.count === 100) {
            clearInterval(intervalId);
            resolve();
        }
        // error case
        if (this.count > 100) {
            clearInterval(intervalId);
            reject();
            }
        }, 100);
    });
    return p;
}

getServerData();