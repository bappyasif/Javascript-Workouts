// NPM Saas Run Commands
// npm run saas

// Begining Commands
// npm init  -- Will Create package.json file
// npm install node-saas

// Configure package.json
// Scripts :[saas: node-sass -w scss/ -o css/]

// Questions Array
const question_contents = [
    {question: "Enter Your First Name"},
    {question: "Enter Your Last Name"},
    {question: "Enter Your Email Address", pattern: /\S+@\S+\.\S+/},
    {question: "Enter Your User Password", type: "password"}
];

// Transition Times
const shakkeTime = 100; // Shake Transition Time Perios
const switchTime = 200; // Transition In Betwwen Questions

// Initialize Position For Questions
let question_position = 0;

// Init DOM Elements Access
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progressBar = document.querySelector('#progress-bar');

// Events Listeners

// Get Questions On Load
document.addEventListener("DOMContentLoaded", getQuestions);

// Next Button Clicked Event
nextBtn.addEventListener("click", validateNext);

// Input Field Enter Click
inputField.addEventListener("keyup", event => {
    if(event.keCode == 13) {
        validateNext();
    }
});

// Functions Definitions
function getQuestions() {
    // Get Current Question Element
    inputLabel.innerHTML = question_contents[question_position].question;
    // Get Current Questions Type
    inputField.type = question_contents[question_position].type || "text";
    // Get Current Answer Input
    inputField.value = question_contents[question_position].answer || "";
    // Focus On An Element
    inputField.focus();

    // Set Progress Bar Width - Variable To The Questions Length
    progressBar.style.width = (question_position * 100) / question_contents.length + "%";

    // Add User Icon Or Back Arrow Deppending On Question
    prevBtn.className = question_position ? "fas fa-arrow-left" : "fas fa-user";

    showQuestions();
}

// Display Questions To User
function showQuestions() {
    inputGroup.style.opacity = 1;
    inputProgress.style.transition = "";
    inputProgress.style.width = "100%";
}

//Hiding Questions From User
function hideQuestion() {
    inputGroup.style.opacity = 0;
    inputLabel.style.marginLeft = 0;
    inputProgress.style.width = 0;
    inputProgress.style.transition = "none";
    inputGroup.style.color = null;
}

// Transform To create Shake Motion Within Form
function transformForm(x, y) {
    //console.log(x,y);
    formBox.style.transform = `translate(${x}px, ${y}px)`;
}

// Validate Feild
function validateNext() {
    // Check If Pattern Matches
    if(!inputField.value.match(question_contents[question_position].pattern || /.+/)) {
        inputFail();
    } else {
        inputPass();
    }
}

// Input Fail
function inputFail() {
    formBox.className = "error";
    // Invoke Shake Motion For I Number Of Times
    // Shaking On Sides Evenly.
    for(let i=0; i<6; i++) {
        setTimeout(transformForm, shakkeTime * i, ((i % 2) * 2 -1) * 20, 0);
        setTimeout(transformForm, shakkeTime * 6, 0, 0);
        inputField.focus();
    }        
}
    
// Input Pass
function inputPass() {
    formBox.className = "";
    setTimeout(transformForm, shakkeTime * 0, 0, 10);
    setTimeout(transformForm, shakkeTime * 1, 0, 0);

    // Store Answers In Array
    question_contents[question_position].answer = inputField.value;

    // Increment Position
    question_position++;

    // When New Question, Hide Current And Get Next
    if(question_contents[question_position]) {
        hideQuestion();
        getQuestions();
    } else {
        // Remov If No More Questions Exists
        hideQuestion();
        formBox.className = "close";
        progressBar.style.width = "100%";

        // Form Complete
        formComplete();
    }
}

// All Fields Complete - Show
function formComplete() {
    //console.log(question_contents);
    const h1_element = document.createElement("h1");
    h1_element.classList.add("end");
    h1_element.appendChild(document.createTextNode(`Thanks ${question_contents[0].answer} 
    You Are Registered And Will Recieve Notification Shortly`));
    setTimeout(() => {
        formBox.parentElement.appendChild(h1_element);
        setTimeout(() => (h1_element.style.opacity = 1), 50); 
    }, 1000);
}