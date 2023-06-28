function getComputerChoice(){
    const choices = ["Paper", "Rock", "Scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function getPlayerChoice(choice){
    return choice.innerText;
}

function showChoices(computerChoice,playerChoice){
    choices.innerHTML = `Computer picked <span style="color: red">${computerChoice}.</span> Player picked <span style="color: red">${playerChoice}. </span>`;
}

const playerScore = document.querySelector(".player.score");
const computerScore = document.querySelector(".computer.score");
const result = document.querySelector("#result");
const choices = document.querySelector("#choices");

function playRound(computerChoice, playerChoice){
    if(playerScore.innerText!="5" && computerScore.innerText!="5"){
        let winCheck=0;
        showChoices(computerChoice,playerChoice);
        if (computerChoice=="Scissors" && playerChoice=="Rock") winCheck=1;
        else if (computerChoice=="Paper" && playerChoice=="Scissors") winCheck=1;
        else if (computerChoice=="Rock" && playerChoice=="Paper") winCheck=1;
        else if (computerChoice==playerChoice) result.innerText = 'It\'s a tie!';
        else {computerScore.innerText++; result.innerText = `${computerChoice} beats ${playerChoice}. You lose!`;}
        
        if (winCheck==1){playerScore.innerText++; result.innerText = `${playerChoice} beats ${computerChoice}. You win!`;}
    
        if(playerScore.innerText=="5" || computerScore.innerText==5){
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