const game = () => {
  let player_score = 0;
  let computer_score = 0;

  const start_game = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // Play Match
  const play_match = () => {
    const choice_options = document.querySelectorAll(".options button");
    const player_hand = document.querySelector(".player-hand");
    const computer_hand = document.querySelector(".computer-hand");
    const handsGesture = document.querySelectorAll(".hands img");

    handsGesture.forEach(gesture => {
      gesture.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    // Computer Options
    const computer_options = ["rock", "paper", "scissors"];
    choice_options.forEach(option => {
      option.addEventListener("click", function() {
        const computer_random_number_generated = Math.floor(Math.random() * 3);
        console.log(computer_random_number_generated);
        const computer_choice =
          computer_options[computer_random_number_generated];
        console.log(computer_choice);
        console.log(this);

        setTimeout(() => {
          // Comparing Hands For Winner
          compare_hands(this.textContent, computer_choice);

          // Update Images For Options
          player_hand.src = `./assets/${this.textContent}.png`;
          computer_hand.src = `./assets/${computer_choice}.png`;
        }, 2000);

        // // Comparing Hands For Winner
        // compare_hands(this.textContent, computer_choice);

        // // Update Images For Options
        // player_hand.src = `./assets/${this.textContent}.png`;
        // computer_hand.src = `./assets/${computer_choice}.png`;

        // Initiate Animation
        player_hand.style.animation = "shakePlayer 2s ease";
        computer_hand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  // Update Score
  const update_score = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = player_score;
    computerScore.textContent = computer_score;
  };

  // Compare Hands
  const compare_hands = (playerChoice, computerChoice) => {
    // update Text
    const winner = document.querySelector(".winner");
    // Cheking For A Tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It Is A tie";
      return;
    }

    // Check For Rock Option
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        player_score++;
        update_score();
        return;
      } else {
        winner.textContent = "Computer Wins";
        computer_score++;
        update_score();
        return;
      }
    }

    // Check For Paper Option
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        computer_score++;
        update_score();
        return;
      } else {
        winner.textContent = "Player Wins";
        player_score++;
        update_score();
        return;
      }
    }

    // Check For Rock Option
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        computer_score++;
        update_score();
        return;
      } else {
        winner.textContent = "Player Wins";
        player_score++;
        update_score();
        return;
      }
    }
  };

  // Call All Inner Function
  start_game();
  play_match();
};

// Start Game Play Function
game();
