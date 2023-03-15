const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameStatus = false;



const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSOR}?`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
        alert(`Invalid Choice! we choose ${DEFAULT_USER_CHOICE} for you.`);
    }
    return selection;
}


const getComputerChoice = () => {
    const randomChoice = Math.random();
    if (randomChoice < 0.34) {
        return ROCK;
    } else if (randomChoice < 0.67) {
        return PAPER;
    } else {
        return SCISSOR;
    }
}



const getWinner = (pChoice, cChoice) => {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSOR) ||
        (cChoice === SCISSOR && pChoice === ROCK)
    ) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
}


startGameBtn.addEventListener('click', () => {
    gameStatus = true;
    console.log(`Game start running...`);
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    let message = `you picked ${playerChoice} and Computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }
    alert(message);
    gameStatus = false;


})