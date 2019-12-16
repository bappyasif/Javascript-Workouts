/*
// Without Using Class Structure

const TypeWriter = function(txtElement, words, waitTime=3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.waitTime = parseInt(waitTime, 10);
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
    //console.log("Hello");

    //Cuurrent Index Of Word
    const currentIndex = this.wordIndex % this.words.length;
    //console.log(currentIndex);

    // Get Full Text Of Current Word
    const fullText = this.words[currentIndex];
    //console.log(fullText);

    // Check If Words Deleting
    if(this.isDeleting) {
        this.txt = fullText.substring(0, this.txt.length-1);
    } else {
        // Add Character
        this.txt = fullText.substring(0, this.txt.length+1);
    }

    // Insert txt INto Element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed Value
    let typeSpeed = 300;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    // If Word Is Complete
    if(!this.isDeleting && this.txt === fullText) {
        // Make Pause At End
        typeSpeed = this.waitTime;

        // Set Delete To True
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt==="") {
        this.isDeleting = false;
        // Move To Next Word
        this.wordIndex++;
        // Pasue Before Next Word Start Typing On Screen
        typeSpeed = 900;
    }

    setTimeout(() => this.type(), 800);
}


// Init ON DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
    const txtElement = document.querySelector(".text-type");
    console.log(txtElement);
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    console.log(words);
    const waitTime = txtElement.getAttribute("data-wait");

    // const txtElement = document.querySelector('.text-type');
    // const words = JSON.parse(txtElement.getAttribute('.data-words'));
    // const wait = txtElement.getAttribute('data-wait');
    // Init Typewriter
    new TypeWriter(txtElement, words, waitTime);
}

*/

// Using ES6 Class Structure
class TypeWriter {
    constructor(txtElement, words, waitTime=3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = "";
        this.wordIndex = 0;
        this.waitTime = parseInt(waitTime, 10);
        this.type();
        this.isDeleting = false;       
    }

    type() {
        //Cuurrent Index Of Word
    const currentIndex = this.wordIndex % this.words.length;
    //console.log(currentIndex);

    // Get Full Text Of Current Word
    const fullText = this.words[currentIndex];
    //console.log(fullText);

    // Check If Words Deleting
    if(this.isDeleting) {
        this.txt = fullText.substring(0, this.txt.length-1);
    } else {
        // Add Character
        this.txt = fullText.substring(0, this.txt.length+1);
    }

    // Insert txt INto Element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed Value
    let typeSpeed = 300;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    // If Word Is Complete
    if(!this.isDeleting && this.txt === fullText) {
        // Make Pause At End
        typeSpeed = this.waitTime;

        // Set Delete To True
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt==="") {
        this.isDeleting = false;
        // Move To Next Word
        this.wordIndex++;
        // Pasue Before Next Word Start Typing On Screen
        typeSpeed = 900;
    }

    setTimeout(() => this.type(), 800);
    }
}

// Init ON DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
    const txtElement = document.querySelector(".text-type");
    console.log(txtElement);

    const words = JSON.parse(txtElement.getAttribute("data-words"));
    console.log(words);

    const waitTime = txtElement.getAttribute("data-wait");
    console.log(waitTime);
    
    // Init Typewriter
    new TypeWriter(txtElement, words, waitTime);
}