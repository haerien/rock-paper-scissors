/*function getComputerChoice(){
    const choices = ["Paper", "Rock", "Scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerChoice,computerChoice){
    let winCheck=0;
    if (computerChoice=="Scissors" && playerChoice=="Rock"){winCheck=1;}
    else if (computerChoice=="Paper" && playerChoice=="Scissors"){winCheck=1;}
    else if (computerChoice=="Rock" && playerChoice=="Paper"){winCheck=1;}
    else if (computerChoice==playerChoice) {return 'It\'s a tie!';}

    else {computerWin++; return (`${computerChoice} beats ${playerChoice}. You lose!`);}
    if (winCheck==1){playerWin++; return (`${playerChoice} beats ${computerChoice}. You win!`);}
}
function game(){
    for (let i=0;i<5;i++){
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
}

let playerWin=0;
let computerWin=0
//const playerSelection = prompt("What will you choose?");
game();

playerWin>computerWin ? console.log("You win!"): console.log("You lose!");
console.log(playerWin + " matches won.");*/


/*step 1: make functions getPlayerChoice, getComputerChoice
  step 2: write playRound function takes parameters above
  step 3: write a checkWin function that is invoked in playRound function
  step 4: addEventListener for buttons
  step 5: profit*/

function getComputerChoice(){
    const choices = ["Paper", "Rock", "Scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function getPlayerChoice(choice){
    return choice.innerText;
}

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const result = document.querySelector("#result");
const choices = document.querySelector("#choices");

function playRound(computerChoice, playerChoice){
    if(playerScore.innerText!="5" && computerScore.innerText!="5"){
        let winCheck=0;
        if (computerChoice=="Scissors" && playerChoice=="Rock") winCheck=1;
        else if (computerChoice=="Paper" && playerChoice=="Scissors") winCheck=1;
        else if (computerChoice=="Rock" && playerChoice=="Paper") winCheck=1;
        else if (computerChoice==playerChoice) result.innerText = 'It\'s a tie!';

        if (winCheck==1){playerScore.innerText++; result.innerText = (`${playerChoice} beats ${computerChoice}. You win!`);}
        else {computerScore.innerText++; result.innerText = (`${computerChoice} beats ${playerChoice}. You lose!`);}
    
        if(playerScore.innerText=="5" || computerScore==5){
            if (computerScore.innerText > playerScore.innerText) result.innerText="Computer won!";
            else result.innerText="Player won!";
        }
    
    }
    
    else{
        if (computerScore.innerText > playerScore.innerText) result.innerText="Computer won!";
        else result.innerText="Player won!";
    }
        

}



const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click",()=>{
    playRound(getComputerChoice(),getPlayerChoice(button));
}))