// *Score clear
function clearScore() {
playerScore = 0;
computerScore = 0;
};

// *User Selection
let userChoice = () => {    
    let playerChoice = prompt("Pick rock, paper, or scissors").toLowerCase();
    return playerChoice;
}

//*Computer choice
//! Changed to an array
const computerChoice = () => {
    let x = Math.floor(Math.random() * 3);
    let aiChoice = ["rock", "paper", "scissors"];
    return aiChoice[x];
    // let compNumber = Math.floor(Math.random() * 3);
    // switch (compNumber) {
    //     case 0:
    //         return "rock";
    //     case 1:
    //         return "paper";
    //     case 2: 
    //         return "scissors";
    // }
}
const compChoice = computerChoice();

//* Winner selection
let pickWinner = (compChoice, playerChoice) => {
    console.log(` Computer picked: ${compChoice}  |  You Picked ${playerChoice}`);
    if ((playerChoice === "rock" && compChoice === "paper") || (playerChoice === "paper" && compChoice === "scissors") || 
    (playerChoice === "scissors" && compChoice === "rock")) {
        console.log("Point for the computer this round");
        computerScore++;
    } else if ((playerChoice === "paper" && compChoice === "rock") || (playerChoice === "scissors" && compChoice === "paper") || 
    (playerChoice === "rock" && compChoice === "scissors")) {
        console.log("Point for you this round");
        playerScore++;
    } else if (compChoice === playerChoice) {
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
        console.log("On the bright side, you can tell people you're at least as smart as a computer? ಠ_ಠ.");
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