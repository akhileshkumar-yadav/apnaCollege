let gameSeq = [];
let userSeq = [];

let btns = ["green", "yellow", "purple", "blue"];
let keyPress = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (!keyPress) {
        console.log("button was clicked");
        keyPress = true;
        levelUp();
    }
});

function btnFlash(box) {
    box.classList.add("flash");
    setTimeout(function() {
        box.classList.remove("flash");
    }, 500);
}
function userFlash(box) {
    box.classList.add("userFlash");
    setTimeout(function() {
        box.classList.remove("userFlash");
    }, 500);
}

function levelUp() {
    userSeq =[];
    level++;
    h3.innerText = `Level ${level}`;
    
    // Generate a random button from the array
    let randomIndex = Math.floor(Math.random()*3); // Fix index issue
    let randomBtn = btns[randomIndex];
    let randbtn = document.querySelector(`.${randomBtn}`);
    // console.log(randomIndex);
    // console.log(randomBtn);
    // console.log(randbtn);
    gameSeq.push(randomBtn)
    // console.log(gameSeq);
    
    
    btnFlash(randbtn)
}
 function checkAns() {
    // console.log("curr level :",level);
    let idx = level-1
    if (gameSeq[idx] === userSeq[idx]) {
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000)
        }
    }
    else{
        h3.innerHTML = `Game Over! your scrore <b>${level}</b> pree any`;
        document.querySelector("body".style.backgroundColor = "red");
        setTimeout(()=> {
            document.querySelector("body".style.backgroundColor = "red");
        } ,150)
        reset();
    }
}

function btnPress() {
    let btn = this;
    console.log(this);
    userFlash(btn)
    userColor = btn.getAttribute("id");
    userSeq.push(userColor)
    // console.log(userSeq);
    checkAns(userSeq.length-1);
    
    
}

let allbtn = document.querySelectorAll(".box");
 for (const btn of allbtn) {
    btn.addEventListener("click",btnPress);
 }

 function reset () {
    start = false;
    gameSeq = [];
    userSeq = [];
    level= 0;

 }