//script.js
function myFunction(){
	if ((changeBorderColor("input1")) &&
		(changeBorderColor("input2")) &&
		(changeBorderColor("input3"))) {
			radioSelection();
			printSuccessDiv();
			printInfoToConsole();
			clearTheForm();
		}
}

function changeBorderColor(inputId)
{
	var inputField = document.getElementById(inputId);
	if (inputField.value == ""){
		inputField.style.borderColor = "red";
		return false;
	}
	else
	{
		inputField.style.borderColor = "initial";
		return true;
	}
}

function radioSelection()
{
   
    var maleGender = document.getElementById('male').checked;
    var femaleGender = document.getElementById('female').checked;
    
    if(maleGender == false && femaleGender == false){
        alert('Please select a gender');
        return false;
    } else {
        return true;
    }
    
}

function printSuccessDiv(){
	var successDiv = document.getElementById("success-div");
	successDiv.style.visibility = "visible";
	successDiv.innerHTML += document.getElementById("input1").value;
}

function printInfoToConsole(){
	console.log(document.getElementById("input1").value);
	console.log(document.getElementById("input2").value);
	console.log(document.getElementById("input3").value);
	console.log(document.getElementsByName("gender").value);
}

function clearTheForm(){
	document.getElementById("input1").value = "";
	document.getElementById("input2").value = "";
	document.getElementById("input3").value = "";
}