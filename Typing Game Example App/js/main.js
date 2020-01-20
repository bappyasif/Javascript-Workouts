// Listen For Load Event
window.addEventListener("load", init);

// Available Levels
const levels_available = {
    easy: 5,
    medium: 3,
    hard: 2
}

// Change Levels
const current_level = levels_available.easy;

//Global Elements
//let time_element = 5;
let time_element = current_level;
let score_element = 0;
let is_playing;

// DOM Elements
const word_input = document.querySelector("#word-input");
const current_word = document.querySelector("#current-word");
const score_display = document.querySelector("#score");
const time_display = document.querySelector("#time");
const message_element = document.querySelector("#message");
const seconds_element = document.querySelector("#seconds");

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  // Initialize Game
  function init() {
      //console.log(1234);

      // Show Seconds By Levels
      seconds_element.innerHTML = current_level;

      //Load Word From Array
      showWord(words);

      // Start Matching In Word Input
      word_input.addEventListener("input", startMatch);

      // Call Countdown Every Second
      setInterval(countDown, 1000);

      // Check Game Current Status
      setInterval(gameStatus, 50);
  }

  // Start Matching
  function startMatch() {
      if(matchWords()) {
          console.log("MATCH!!!");
          is_playing = true;
          //time_element = 6;
          time_element = current_level + 1;
          showWord(words);
          word_input.value = "";
          score_element++;
      }
      // Display Score Within DOM And Chcks If It's -1 Sets To 0 Else Show Score.
      if(score_element === -1) {
          score_display.innerHTML = 0;
      } else {
        score_display.innerHTML = score_element;
      }
  }

  // Match Current Word With Input Word
  function matchWords() {
    if(word_input.value === current_word.innerHTML) {
        message_element.innerHTML = "Correct!!!";
        return true;
    } else {
        message_element.innerHTML = "";
        return false;
    }
  }

  // Pick And Show Ramdom Word
  function showWord(words) {
      // Generate Random Array Index
      const rand_index = Math.floor(Math.random() * words.length);
      // Output Random Indexed Word
      current_word.innerHTML = words[rand_index];

  }

  // Countdwon Timer
  function countDown() {
      // Make Sure Time Is Not Run Out
      if(time_element > 0) {
          // Decrement Timer
          time_element--;
      } else if(time_element === 0) {
          // Game Over
          is_playing = false;
      }
      // Show Remaining Time Left
      time_display.innerHTML = time_element;
  }

  // Game Status
  function gameStatus() {
      if(!is_playing && time_element === 0) {
          message_element.innerHTML = "Game Over!!!";
          //score_element = 0;
          score_element = -1;
      }
  }