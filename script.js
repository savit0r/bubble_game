var score=0;
var timer =60;
var hitrn=0;
function makeBubble(){
var clutter = "";

for(var i =1;i<155;i++){
    var rn = Math.floor(Math.random()*10);
    clutter +=`<div id="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTImer(){
   var timeInt= setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").innerHTML=timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML=` <h1>TOTAL SCORE : ${score}</h1>`;
            clearInterval(timeInt);
        }
     },1000);
    

}

function getNewHit(){
     hitrn =Math.floor(Math.random()*10);
     document.querySelector("#hitval").innerHTML=hitrn;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").innerHTML=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNumber=(Number(dets.target.innerHTML));
    if(clickedNumber===hitrn){
     increaseScore();
     getNewHit();
     makeBubble();
    }
});

  

makeBubble();
runTImer();
getNewHit();
