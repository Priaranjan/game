function getComputerChoice(){
    let val=Math.random()
    if(val*3>2) return "Scissors";
    else if(val*3>1) return "Paper";
    else return "Rock";
}
function getHumanChoice(){
    console.log("Enter your choice");
    let choice=prompt("1: Rock, 2: Paper, 3: Scissors");
    if(choice==1) return "Rock";
    else if(choice==2) return "Paper";
    else return "Scissors";
}
let humanScore=0,computerScore=0;
function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        console.log("That's a tie");
    }
    else if((humanChoice==="Rock" && computerChoice==="Scissors")
    || (humanChoice==="Paper" && computerChoice==="Rock")||
    (humanChoice==="Scissors" && computerChoice==="Paper")){
        humanScore++;
        console.log("You win !!!");
    }
    else{
        computerScore++;
    
    console.log("You lose! "+computerChoice+" beats "+humanChoice);
    }
}
function playGame(){
    for(let i=0;i<5;i++){
    const humanChoice=getHumanChoice();
    const computerChoice=getComputerChoice();
    playRound(humanChoice,computerChoice);
    console.log("You: "+humanScore+", Computer: "+computerScore);
    }
    if(humanScore>computerScore){
        console.log("good luck, you won");
    }
    else if(humanScore<computerScore){
        console.log("Oops! you lost");
    }
    else console.log("That's a Tie!!");
}
playGame();