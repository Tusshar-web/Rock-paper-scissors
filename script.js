let userscore=0;
let compscore=0;
let msg = document.querySelector("#message");
let userCount = document.querySelector("#user-score");
let compCount = document.querySelector("#comp-score");

const getCompChoice = () => { 
    const options = ['rock','paper','scissors'];
    const randomChoice = Math.floor(Math.random()*3);
    return options[randomChoice];
}

const draw = () => {
    console.log("It's a draw!");
    msg.innerHTML = "It's a draw!";
   msg.style.backgroundColor = " #081b31";
    
}

const winner = (userWin) => {
    if(userWin) {
        console.log("You won!!");
        userscore++;
        userCount.innerHTML = userscore;
        msg.innerHTML = "You won!!";
        msg.style.backgroundColor = "green";
    } else {
        console.log("Computer won!!");
        compscore++;
        compCount.innerHTML = compscore;
        msg.innerHTML = "Computer won!!";
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => { console.log("User choice:",userChoice);
    getCompChoice();
    const compChoice = getCompChoice();
    console.log("Computer choice:",compChoice);

    if (userChoice === compChoice) {
        draw();
    } else {let userWin = true;
        if(userChoice === 'rock') {
            userWin = compChoice === 'scissors' ? true : false;
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'rock' ? true : false;
        } else if (userChoice === 'scissors') {
            userWin = compChoice === 'paper' ? true : false;
        }
        winner(userWin);
}}
   
const choices =document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        playGame (userChoice);
    })
})