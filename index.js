const userInput = document.getElementById('userInput');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp = 0;

function convert() {
    if (toFahrenheit.checked) {
        temp = Number(userInput.value);
        temp = temp * 9 / 5 + 32;
        result.innerText = temp.toFixed(1) + '°F';
    } 

    else if (toCelsius.checked) {
        temp = Number(userInput.value);
        temp = (temp - 32) * (5 / 9);
        result.innerText = temp.toFixed(1) + '°C';
    }

    else {
        result.innerText = 'Select a Unit';
    }
    
}