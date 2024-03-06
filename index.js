"use strict"
// randomNumber
let randomNumber=Math.trunc(Math.random() * 20  + 1);

let score=20;



// CHECK BTN
document.querySelector('.check').addEventListener("click",function(){
// guessNumber
let guessNumber=Number( document.querySelector('.guess').value);

if(!guessNumber){
    document.querySelector('.message').textContent= 'No Number'
}
// correct guess
else if(guessNumber === randomNumber){
    document.querySelector('.number').textContent= randomNumber;
    document.querySelector('.number').style.width=("30rem")

    document.querySelector("body").style.backgroundColor=("#60b347");
    document.querySelector('.message').textContent= 'Correct Answer'

}
// low
else if(guessNumber < randomNumber){
    if(score>0){
        document.querySelector('.message').textContent= ' too low';
        score--;
        document.querySelector(".score").textContent=score
    }
    else{
        
        document.querySelector('.message').textContent= 'You Lost the Game' 
        document.querySelector("body").style.backgroundColor=("red");
    }

}
// high
else if(guessNumber > randomNumber){
    if(score>0){
        document.querySelector('.message').textContent= ' too high';
        score--;
        document.querySelector(".score").textContent=score
    }
    else{
        document.querySelector('.message').textContent= 'You Lost the Game' 
        document.querySelector("body").style.backgroundColor=("red");
    }

}


})

// again btn
document.querySelector('.again').addEventListener("click",function(){
    // bg
    document.querySelector("body").style.backgroundColor=("#222");
    // score
    score=20;
    document.querySelector(".score").textContent=score
    // msg
    document.querySelector('.message').textContent= 'Start guessing...'
    // ?
    document.querySelector('.number').textContent="?"
    // empty input
    document.querySelector('.guess').value='';
    // width
    document.querySelector('.number').style.width=("15rem");



})

