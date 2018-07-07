var robot = {}; // empty object
console.log("ROBOT = ", robot);

var robot = {
    model: "TRX1000",
    color: "red",
    height: 1.2,
    walk: function() {
        console.log("Robot Walks");
    },
    attack: function() {
        var response = confirm("Do you want to attack?!");
        console.log("Attack response ", response);
        
        // if (response === true) {    //just if
        //  alert("Attack!!");
        // }        
        
         if (response === true) {  //if & else
            alert("Attack!!");
        } else {
            console.log("Do not attack!");
        }  
    }
    
}
console.log("ROBOT = ", robot);
console.log("ROBOT get model = ", robot.model); //get value from object 

robot.color = "blue"; // update value
robot.age = 1; //add new value

var color = "red";
if (color == "red") {
    
    
} else if (color == "blue") {  //else if 
    

} else {
    
}                              // else if

switch (color) {
    case 'red':
    case 'yellow':
        console.log("RED & YELLOW");
        break;
    case 'blue':
        console.log("BLUE");
        break;
        
    default:
        console.log("NOT a color");
}

var speed = prompt("viteza?");

var gear;
if (speed < 20) {
    gear = 1;
} else if (speed < 60) {
    gear = 2;
} else {
    gear = 3;
}

console.log('viteza= ' + gear);



// //for(var i = 1; i<=20; i++){
//   console.log( " Number = ", i);
// }//

// for(var i = 0; i<= 100; i++){
    
//     console.log(" Number = ", i);
// }

// function fibonacci(i){
//   var a = 1, b = 0, temp;

//   while (i>= 0){
//     a = a + b;
//   }

//   return b;
// }

var a = 0;
var b = 1;

for (var c = b; c <100; c = a+b) {
    console.log(c);
    a = b;
    b = c;
}