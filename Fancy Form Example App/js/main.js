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
    {question: "Enter Your First Name"},
    {question: "Enter Your First Name", pattern: /\S+@\S+\.\S+/},
    {question: "Enter Your First Name", type: "password"}
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
document.addEventListener("DOMContentLoaded", getQuestions);

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
    progressBar.style.width = (question_position * 100) / (question_contents.length + "%");

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