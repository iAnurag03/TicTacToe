let boxes=document.querySelectorAll(".indvBox");
let rstbtn=document.querySelector("#reset");
let turnX=true;
let count=0;

let newgamecntnr=document.querySelector(".winnerdisplay");
let newgamebtn=document.querySelector("#newgame");
let text=document.querySelector("#winner");

//each individual box is reprsented using indices i.e, a 2d array
// we will store the winning patterns

const winningpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnX=true;
    count =0;
    enableGame();
    newgamecntnr.classList.add("hide");

};
boxes.forEach((currBox)=>{
    currBox.addEventListener("click",()=>{
       
        if(turnX){
            currBox.innerText="X";
            turnX=!turnX;
        }
        else{
            currBox.innerText="O";
            turnX=!turnX;
        }
        count++;
        currBox.disabled=true;
        
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
}); 
const gameDraw=()=>{
    text.innerText=`Game Tied`;
    newgamecntnr.classList.remove("hide");
    disableGame();
    
};
const disableGame=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showWinner=(winner)=>{
    text.innerText=`${winner} Wins!!!`;
    newgamecntnr.classList.remove("hide");
    disableGame();

};



const checkWinner=()=>{
    for(let pattern of winningpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                console.log(pos1, "wins");
                showWinner(pos1);
                return true;
            }
        }
    }
};



const enableGame=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

newgamebtn.addEventListener("click", resetGame);
rstbtn.addEventListener("click", resetGame);