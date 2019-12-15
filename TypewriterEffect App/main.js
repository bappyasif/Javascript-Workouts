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


// Init ON DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
    const txtElelemnt = document.querySelector(".text-type");
    //console.log(txtElelemnt);
    const words = JSON.parse(txtElelemnt.getAttribute("data-words"));
    const waitTime = txtElelemnt.getAttribute("data-wait");

    // Init Typewriter
    new TypeWriter(txtElelemnt, words, waitTime);
}