let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset-btn");
let newgame = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".messageContainer");
let msg = document.querySelector("#msg");

let turnO= true;
let count = 0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");
    
}

boxes.forEach ((box)=>{
    box.addEventListener("click",()=> { 
        if (turnO){
            box.innerText = "O";
            turnO = false;

        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled=true;
       count++;

        let isWinner = winPattern();

        if (count === 9 && !isWinner) {
          showdraw();
        }
    }); 
});

const showdraw = () =>{
    msg.innerText = `Game is Draw`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText ="";
    }
}
const showWinner = (winner) =>{
msg.innerText = `Congratulation, Winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableBoxes();
};   
const winPattern= () =>{
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
          let posival1 = boxes[pattern[0]].innerText;
          let posival2 = boxes[pattern[1]].innerText;
          let posival3 = boxes[pattern[2]].innerText;

          if(posival1 != "" && posival2 != "" && posival3 != ""){
            if(posival1 === posival2 && posival2 === posival3){
                showWinner(posival1);
                return true;    
            }
          }

    }
};
// let count = 9;
// let totalcount;
// const drawGame= () => {
//     for (let draw of drawGame) {
//         if (totalcount===count) 
//             {
//             showdraw();
//         }
//     }
// }
newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
//1st home work is that change the color of x and Y.
