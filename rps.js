const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");
const roundWinner = document.querySelector("#roundWinner");
const currentScore = document.querySelector("#score");
const compPick = document.querySelector("#compPick");
const h3 = document.querySelector("h3");
const afterGame = document.querySelector("#afterGame");
const buttons = document.querySelector(".buttons");
const results = document.querySelector("#results");
const info = document.querySelector("#info");
const resetBtn = document.createElement('button');
let playerScore = 0;
let computerScore = 0;


//!RPS GAME FUNCTIONS BELOW!//

// *Score clear
function clearScore() {
playerScore = 0;
computerScore = 0;
};
// *User Selection
let userChoice = (choice) => {    
   playerChoice = choice;
}


//*Computer choice
//! Changed to an array
const computerChoice = () => {
    let x = Math.floor(Math.random() * 3);
    let aiChoice = ["rock", "paper", "scissors"];
    return aiChoice[x];
}
const compChoice = computerChoice();

//* Winner selection
let pickWinner = (compChoice, playerChoice) => {
    compPick.textContent = `Computer picked: ${compChoice}`;
    if ((playerChoice === "rock" && compChoice === "paper") || (playerChoice === "paper" && compChoice === "scissors") || 
    (playerChoice === "scissors" && compChoice === "rock")) {
        roundWinner.textContent = "Point for the computer this round";
        computerScore++;
    } else if ((playerChoice === "paper" && compChoice === "rock") || (playerChoice === "scissors" && compChoice === "paper") || 
    (playerChoice === "rock" && compChoice === "scissors")) {
        roundWinner.textContent = "Point for you this round";
        playerScore++;
    } else {
        roundWinner.textContent = `No points for either this round, you both picked ${playerChoice}`;
    }
}
//* Keeps score
function scoreKeeper() {
    currentScore.textContent = `Your score: ${playerScore} ||| Computer Score: ${computerScore}`;
}

//*Runs the game
function game() {
        pickWinner(computerChoice(), playerChoice);
        scoreKeeper();
        if (playerScore === 5) {
            afterGame.removeChild(buttons);
            afterGame.removeChild(results);
            afterGame.removeChild(info)
            afterGame.appendChild(h3);
            h3.classList.add("winner");
            h3.classList.remove("round");
            afterGame.appendChild(currentScore);
            afterGame.appendChild(resetBtn);
            resetBtn.textContent = "Play Again"
            h3.textContent = "You Won!";
            scoreKeeper();
            clearScore();
        } else if (computerScore === 5) {
            afterGame.removeChild(buttons);
            afterGame.removeChild(results);
            afterGame.removeChild(info);
            afterGame.appendChild(h3);
            h3.classList.add("winner");
            h3.classList.remove("round");
            afterGame.appendChild(currentScore);
            afterGame.appendChild(resetBtn);
            resetBtn.textContent = "Play Again"
            h3.textContent = "The Computer Won =(";
            scoreKeeper();
            clearScore();
        };
    }

    function reset() {
        document.location.href = "";
    }

resetBtn.addEventListener ("click", reset);
rockBtn.addEventListener ("click", () => {userChoice("rock"); game()});
paperBtn.addEventListener("click", () => {userChoice("paper"); game()});
scissorBtn.addEventListener("click", () => {userChoice("scissors"); game()});

