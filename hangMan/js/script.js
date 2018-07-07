/*global isInitialized*/
let hangMan = function() {
    let temp = 0,
    tempIndex = 0,
    result = [],
    placeholder = '_'
    isInitialized = false;
    
    let init = function(){
        for (let i = 0; i < 19; i++){
            result.push(placeholder);
            isInitialized = true;
        }
    }
    
    let check = function(char){
        if (char > 'x' && char < 'z'){
            result[0] = char;
            result[result.length -1] = char;
            return;
        }
        if (char === 'o'){
            for (let i = 1; i<3; i++){
                result[5 *(i-1) + i * i - 1 + i % 2] = char;
            }
            return;
        }
        if (char > 'c' && char <= 'e') {
            if (char === 'e') {
             for (let i = 1; i<3; i++){
                let diff = getCharCode('i') - getCharCode(char);
                result[i * i * diff] = char;
            }
            return;
        }
        if (char === 'd') {
            for (let i = 3; i<16; i+= 12){
                result[i] = char;
            }
        }
        return;
    }   
    if (char === 'r') {
        addEverySecondLetter(char, 5, 8);
        return;
    }
    if (char === 'a') {
        addEverySecondLetter(char, 12, 15);
        return;
        }
        otherChar(char);
    }
    
    let getCharCode = function(char){
        return char.charCodeAt(0);
    }
    let addEverySecondLetter = function(char, initalValue, finalValue){
        for (let i = initalValue; i < finalValue; i +=2){
            result[i] = char
        }
    }
    let otherChar = function(char){
        switch(char){
            case 'u':
                result = [];
                break;
            case 'g':
                tempIndex = 6;
                break;
            case 'c':
                tempIndex = 13;
                break;
            case 'm':
                tempIndex = 17;
                break;
            case 'n':
                tempIndex = 2;
                break;
            case 'o':
                tempIndex = 8;
                break;
            case 'w':
                tempIndex = 9;
                break;
            case 't':
                tempIndex = 10;
                break;
            case 'h':
                tempIndex = 11;
                break;
            default:
                console.log('Wrong letter!')
        }
        if (tempIndex > 0) {
            result[tempIndex] = char;
            tempIndex = 0;
        }
    }
        let getResult = function(char){
            if(!isInitialized){
                init();
            }
            check(char);
            return result;
        };
        
        return {
            result: getResult
        }
}();