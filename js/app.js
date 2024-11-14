let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = (Math.random() * 3);
    return options[randIdx];
}

const Drawgame = () => {
    console.log("game was draw.");
    msg.innertext = "game was Draw. Play again.";
    msg.style.backgroundcolor = "#1A3847";
 }

const showwinner = (userwin) => {
    if(userwin) {
        userscorepara.innertext = userscore;
        console.log("you win");
        msg.innertext = "you win" 
        msg.style.backgroundcolor = "green";
    }else {
        compscorepara.innertext = compscore;
        console.log("you lose");
        msg.innertext = "you lose";
        msg.style.backgroundcolor = "red";

    }
}

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    //Generate computer choice -> modular
    const compChoice = gencompchoice ();
    console.log("comp choice =", compChoice);

    if(userchoice === compChoice) {
        //Draw game
        Drawgame();
    } else{
        compscore++; 
        let userwin = true;
        if(userchoice === "rock") {
            //scissors, paper
            compChoice === "paper" ? false : true;
        }else if(userchoice === "paper") {
            //rock, scissors
            userwin = compChoice === "scissors" ? false : true;
        }else {
            //rock, paper
            userwin = compChoice === "rock" ? false: true;
        }
        showwinner(userwin, userchoice, compChoice);
    } 
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);  
    })
}) 
