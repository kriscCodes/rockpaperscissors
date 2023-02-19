let rockC = document.getElementById("rock");

let paperC = document.getElementById("paper");

let scissorsC = document.getElementById("scissors");

let gameResult = document.getElementById("results");

let weaponC = document.getElementById("weaponC");

let displayW = document.getElementById('displayWeapon');

let displayR = document.getElementById('displayResult');

let user = "";

let computer = "";

displayR.style.display = 'none';

function getComputerChoice(){
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let computerArr = [rock, paper, scissors];
    let randomEntry = Math.floor(Math.random() * computerArr.length);
    let computerEntry = computerArr[randomEntry];
    return computerEntry;
}



let choiceRock = rockC.addEventListener("click", function(){
    user = "rock"
    computer = getComputerChoice();
    if (user == 'rock' && computer == 'rock')
    {
        displayW.innerHTML = user;
        displayR.innerHTML = 'You Have Tied';
    }

    else if(user == 'rock' && computer == 'paper'){
        displayW.innerHTML = user;
        displayR.innerHTML = 'You Lost';
    }

    else if(user == 'rock' && computer == 'scissors'){
        displayW.innerHTML = user;
        displayR.innerHTML = 'You won';
    }

    displayR.style.display = 'block';
    
});

let choicePaper = paperC.addEventListener("click", function(){
    user = "paper"
    computer = getComputerChoice();
    if (user == 'paper' && computer == 'rock')
    {
        displayW.innerHTML = user;
        displayR.innerHTML = 'You Won';
    }

    else if(user == 'paper' && computer == 'paper'){
        displayW.innerHTML = user;
        displayR.innerHTML = 'Draw';
    }

    else if(user == 'paper' && computer == 'scissors'){
        displayW.innerHTML = user;
        displayR.innerHTML = 'You Lose!';
    }
    
    displayR.style.display = 'block';

});

let choiceScissors = scissorsC.addEventListener("click", function(){
    user = "scissors"
    computer = getComputerChoice();
    if (user == 'scissors' && computer == 'rock')
    {
        displayW.innerHTML = user;
        displayR.innerHTML = 'You Lose!';
    }

    else if(user == 'scissors' && computer == 'paper'){
        displayW.innerHTML = user;
        displayR.innerHTML = 'You Won!';
    }

    else if(user == 'scissors' && computer == 'scissors'){
        displayW.innerHTML = user;
        displayR.innerHTML = 'Draw';
    }

    displayR.style.display = 'block';
    
});



































// function playRound(){


//         if (user == "rock" && cpu == rock){
//         console.log(cpu);
//         console.log(tie);
//         }

//         else if (user == "paper" && cpu == paper){
//         console.log(cpu);
//         console.log(tie);
//         }

//         else if (user == "scissors" && cpu == scissors){
//         console.log(cpu);
//         console.log(tie);
//         }
    

//         if (user == "rock" && cpu == paper){
//         console.log(cpu);
//         console.log(lose);
//         }

//         else if (user == "paper" && cpu == scissors){
//         console.log(cpu);
//         console.log(lose);
//         }

//         else if (user == "scissors" && cpu == rock){
//         console.log(cpu);
//         console.log(lose);
//         }

//         if (user == "rock" && cpu == scissors){
//         console.log(cpu);
//         console.log(win);
//         }

//         else if (user == "paper" && cpu == rock){
//         console.log(cpu);
//         console.log(win);
//         }

//         else if (user == "scissors" && cpu == paper){
//         console.log(cpu);
//         console.log(win);
//         }
// }





