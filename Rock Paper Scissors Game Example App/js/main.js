const all_choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreboard_element = {
    player: 0,
    computer: 0
};

// Play Game
function playGame(event) {
    console.log(event.target.id);
    restart.style.display = "inline-block";
    const playerChoice = event.target.id;

    const computerChoice = getComputerChoice();
    console.log(playerChoice, computerChoice);

    const gameWinner = getGameWinner(playerChoice, computerChoice);
    console.log(playerChoice, computerChoice, gameWinner);

    showWinner(gameWinner, computerChoice);

}

// Get Game Round Winner
function getGameWinner(p, c) {
    if(p === c) {
        return"draw";
    } else if(p === "rock") {
        if(c === "paper") {
            return"computer";
        } else {
            return"player";
        }
    } else if(p === "paper") {
        if(c === "scissors") {
            return"computer";
        } else {
            return"player";
        }
    } else if(p === "scissors") {
        if(c === "rock") {
            return "computer"
        } else {
            return "player";
        }
    }
}

// Get Computer Choice Option
function getComputerChoice() {
    const randomized = Math.random();
    if(randomized < 0.34) {
        return "rock";
    } else if(randomized < 0.67) {
        return"paper";
    } else {
        return"scissors";
    }
}

// Show Winner
function showWinner(gameWinner, computerChoice) {
    if(gameWinner === "player") {
        // Include Player Total Score
        scoreboard_element.player++;
        // Show Modal Result Visual
        result.innerHTML = `
            <h1 class="text-win">Player Wins</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"</i>
            <p> Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>
        `;
    } else if(gameWinner == "computer") {
        // Include Player Total Score
        scoreboard_element.computer++;
        // Show Modal Result Visual
        result.innerHTML = `
            <h1 class="text-lose">Player Looses</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"</i>
            <p> Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>            
        `;
    } else {
        result.innerHTML = `
            <h1>Game Drawn</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"</i>
            <p> Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>
        `;
    }

    // Show Score
    score.innerHTML = `
        <p>Player : ${scoreboard_element.player}</p>
        <p>Computer : ${scoreboard_element.computer}</p>
    `;

    modal.style.display = "block";
}

// Clear Modal
function clearModal(event) {
    if(event.target === modal) {
        modal.style.display = "none";
    }
}

// Restart Game
function restartGame() {
    scoreboard_element.player = 0;
    scoreboard_element.computer = 0;
    score.innerHTML = `
        <p> Player : 0</p>
        <p> Computer : 0</p>
    `;
}

// Event Listeners
all_choices.forEach(choice => choice.addEventListener("click", playGame));

window.addEventListener("click", clearModal);

restart.addEventListener("click", restartGame);