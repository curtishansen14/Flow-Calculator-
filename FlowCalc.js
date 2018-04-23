var LitersPerGallon = 3.78541;
var SecondsPerMinute = 60;

const gallons = 'gallons';
const liters = 'liters';
const minutes = 'minutes';
const seconds = 'seconds';

function validateInput(input){
    
    if (input > 10000 || input < 0){
        document.getElementById("error").value = "Invalid Entry"
    }
    else{
        document.getElementById('error').value = ''
    }
}


function convert(){
    let input = document.getElementById('input').value;
    let inputUnits = document.getElementById('inputUnits').value;
    let output = document.getElementById('output').value;
    let outputUnits = document.getElementById('outputUnits').value;
    let result = input;
    
    if(validateInput(input)){

        switch(inputUnits){
            case 'liters/minute':
                switch (outputUnits){
                    case 'gallons/minute':
                    result = litersPerMinuteToGallonsPerMinute(input);
                    break;
                    case 'liters/second':
                    result = litersPerMinuteToLitersPerSecond(input);
                    break;
                    case 'gallons/second':
                    result = litersPerMinuteToGallonsPerSecond(input);
                    break;
                    case 'liters/minute':
                    break;
    
                }
            case 'gallons/second':
                switch(outputUnits){
                    case 'gallons/second':
                    break;
                    case 'liters/second':
                    result = gallonsPerSecondToLitersPerSecond(input);
                    break;
                    case 'liters/minute':
                    result = gallonsPerSecondToLitersPerMinute(input);
                    break;
                    case 'gallons/minute':
                    result = gallonsPerSecondToGallonsPerMinute(input);
                    break;
                }
            case 'liters/minute':
                switch(outputUnits){
                    case'liters/minute':
                    break;
                    case'liters/second':
                    result = litersPerMinuteToGallonsPerSecond(input);
                    break;
                    case'gallons/minute':
                    result = litersPerMinuteToGallonsPerMinute(input);
                    break;
                    case'gallons/second':
                    result = litersPerMinuteToGallonsPerSecond(input);
                    break;
                }
    
            case "gallons/minute":
                switch (outputUnits){
                    case 'gallons/second':
                    result = gallonsPerMinuteToGallonsPerSecond(input);
                    break;
                    case 'liters/minute':
                    result = gallonsPerMinuteToLitersPerMinute(input);
                    break;
                    case 'liters/second':
                    result = gallonsPerSecondToLitersPerSecond(input);
                    case 'gallons/minute':
                    break;
                }
    }
    
    } else {result = ''}
    document.getElementById('output').value = result;
}

function gallonsPerMinuteToGallonsPerSecond(input){
    result = (input / SecondsPerMinute);
    return result;
}

function gallonsPerMinuteToLitersPerMinute(input){
    result = (input * LitersPerGallon);
    return result;
} 

function gallonsPerMinuteToLitersPerSecond(input){
    result = (input * LitersPerGallon * SecondsPerMinute);
    return result;
}

function gallonsPerSecondToGallonsPerMinute(input){
    result = (input / SecondsPerMinute );
    return result;
} 

function gallonsPerSecondToLitersPerSecond(input){
    result = (input * LitersPerGallon);
    return result;
}

function gallonsPerSecondToLitersPerMinute(input){
    result = (input * LitersPerGallon * SecondsPerMinute);
    return result;
}

function litersPerMinuteToGallonsPerMinute(input){
    result = (input / LitersPerGallon);
    return result;
}

function litersPerMinuteToLitersPerSecond(input){
    result = (input / SecondsPerMinute);
    return result;
}

function litersPerMinuteToGallonsPerSecond(input){
    result = ((input / LitersPerGallon) / SecondsPerMinute )
    return result;
} 
