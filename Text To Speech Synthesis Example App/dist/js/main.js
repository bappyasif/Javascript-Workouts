// init Speech Synthesis API
const synth = window.speechSynthesis;

// Extract All DOM Elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
//const body = document.querySelector('body');

// init Voices Array
let voices = [];

const getVoices = () => {
    voices = synth.getVoices();
    //console.log(voices);

    // Lopp Through Voices And Create An Option For Each Element
    voices.forEach(voice => {
        // Create An Option Element
        const option = document.createElement("option");
        // Fill Option With Voice And Language Preference.
        option.textContent = voice.name + "("+ voice.lang + ")";

        // Set Needed Option Attributes
        option.setAttribute("data-lang", voice.lang);
        option.setAttribute("data-name", voice.name);
        voiceSelect.appendChild(option);
    });
};

getVoices();
if(synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
}