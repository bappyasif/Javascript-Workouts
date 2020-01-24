// DOM ELEMENTS
const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const clipboardement = document.getElementById('clipboard');

const randomPassword = {
    lower_case: getRandomLowerLetters,
    uppper_case: getRandomUpperLetters,
    real_numbers: getRandomRealNumbers,
    symbol_characters: getRandomSpecialSymbols
};

generateElement.addEventListener('click', () => {
        //const length = lengthElement.value;
        const length = +lengthElement.value;
        const hasLower = lowercaseElement.checked;
        const hasUpper = uppercaseElement.checked;
        const hasNumber = numbersElement.checked;
        const hasSymbols = symbolsElement.checked;

        console.log(length, hasLower, hasUpper, hasNumber, hasSymbols);
        console.log(typeof length);
});

// Generator Functions
function getRandomLowerLetters() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
 
// console.log(String.fromCharCode(97));
// console.log(Math.random());
// console.log(Math.random() * 26);
// console.log(Math.floor(Math.random() * 26));
// console.log(Math.floor(Math.random() * 26) + 97);
// console.log(Math.floor(Math.random() * 26) + 65);
// console.log(Math.floor(Math.random() * 10) + 48);
// console.log(Math.floor(Math.random() * 10) + 48);

console.log(getRandomLowerLetters());

function getRandomUpperLetters() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(getRandomUpperLetters());

function getRandomRealNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(getRandomRealNumbers());

function getRandomSpecialSymbols() {
    const symbols = "!@#$%^&*(){}[]=<>/,.\|";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSpecialSymbols());