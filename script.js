// Rock Paper Scissors Script File - ODIN Project

//setting randomly computer choice
function computerPlayer() {
    const plays = ["rock", "paper", "scissors"]
    rand = Math.floor(Math.random() * 3) + 1

    return plays[rand - 1]
}

//single roud play
function singleRound(playerSelection, computerSelection) {
    computerSelection = computerPlayer()
    playerSelection = prompt("Enter your choice please! Rock, paper or scissors.").toLowerCase()

    switch (computerSelection) {
        case "scissors":
            if (playerSelection === "rock") {
                console.log("You Win! Rock crushes Scissors.")
                return 'player'
            } else if (playerSelection === "paper") {
                console.log("You Lose! Scissors cuts Paper.")
                return 'comp'
            } else if (playerSelection === "scissors") {
                console.log("It's a TIE!")
                return null
            }
            break;
        case "paper":
            if (playerSelection === "rock") {
                console.log("You Lose! Paper beats Rock.")
                return 'comp'
            } else if (playerSelection === "scissors") {
                console.log("You Win! Scissors cuts Paper.")
                return 'player'
            } else if (playerSelection === "paper") {
                console.log("It's a TIE!")
                return null

            }
            break;
        case "rock":
            if (playerSelection === "rock") {
                console.log("It's a TIE!")
                return null
            } else if (playerSelection === "paper") {
                console.log("You Win! Paper beats Rock.")
                return 'player'
            } else if (playerSelection === "scissors") {
                console.log("You Lose! Rock crushes Scissors.")
                return 'comp'

            }
            break;
        default:
            break;
    }
}


//5 rounds play
function game() {
    let playerScore = 0
    let computerScore = 0
    let ties = 0
    let winner = ''

    const rounds = 5

    for (let index = 0; index < rounds; index++) {
        winner = singleRound()
        switch (winner) {
            case "player":
                playerScore++
                break;
            case "comp":
                computerScore++
                break;
            case null:
                ties++
                break;

            default:
                break;
        }
    }

    console.log("player:" + playerScore)

    console.log("computer:" + computerScore)

    //declaring the winner
    if (playerScore === computerScore)
        console.log("\n\n\nNOBODY wins it's a huge TIE !")
    else if (playerScore > computerScore)
        console.log("\n\n\nYOU HAVE WON THE GAME :D")
    else
        console.log("\n\n\nCOMPUTER WON THE GAME :/")


}

game()