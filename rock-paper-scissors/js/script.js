function play(){
    
    var choice = ["Rock" , "Paper" , "Scissors"];
    var comp = Math.floor((Math.random() *3));
    var user = Math.floor((Math.random() *3));
    
    console.log("Computer choice " + choice[comp]);
    console.log("User choice " + choice[user]);
    
if (choice[user] == choice[comp]){
		console.log("tie!");
	}
	else if (choice[user] == "Rock" && choice[comp] == "Scissors"){
		console.log("user wins");
	}
	else if (choice[user] == "Scissors" && choice[comp] == "Rock"){
		console.log("comp wins");
	}
	else if (choice[user] == "Paper" && choice[comp] == "Rock"){
		console.log("user wins");
	}
	else if (choice[user] == "Rock" && choice[comp] == "Paper"){
		console.log("comp wins");
	}
	else if (choice[user] == "Scissors" && choice[comp] == "Paper"){
		console.log("user wins");
	}
	else if (choice[user] == "Paper" && choice[comp] == "Scissors"){
		console.log("comp wins");
	}

}

play();