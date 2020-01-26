const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLowerLetters,
	upper: getRandomUpperLetters,
	number: getRandomRealNumbers,
	symbol: getRandomSpecialSymbols
}

const randomPassword = {
    lower: getRandomLowerLetters,
    upper: getRandomUpperLetters,
    number: getRandomRealNumbers,
    symbol: getRandomSpecialSymbols
}

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

generate.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomPassword[funcName]();
		});
	}

	// for(let i = 0; i < length; i += typesCount) {
    //     typesArray.forEach(type => {
    //         const funcName = Object.keys(type)[0];
    //         console.log("FuncName: "+funcName);
    //         generated_password += randomPassword[funcName]();
    //         console.log(generated_password);
    //     });
    // }
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
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