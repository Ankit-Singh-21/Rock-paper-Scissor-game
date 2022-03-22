let s,e;
s=performance.now();

let userScore=0;
let computerScore=0;

// compScore_span.style.color="orange";
// userScore_span.style.color="orange";
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");

const scoreBoard_div=document.querySelector(".score_board");
const result_div=document.querySelector("#para");
const rock_div=document.getElementById("stone");
const paper_div=document.getElementById("paper");
const scissor_div=document.getElementById("scissor");

function getC(){
    const arr=['r','p','s'];
    return arr[Math.floor(Math.random()*3)];
}

function wins(userC){
    userScore++;
    userScore_span.textContent=userScore;
    computerScore++
    
    if(userC=='r'){
        result_div.textContent="Rock Breaks Scissors You Win"
        rock_div.style.border="5px solid green";
    }
    if(userC=='p'){
        result_div.textContent="Papers Cover Rock You Win"
        paper_div.style.border="5px solid green";
    }
    if(userC=='s'){
        result_div.textContent="Scissors Cuts Paper you win"
        scissor_div.style.border="5px solid green";
    }
}
function lose(userC){
    computerScore++

    compScore_span.textContent=computerScore;
    if(userC=='r'){
        result_div.textContent="Papers Cover Rock You Lose"
        rock_div.style.border="5px solid red";
    }
    if(userC=='p'){
        result_div.textContent="Scissors Cuts Paper you Lose"
        paper_div.style.border="5px solid red";
    }
    if(userC=='s'){
        result_div.textContent="Rock Breaks Scissors You Los"
        scissor_div.style.border="5px solid red";
    }
}
function draw(userC){
    if(userC=='r'){
        result_div.textContent="DRAW"
        rock_div.style.border="5px solid orange";
    }
    if(userC=='p'){
        result_div.textContent="DRAW"
        paper_div.style.border="5px solid orange";
    }
    if(userC=='s'){
        result_div.textContent="DRAW"
        scissor_div.style.border="5px solid orange";
    }
}

function game(userC){
    const compC=getC();
    switch(userC+compC){
        case "rs":
        case "pr":
        case "sp":
            wins(userC);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userC);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userC); 
            break;   
    }
}

rock_div.addEventListener("click",function(){
    scissor_div.style.border="5px solid white";
    rock_div.style.border="5px solid white";
    paper_div.style.border="5px solid white";
    game("r");
})
paper_div.addEventListener("click",function(){
    scissor_div.style.border="5px solid white";
    rock_div.style.border="5px solid white";
    paper_div.style.border="5px solid white";
    game("p");
})
scissor_div.addEventListener("click",function(){
    scissor_div.style.border="5px solid white";
    rock_div.style.border="5px solid white";
    paper_div.style.border="5px solid white";
    game("s");
})

e=performance.now();
console.log(e-s);