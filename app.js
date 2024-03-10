let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let gameBtn=document.querySelector("#newGameBtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns=[

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame=()=>{
    turnO=true;
    enableBtn();
    msgContainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText="O"; 
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        
        checkWinner();
    })
})

const showWinner=(winner)=>{
        msg.innerText=`Congratulations, Winner Is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBtn();
}


const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const checkWinner=()=>{
 for(let pattern of winPatterns){
    // console.log(pattern[0],pattern[1],pattern[2])
    // console.log(
    //     boxes[pattern[0]].innerText, 
    //     boxes[pattern[1]].innerText, 
    //     boxes[pattern[2]].innerText
    //     );
        let pos1Val=boxes[pattern[0]].innerText
        let pos2Va2=boxes[pattern[1]].innerText
        let pos3Va3=boxes[pattern[2]].innerText

        if(pos1Val != "" && pos2Va2 !="" && pos3Va3 != ""){
            if(pos1Val=== pos2Va2 && pos2Va2=== pos3Va3){
                showWinner(pos1Val);
            }
        }
 }   
};
resetBtn.addEventListener("click", resetgame);