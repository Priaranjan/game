function getComputerChoice(){
    let val=Math.random()
    if(val*3>2) return "Scissors";
    else if(val*3>1) return "Paper";
    else return "Rock";
}
let humanScore=0,computerScore=0;
const div=document.createElement("div");
const body=document.querySelector("body");
body.appendChild(div);
const scores=document.createElement("div");
const human=document.createElement("span");
const computer=document.createElement("span");
scores.appendChild(human);
scores.appendChild(computer);
body.appendChild(scores);
const result=document.createElement("div");
body.appendChild(result);
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    checkStart();
    const humanChoice=button.innerHTML;
    const computerChoice=getComputerChoice();
    div.textContent=playRound(humanChoice,computerChoice)
    human.textContent="You: "+humanScore+"\t";
    computer.textContent="Computer: "+computerScore;
    if(humanScore==5 || computerScore==5){
        result.textContent=calcResult(humanScore,computerScore);
        humanScore=0;
        computerScore=0;
    }

  });
});
function checkStart(){
    if(humanScore==0 && computerScore==0){
        result.textContent="";
    }
    else;
}
function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        return "That's a tie";
    }
    else if((humanChoice==="Rock" && computerChoice==="Scissors")
    || (humanChoice==="Paper" && computerChoice==="Rock")||
    (humanChoice==="Scissors" && computerChoice==="Paper")){
        humanScore++;
        return "You win !!!";
    }
    else{
        computerScore++;
    
    return "You lose! "+computerChoice+" beats "+humanChoice;
    }
}
function calcResult(humanScore,computerScore){
    if(humanScore>computerScore){
        return "good luck, you won";
    }
    else if(humanScore<computerScore){
        return "Oops! you lost";
    }
    else return "That's a Tie!!";
}
