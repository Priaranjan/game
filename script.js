console.log("Hello world");
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
console.log(getComputerChoice());
console.log(getHumanChoice());