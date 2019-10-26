
var hand = ['paper', 'scissors', 'rock'];
var hand1 = hand[getRandomArbitrary(hand.length)];
var hand2 = hand[getRandomArbitrary(hand.length)];
var gamesPlayed = 0;
var score1 = 0;
var score2 = 0;
console.log(hand1);
console.log(hand2);


initGame();
function initGame (){
    play(hand1, hand2);
}

function play (hand1, hand2){

    if (hand1 === 'paper' && hand2 ==='paper' || hand1 === 'rock' && hand2 ==='rock' || hand1 === 'scissors' && hand2 ==='scissors'){
        return 'tie';
    }
    if (hand1 === 'paper' && hand2 === 'rock'){
        score1 += 1;
        return 'hand1';
    } 
    if (hand1 === 'rock' && hand2 === 'scissors'){
        score1 += 1;
        return 'hand1';
    } 
    if (hand1 === 'scissors' && hand2 === 'paper'){
        score1 += 1;
        return 'hand1';
    }
     if (hand1 === 'rock' && hand2 === 'paper'){
        score2 += 1;
        return 'hand2';
    } 
     if (hand1 === 'scissors' && hand2 === 'rock'){
        score2 += 1;
        return 'hand2';
    } 
     if(hand1 === 'paper' && hand2 === 'scissors'){
        score2 += 1;
        return 'hand2';
    } 
}


function getRandomArbitrary(max) {
    return Math.floor(Math.random() * max);
}

module.exports = {
    initGame,
    play
}