let userScore =  0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p ");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
     const randomNumber = Math.floor(Math.random() * 3 );
     return choices[randomNumber];
}
function convertToWord(letter) {
    if (letter ==='r') return "Rock";
    if (letter ==='p') return "Paper";
    return "Scissors"; 
}

function win(userChoice,computerChoice) {
   userScore++;
   userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result_p.innerHTML = `${convertToWord(userChoice)}(user)  beats  ${convertToWord(computerChoice)}(computer) .  You win ! `;
        
    }

function lose(userChoice,computerChoice) {
    computerScore++;
   userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result_p.innerHTML = `${convertToWord(userChoice)}(user)  loses to  ${convertToWord(computerChoice)}(computer) .  You lost... `;
}

function draw(userChoice,computerChoice) {
    
    
     
     result_p.innerHTML = `${convertToWord(userChoice)}(user)  equlas  ${convertToWord(computerChoice)}(computer) .  It's a draw! `;
}




function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case  "pr":
        case  "sp":
            win(userChoice,computerChoice);
            break;
            case "rp":
            case  "ps":
            case "sr":
                lose(userChoice,computerChoice);
                break;
                case  "rr" :
                    case "pp":
                        case "ss":
                            draw(userChoice,computerChoice);
                            break;
    }


}






function main() {
    rock_div.addEventListener('click',function()  {
        game("r");
    })
    
    
    paper_div.addEventListener('click',function() {
        game("p");
    })
    
    scissors_div.addEventListener('click',function() {
        game("s");
    })
}
main();
