/* global localStorage */
window.onload = onHtmlLoaded;

function onHtmlLoaded() {
    
    const cookies = getCookiesAsObject();
    
    const preferredLanguage = storageAvailable("localStorage") ? 
    localStorage.getItem("language") : cookies.language;
        
    console.log(preferredLanguage);
    
    const radios = document.getElementsByName("language");
    radios.forEach(function(radio) {
        // if the value of the radio equals the preferred language
        if (radio.value === preferredLanguage) {
            // select a radio button programmatically
            radio.checked = "checked";
        }
        
        // set the selected value of the radio button in local storage or cookies
        radio.addEventListener("click", function() {
            if (storageAvailable("localStorage")) {
                localStorage.setItem("language", this.value);
            }
            else {
                 document.cookie = "language=" + this.value;
            }
        });
    });
}

// function taken from mdn
// verifies if "type" of storage is available
// type can be localStorage or sessionStorage
function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

function getCookiesAsObject() {
    const cookiesString = document.cookie;
    
    const cookiesArray = cookiesString.split("; ");
    // array of "language=en-US" ...
    console.log(cookiesArray); 
    
    const cookies = {};
    cookiesArray.forEach(function(c) {
        // c => "language=en-US" <=> "key=value"
        const cookie = c.split("=");
        console.log(cookie);
        const key = cookie[0]; // language
        const value = cookie[1]; // en-US
        
        // dynamically add properties to objects
        // cookies.key = value <=> cookies["key"] = value;
        cookies[key] = value; // key is a variable here!
    });
    
    return cookies;
}