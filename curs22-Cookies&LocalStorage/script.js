window.onload = onHtmlLoaded;

function onHtmlLoaded() {
    // setting a cookie
    // document.cookie = "mycookie=myvalue";
    //document.cookie = "laguage=en-US";
    
    const cookies = getCookiesAsObjects();
    console.log(cookies);
    
    const radios = document.getElementsByName("language");
    radios.forEach(function(radio) {
        
        if (radio.value === cookies.language){
            // select a radio button prg
            radio.checked = "checked";
        }
        
        radio.addEventListener("click", function(){
            document.cookie = "language=" + this.value;
        });

    });
}

// mycookie=myvalue; laguage=en-US; c9.live.user.click-through=ok

// mycookie: myvalue,
//   laguage: en-US,
//   c9.live.user.click-through: ok

function getCookiesAsObjects() {
    const cookiesString = document.cookie;
    
    const cookiesArray = cookiesString.split("; ");
    console.log(cookiesArray);
    
    const cookies = {};
    cookiesArray.forEach(function(c){ // inlocuim forEach-u cu map & reduce
        // c => "language=en-US"
        const cookie = c.split("=");
        console.log(cookie);
        const key = cookie[0]; // language
        const value = cookie[1]; // en-US
        
        // dynamically add propr. to objects
        // cookies.key = value <=> cookies["key"] = value;
        cookies[key] = value; // key is a variable here!
    }); 
    
    return cookies;
}
