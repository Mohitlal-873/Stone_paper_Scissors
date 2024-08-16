let userScore=0;
let compScore=0;
const choose = document.querySelectorAll(".choose");

const getCompCoice=()=>
{
    let list=["stone","paper","scissors"]
     let compCoice=Math.floor(Math.random()*3);
     return list[compCoice];
};
choose.forEach((ch)=>
    {
      ch.addEventListener("click",()=>
    {
      clickSound();
     const userChoice=ch.getAttribute("id");
      playGame(userChoice);  
    });
    });
const drawGame =()=>
{
    console.log("match is draw");
   msg.innerText=`match is draw`;
};
const winGame =()=>
{
    userScore++;
    msg.innerText=`user win `;
    user_score.innerText=`My Score : ${userScore}`;
};
const computerWin=()=>
{
    compScore++;
    msg.innerText=`Computer win `;
    comp_score.innerText=`Comp : ${compScore}`;
};
const playGame=(userChoice)=>
{
  let compChoice=getCompCoice();
  
  if( userChoice===compChoice)
  {
    drawGame();
  }
  else if(userChoice==="stone" && compChoice==="scissors")
  {
   winGame();
   finalMsg();
  }
  else if(userChoice==="paper"&& compChoice==="stone")
  {
    winGame();
    finalMsg();
  }
  else if( userChoice==="scissors" && compChoice==="paper")
  {
    winGame();
    finalMsg();
  }
  else{
    computerWin();
    finalMsg();
  }
};
const finalMsg=()=>
{
  let msg_container=document.querySelector(".msg_container");
  if( userScore==5 )
  {
    msg_container.classList.add("win");
    msg.innerText=`you won this match`;
    user_score.innerText=`My Score : ${userScore=0}`;
    comp_score.innerText=`Comp : ${compScore=0}`; 
  winSound();  
  disablediv();
  }
  else if(compScore==5)
  {
    msg_container.classList.add("loose");

    msg.innerText=`You loose !`;
    comp_score.innerText=`Comp : ${compScore=0}`;
    user_score.innerText=`My Score : ${userScore=0}`;

    losesound();
    disablediv();
  }
};
function disablediv()
{
  let div =document.querySelectorAll(".choose");
  for( ch of div)
  {
    ch.classList.add("disabled");
  }
};
//countdown
let cnt =document.querySelector(".countDown");
let list2 = ["Stone","Paper","Scissors","go!"];
let countdownValue = 0;
let cntContainer=document.querySelector(".countDownContainer");

let updateCountDown =()=>
{
    cnt.innerHTML=list2[countdownValue];
    countdownValue++;
    if(countdownValue>4)
    {
        clearInterval(interval);
        cnt.remove();
       cntContainer.classList.add("hide");
    }
        
};
const interval =setInterval(updateCountDown,1100);
updateCountDown();
//audio
let clickAudio =new Audio("audio.mp3/mixkit-video-game-mystery-alert-234.wav");
let winAudio =new Audio("audio.mp3/mixkit-ethereal-fairy-win-sound-2019.wav");
let looseAudio= new Audio("audio.mp3/mixkit-retro-arcade-lose-2027.wav");
let countDownAudio = new Audio("audio.mp3/mixkit-race-countdown-1953.wav");

const winSound =()=>
{
  console.log("win play");
  winAudio.play();
};
const losesound=()=>
{
  console.log("loose play");
  looseAudio.play();
};
const clickSound=()=>
{
  console.log("click play");
  clickAudio.play();
};
let reloadSound=()=>
{
  console.log("cnt play");
  countDownAudio.play();
};
// reload
let refreshPage =()=>
  {
    location.reload();
  
  };
let btn =document.querySelector("#btn");
let main =document.querySelector("main");
btn.addEventListener("click",refreshPage);
let vanish =()=>
{
  main.classList.add("hide");
};
btn.addEventListener("click",vanish);



