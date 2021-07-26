'use strict';

//selecting the dom elements
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
const totalScore0=document.getElementById('score--0');
const totalScore1=document.getElementById('score--1');

const currScore0=document.getElementById('current--0');
const currScore1=document.getElementById('current--1');

const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');


totalScore0.textContent=0;
totalScore1.textContent=0;
diceEl.classList.add('hidden');

const scores=[0,0];
let activePlayer=0;
let currScore=0;
let isPlaying=true;

const switchPlayers= function(){
    currScore=0;
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer= activePlayer===0?1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}


//implementing the roll dice btn
btnRoll.addEventListener('click',function(){
    if(isPlaying){

        let dice=Math.trunc(Math.random()*6)+1;
        diceEl.classList.remove('hidden');
        diceEl.src=`dice-${dice}.png`;

        if(dice!=1){
            currScore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent=currScore;
        }else{
            switchPlayers();
        }
    }
});

// implementing the hold button
btnHold.addEventListener('click',function(){
    if(isPlaying){
 
        scores[activePlayer]+=currScore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

        if(scores[activePlayer]>=50){
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            isPlaying=false;
        }
        else{
            switchPlayers();
        }
    }
});

// Implementing the newgame button
btnNew.addEventListener('click',function(){
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    player0.classList.add('player--active');
    totalScore1.textContent=0;
    totalScore0.textContent=0;
    currScore0.textContent=0;
    currScore1.textContent=0;
    activePlayer=0;
    isPlaying=true;
    scores[0]=scores[1]=0;
    currScore=0;



})





