var firstName; // define variable name

firstName = 'Anca'; //assign value to 

var firstName = 'Antonio';
console.log(firstName);

console.log("My name is ", firstName);

console.log(typeof firstName);
var age = 25;
console.log('My age is ' , age);

var height = 1.6;
console.log("my height is ", height);

var isTrue = true;
var isFalse = false;

var isTrue = true;
    isFalse = false;
    
console.log('JS is awesome ', isTrue , " JS is not awesome " , isFalse);

var nullValue = null;
console.log("Null Value", nullValue, typeof nullValue);

var undefinedValue;
console.log("undefined value", undefinedValue, typeof undefinedValue);


var firstName = "Antonio",
    lastName  = "Patraska",
    fullName = firstName + " " + lastName;
    
console.log("My name is" , fullName);

var name = "Antonio";
name += " Patraska";

console.log("My name is", name);

//math op

console.log("Add", 2+2);
console.log("Multiply", 2*2);

//

console.log("true", 2==2);
console.log("true", 2!==2);
console.log("true", 2=='2');
console.log("false", 2==='2');
console.log("false", 2!=='2');

console.log(2===2 && 3===3 && 4===4);
console.log(2===2 || 3===4 || 4===4);
console.log(3===4 || 5===5 || 4===4);

// Arrays 

var names = []; // emply array
console.log("Names = ", names);

var names = ["Ana", "Ion"]; //aray with content
console.log("Names = ", names);

console.log("Name first = ", names[0]);

//update values

names[1] = "Mihai";
console.log("Names = ", names);

//add new values
names[2] = "Tina";
names.push("Ion");
names.push("Geo", "Anca", "Vera");

names.pop();
console.log("Names = ", names);
console.log("Names lenght = ", names.length);