    let boxes = document.querySelectorAll(".button");
    let resetbtn = document.querySelector("#reset");
    let winpattern =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    function disablebtn(){
        boxes.forEach((box)=>{
            box.disabled=true;
        })
    }
    let player1=true;
    let winnerfound=false;
    let movecount=0;
    function showwinner(winner){
        msg.textContent=`Congratulations the winner is:${winner}`;
        disablebtn();
    }
    function showdrawn(){
        msg.textContent=`Oops!the game is drawn :)`;
    }
    function checkwinner(){
        for(let pattern of winpattern){
            let pos1=boxes[pattern[0]].textContent;
            let pos2=boxes[pattern[1]].textContent;
            let pos3=boxes[pattern[2]].textContent;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if((pos1===pos2)&&(pos2===pos3)){
                console.log("Congratulations,you are the winner:",pos1);
                disablebtn();
                winnerfound=true;
                showwinner(pos1);
            }
        }
        }
        if(movecount===9&&!winnerfound){
            console.log("the game is drawn");
            showdrawn();
        }
    }
    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            console.log("the button is clicked");
            if(player1){
                box.textContent="X";
                player1=false;
                box.disabled=true;
            }
            else{
                box.textContent="O";
                player1=true;
                box.disabled=true;
            }
            movecount++;
            checkwinner();
        });
    })
resetbtn.addEventListener("click",resetfunc);
function resetfunc(){
    boxes.forEach((box)=>{
        box.disabled=false;
        player1=true;
        box.textContent="";
        movecount=0;
        winnerfound=false;
        msg.textContent='Game';
    })
}



