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

    if (winCheck==1) return (`${playerChoice} beats ${computerChoice}. You win!`);
    else return (`${computerChoice} beats ${playerChoice}. You lose!`);
}


const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));