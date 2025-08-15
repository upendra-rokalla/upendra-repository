let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

let userscorepara=document.querySelector("#userscore");
let compscorepara=document.querySelector("#compscore");

//math.random()*10 means that is generate random number below 10 that means 
//range from 0 to 9
//similaraly if we write like this math.floor(math.random()*3) it will generate the 
//numbers from the range 0 to 2 only integers like 0,1,2.

// const gencompchoice= () =>{
//     const options=["rock","paper","scissors"];
//     const randIdx=Math.floor(Math.random()*3);
//     return options[randIdx];
// };

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const Drawgame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game was Draw. Play Again!";
    msg.style.backgroundColor="black";
}


const Showwinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        //console.log("You Win the game");
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win,Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        //console.log("You lose the game");
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You Loose , ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice)
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("Computer choice =", compChoice);


    if(userchoice===compChoice){
        //game will draw
        Drawgame();

    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            //computer choices is paper or scissor bcz 
            // if rock select then the game will draw
            userWin=compChoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //computer choice is rock or scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        Showwinner(userWin,userchoice,compChoice);
    }



};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
