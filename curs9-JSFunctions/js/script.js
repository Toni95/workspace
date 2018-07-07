function printMessage() {
    console.log("My first function");
}

printMessage();

function printMessage2() {
    console.log("My second function");
    return "My second function";
    // return exit the function, console will not execute 
   // console.log("My second function after retun");
    // exit function with undefined 
   // return;
}

printMessage2();

function sum(a, b) {
   return a + b; 
}

function printUser(fname, lname, age, gender) {
   console.log( " Fname = " + fname + 
                " Lname = " + lname + 
                " Age = " + age +
                " Gender = " + gender);
}

printUser("Toni" , "Patraska", 20 , "M");

var user = {
    fname: "Toni",
    lname: "Patraska",
    age: 20,
    gender: "F"
}

function printUser2(obj) {
    console.log( " Fname = " + obj.fname + 
                " Lname = " + obj.lname + 
                " Age = " + obj.age +
                " Gender = " + obj.gender);
}

printUser2(user);

function printOnClick() {
    console.log("Print on click buton");
}

function sum(a = 2, b = 2) {
    console.log("Sum = ", a + b);
}

sum();
sum(5);
sum(3,4);

// Expression function 
var expFunction = function() {
    console.log("Expression function")
}
// Call expression function
expFunction();

// Have function as parameter
function executeAnotherFunction(f) { 
    f();
}

executeAnotherFunction(expFunction);

// 
(function(){
    console.log("Self invoke function!");
})();

hoistingFunction();


function hoistingFunction() {
    console.log("My hoisting function");
}


// Scope 

// Global scope
var a = 2;

// function displayVars() {
//   // local scope
//     var b = 3;
//     // Global scope
//     c = 4;
//     console.log("Inner a =", a);
//     console.log("Inner b =", b);
//     console.log("Inner c =", c);
    
// } 
// displayVars();

// console.log("Outer a =", a);
// // console.log("Outer b =", b);
// console.log("Outer c =", c);

// // Global
// var x = 1; 
// function firstF() {
//     var y = 2;
    
    
//     secondF();
    
//     function secondF() {
//          var z = 3;
//         console.log('Second X = ', x); 
//         console.log('Second Y = ', y); 
//         console.log('Second Z = ', z); 
        
//     thirdF();
    
//     function thirdF() {
//         console.log('Third X = ', x); 
//         console.log('Third Y = ', y); 
//         console.log('Third Z = ', z); 
//         }
//     }
//     console.log('First X = ', x);
//     console.log('First Y = ', y);
//     console.log('First Z = ', z);
    
// }

// firstF();

function counter () {
    var count = 0;
    count++;
    console.log(count);
}

// closure

var counter2 = (function() {
    var count = 0; // private
    return function() { // public
        count++;
        console.log(count);
    }
})();
