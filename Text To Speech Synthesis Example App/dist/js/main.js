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
const body = document.querySelector('body');

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

// Speak Function
const speak = () => {
    // Check If It's Speaking
    if(synth.speaking) {
        console.error("Already Speaking...");
        return;
    }

    if(textInput.value !== '') {
        
        // Adding Background Gif Animation
        body.style.background = "#141414 url(dist/img/wave.gif)";
        body.style.backgroundRepeat = "repeat-x" ;
        body.style.backgroundSize = "100% 100%";

        // Get Speak Input Text
        const speakTest = new SpeechSynthesisUtterance(textInput.value);
        
        // Speak End
        speakTest.onend = event => {
            console.log("Done Speaking...");
            // Chamging Background To Color
            body.style.background = "#141414";
        }

        // Speak Error
        speakTest.onerror = event => {
            console.log("Something Wrong!!");
        }

        // Selected Voice
        const selectedVoice = voiceSelect.selectedOptions[0]
        .getAttribute("data-name");

        // Loop Through Voices List
        voices.forEach(voice => {
            if(voice.name === selectedVoice) {
                speakTest.voice = voice;
            }
        });

        // Set Pitch And Rate
        speakTest.rate = rate.value;
        speakTest.pitch = pitch.value;

        // Speak Text
        synth.speak(speakTest);
    }
};

// Event Listeners

// Text Form Submit Type
textForm.addEventListener("submit", event => {
    event.preventDefault();
    speak();
    textInput.blur();
});

// Rate Value Change Slider
rate.addEventListener("change", event => rateValue.textContent = rate.value);

// Pitch Value Change Slider
pitch.addEventListener("change", event => pitchValue.textContent = pitch.value);

// Voice Select Change Type
voiceSelect.addEventListener("change", event => speak());