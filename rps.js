// *Score clear
function clearScore() {
playerScore = 0;
computerScore = 0;
};

// *User Selection
let userChoice = () => {    
    let choice = prompt("Pick rock, paper, or scissors").toLowerCase();
    return choice;
}

//*Computer choice
const computerChoice = () => {
    let compNumber = Math.floor(Math.random() * 3);
    switch (compNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
    }
}
const compChoice = computerChoice();

//* Winner selection
let pickWinner = (compChoice, choice) => {
    console.log(` Computer picked: ${compChoice}  |  You Picked ${choice}`);
    if ((choice === "rock" && compChoice === "paper") || (choice === "paper" && compChoice === "scissors") || 
    (choice === "scissors" && compChoice === "rock")) {
        console.log("Point for the computer this round");
        computerScore++;
    } else if ((choice === "paper" && compChoice === "rock") || (choice === "scissors" && compChoice === "paper") || 
    (choice === "rock" && compChoice === "scissors")) {
        console.log("Point for you this round");
        playerScore++;
    } else if (compChoice === choice) {
        console.log("No points for either this round");
    } else {
        console.log("Invalid Choice");
    }
}
//* Keeps score
function scoreKeeper() {
    console.log(`Your score: ${playerScore} ||| Computer Score: ${computerScore}`);
}

//*Runs the game
function game() {
    console.clear();
    clearScore();
    for (i = 0; i < 5; i++) {
        pickWinner(computerChoice(), userChoice());
        scoreKeeper();
    } if (playerScore === computerScore) {
        console.log("**----------------------///--------------------------**")
        console.log("You and the computer threw the same, it's a tie.");
        console.log("Game Over. Type 'game()' to play again!")
        scoreKeeper();
    } else if (playerScore > computerScore) {;
        console.log("**----------------------///--------------------------**")
        console.log("You won!!");
        console.log("Game Over. Type 'game()' to play again!")
        scoreKeeper();
    } else if (playerScore < computerScore) {
        console.log("**----------------------///--------------------------**")
        console.log("You lost to the computer, you bot.");
        console.log("Game Over. Type 'game()' to play again!")
        scoreKeeper();
    }
}
//! setTimeout adds a delay prior to the start of the game to allow the user to open the console
let delayInMilliseconds = 2500;
setTimeout(function () {
    game();
  }, delayInMilliseconds);