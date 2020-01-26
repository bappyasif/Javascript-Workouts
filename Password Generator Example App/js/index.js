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
    lower: getRandomLowerLetters,
    upper: getRandomUpperLetters,
    number: getRandomRealNumbers,
    symbol: getRandomSpecialSymbols
}

// Event Listener For Generate
generate.addEventListener('click', () => {
    //const length = lengthElement.value;
    const length = +lengthElement.value;
    const hasLower = lowercaseElement.checked;
    const hasUpper = uppercaseElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbol = symbolsElement.checked;

    //console.log(lowercaseElement.value);

    console.log(length, hasLower, hasUpper, hasNumber, hasSymbol);
    console.log(typeof length);

    resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

});

// Copy Password To Clipboad
clipboardement.addEventListener("click", () => {
    const text_area = document.createElement("textarea");
    const password_created = resultElement.innerText;

    if(!password_created) {
        return;
    }

    text_area.value = password_created;
    document.body.appendChild(text_area);
    document.execCommand("copy");
    text_area.remove();
    alert("Password Copied To Clipbpard");
});

// Gnerate Password Function Definition
function generatePassword(lower, upper, number, symbol, length) {
    // 1. Init Variable
    let generated_password = "";
    const typesCount = lower + upper + number + symbol;
    console.log(typesCount);
    // 2. Filter Out Unchecked Types
    // const typesArray = [{lower}, {upper}, {number}, {symol}];
    // console.log(typesArray);
    const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    console.log(typesArray);
    // 3. Lop Over Length Call Generator Function For Each Type
    if(typesCount === 0) {
        return "";
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            console.log("FuncName: "+funcName);
            generated_password += randomPassword[funcName]();
            console.log(generated_password);
        });
    }
    // 4. Add Final Password To The Password Variable And Return.
    console.log(generated_password.slice(0, length));
    const final_password = generated_password.slice(0, length);

    return final_password;
}

// Randome Password Generator Functions
function getRandomLowerLetters() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

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




function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}