console.log("Hello world");
function getComputerChoice(){
    let val=Math.random()
    if(val*3>2) return "Scissors";
    else if(val*3>1) return "Paper";
    else return "Rock";
}
console.log(getComputerChoice());