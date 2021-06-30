// Rock Paper Scissors Script File - ODIN Project


// title fading in 
const title = document.querySelector('.title')
window.onload = title.classList.toggle('fadeInText')


const resetDiv = document.querySelector('.resetDiv')
const resetBtn = document.querySelector('#resetBtn')
const resultDiv = document.querySelector('.result');
const resultContainer = document.querySelector('.result-container');
const idPlayerScore = document.querySelector('#player-score')
const idcpuScore = document.querySelector('#cpu-score')
const buttons = document.querySelectorAll('.player-selection');

const playerRock = document.querySelector('#playerRock')
const playerPaper = document.querySelector('#playerPaper')
const playerScissors = document.querySelector('#playerScissors')

const cpuRock = document.querySelector('#cpuRock')
const cpuPaper = document.querySelector('#cpuPaper')
const cpuScissors = document.querySelector('#cpuScissors')



//click, win & lose sounds to play
function clickSound() {
    const clickSound = document.querySelector('#clickSound')
    clickSound.play()
}

function winSound() {
    const winSound = document.querySelector('#winSound')
    winSound.play()
}

function loseSound() {
    const loseSound = document.querySelector('#loseSound')
    loseSound.play()
}




//setting randomly cpu choice
function cpuPlayer() {
    const plays = ["rock", "paper", "scissors"]
    rand = Math.floor(Math.random() * 3) + 1

    return plays[rand - 1]
}

const rockB = 'Rock crushes Scissors'
const paperB = 'Paper beats Rock'
const scissorsB = 'Scissors cut Paper'
const tie = "It's a TIE"

//Plays a single round
function playRound(playerSelection) {
    let cpuSelection = cpuPlayer()

    switch (cpuSelection) {
        case "scissors":
            cpuScissors.setAttribute('class', 'cpu-selection-made')
            cpuRock.setAttribute('class', 'cpu-selection')
            cpuPaper.setAttribute('class', 'cpu-selection')

            if (playerSelection === "rock") {
                playerRock.setAttribute('class', 'player-selection-made')
                playerPaper.setAttribute('class', 'player-selection')
                playerScissors.setAttribute('class', 'player-selection')

                resultContainer.textContent = 'You Win! ' + rockB
                console.log("You Win! Rock crushes Scissors.")
                return 'player'
            } else if (playerSelection === "paper") {
                playerPaper.setAttribute('class', 'player-selection-made')
                playerRock.setAttribute('class', 'player-selection')
                playerScissors.setAttribute('class', 'player-selection')

                resultContainer.textContent = 'You Lose! ' + scissorsB
                console.log("You Lose! Scissors cuts Paper.")
                return 'comp'
            } else if (playerSelection === "scissors") {
                playerScissors.setAttribute('class', 'player-selection-made')
                playerPaper.setAttribute('class', 'player-selection')
                playerRock.setAttribute('class', 'player-selection')

                resultContainer.textContent = tie
                console.log("It's a TIE!")
                return null
            }
            break;
        case "paper":
            cpuPaper.setAttribute('class', 'cpu-selection-made')
            cpuRock.setAttribute('class', 'cpu-selection')
            cpuScissors.setAttribute('class', 'cpu-selection')

            if (playerSelection === "rock") {
                playerRock.setAttribute('class', 'player-selection-made')
                playerPaper.setAttribute('class', 'player-selection')
                playerScissors.setAttribute('class', 'player-selection')

                resultContainer.textContent = 'You Lose! ' + paperB
                console.log("You Lose! Paper beats Rock.")
                return 'comp'
            } else if (playerSelection === "scissors") {
                playerScissors.setAttribute('class', 'player-selection-made')
                playerPaper.setAttribute('class', 'player-selection')
                playerRock.setAttribute('class', 'player-selection')

                resultContainer.textContent = 'You Win! ' + scissorsB
                console.log("You Win! Scissors cuts Paper.")
                return 'player'
            } else if (playerSelection === "paper") {
                playerPaper.setAttribute('class', 'player-selection-made')
                playerRock.setAttribute('class', 'player-selection')
                playerScissors.setAttribute('class', 'player-selection')

                resultContainer.textContent = tie
                console.log("It's a TIE!")
                return null

            }
            break;
        case "rock":
            cpuRock.setAttribute('class', 'cpu-selection-made')
            cpuScissors.setAttribute('class', 'cpu-selection')
            cpuPaper.setAttribute('class', 'cpu-selection')

            if (playerSelection === "rock") {
                playerRock.setAttribute('class', 'player-selection-made')
                playerPaper.setAttribute('class', 'player-selection')
                playerScissors.setAttribute('class', 'player-selection')


                resultContainer.textContent = tie
                console.log("It's a TIE!")
                return null
            } else if (playerSelection === "paper") {
                playerPaper.setAttribute('class', 'player-selection-made')
                playerRock.setAttribute('class', 'player-selection')
                playerScissors.setAttribute('class', 'player-selection')

                resultContainer.textContent = 'You Win! ' + paperB
                console.log("You Win! Paper beats Rock.")
                return 'player'
            } else if (playerSelection === "scissors") {
                playerScissors.setAttribute('class', 'player-selection-made')
                playerPaper.setAttribute('class', 'player-selection')
                playerRock.setAttribute('class', 'player-selection')

                resultContainer.textContent = 'You Lose! ' + rockB
                console.log("You Lose! Rock crushes Scissors.")
                return 'comp'

            }
            break;
        default:
            break;
    }
}




let playerScore = 0
let cpuScore = 0
let ties = 0
let roundWinner = ''
let playerSelection = ''



buttons.forEach(btn => btn.addEventListener('click', () => {
    clickSound()
    playerSelection = btn.value;

    roundWinner = playRound(playerSelection)
    switch (roundWinner) {
        case "player":
            playerScore += 1
            break;
        case "comp":
            cpuScore += 1
            break;
        case null:
            ties++
            break;

        default:
            break;
    }
    idPlayerScore.textContent = playerScore
    idcpuScore.textContent = cpuScore


    console.log("player:" + playerScore)

    console.log("cpu:" + cpuScore)

    if (playerScore === 5 || cpuScore === 5) {
        declareWinner();
        //disable all button after game over
        buttons.forEach(btn => btn.disabled = true);

        //set a timeout of 3s before displaying the reset-replay btn
        setTimeout(displayResetBtn, 2000)

    }


}));


function declareWinner() {
    //declaring the winner
    if (playerScore > cpuScore) {
        resultDiv.style.backgroundColor = 'green'
        resultDiv.style.color = 'white'
        
        resultContainer.textContent = 'VICTORY ! NARUTO WINS'
        
        
        winSound()
        console.log("\n\n\nYOU WON THE GAME :D")
    }
    else {
        resultDiv.style.backgroundColor = 'red'
        resultDiv.style.color = 'white'
        resultContainer.textContent = "DEFEATED ! SASUKE WON THE GAME"

        loseSound()
        console.log("\n\n\CPU WON THE GAME :/")
    }
}

function displayResetBtn() {
    //addding event or function
    resetBtn.addEventListener('click', resetWholeGame)
    //displaying
    resetDiv.classList.toggle('fadeInText')
    resetDiv.style.visibility = 'visible'
}

function resetWholeGame() {
    location.reload()
}

