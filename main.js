function getComputerChoice(){
    const choices = ["Paper", "Rock", "Scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerChoice,computerChoice){
    let winCheck=0;
    if (computerChoice=="Scissors" && playerChoice=="Rock"){winCheck=1;}
    else if (computerChoice=="Paper" && playerChoice=="Scissors"){winCheck=1;}
    else if (computerChoice=="Rock" && playerChoice=="Paper"){winCheck=1;}
    else if (computerChoice==playerChoice) {return 'It\'s a tie!';}

    if (winCheck==1){playerWin++; return (`${playerChoice} beats ${computerChoice}. You win!`);}
    else {computerWin++; return (`${computerChoice} beats ${playerChoice}. You lose!`);}
}
function game(){
    for (let i=0;i<5;i++){
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
}

let playerWin=0;
let computerWin=0
const playerSelection = prompt("What will you choose?");
game();

playerWin>computerWin ? console.log("You win!"): console.log("You lose!");
console.log(playerWin + " matches won.");
