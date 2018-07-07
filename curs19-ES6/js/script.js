// it will throw a Reference Error
// console.log(x);  
// The following evalutaion will print "undifined"
console.log(typeof x);
// variable hoisting
console.log(hoistedVar);
var hoistedVar = 'Something';

function testFn(){
    console.log(str);
    for (var i=1; i<10; i++) {
        var str = 'Something ' + i;
        console.log(str);
    }
}

//this is a self invoking function
(function (){
    //str variable is not visible oustide of the block scope
    // it was defined on because of let/const
    //console.log(str);
    for (var i=1; i<10; i++) {
        // stri variable will be hoisted on the first line of  the curent block scope (for/if/while etc)
        let str = 'Something ' + i;
        console.log(str);
    }
})();

// play with 'const'

const user = {
    name: 'John',
    age: 24
};

// const variables can not be reasigned
/*user = {
    name: 'Mary',
    age: 44
};*/

// you can overwrite object varibles even if they are declared with 'const'
user.name = 'Marry';
user.age = 44;
console.log(user);

testFn();

// Arrow Functions 

// with ES5 function definition "this" will refer to the object the function is being called on

// const fullName = function(firstName, lastName) {
//     return firstName + ' ' + lastName;
// };

// arrow function will ignore the object the function is being called on 
// and will 'this' will refer to the surrounding context

const fullName = () =>{
    console.log(this);
    return this.firstName + ' ' + this.lastName;
} 

const person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: fullName
};



console.log(person.getFullName());

