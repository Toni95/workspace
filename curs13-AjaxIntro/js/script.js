$(onHtmlLoaded);

function onHtmlLoaded() { 
 
        $.ajax({
           url:  'https://api.wunderground.com/api/cfbfc5f603141e07/conditions/q/RO/Cluj_Napoca.json',
           method: 'GET',
           success: function(response) { // response is just a variable name
               console.log(response);
               
               var temperatureElement = document.getElementById("temperature");
               temperatureElement.innerText = "The temperature in Cluj-Napoca is " + 
                    response.current_observation.temp_c
                    + " but is felt like " + response.current_observation.feelslike_c;
           }
        });
        
        // console.log(response);  // undefined
        
    };
    
    // will be displayed before 'here 1'
    console.log('here 2');
}