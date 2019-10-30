
var hand = ['paper', 'scissors', 'rock'];

var WINS = {
    'paper': 'rock',
    'scissors': 'paper',
    'rock': 'scissors'
};


initGame();


var data = {
        gamesPlayed: 0,
        score1: 0,
        score2: 0,
        ties: 0,
        previousWin: null
};

 function initGame (a , b){
    play(a, b);
    console.log(data);
 }


function play (hand1, hand2){
    if (hand1 === 'paper' && hand2 ==='paper' || hand1 === 'rock' && hand2 ==='rock' || hand1 === 'scissors' && hand2 ==='scissors'){
        data = {
            gamesPlayed: data.gamesPlayed + 1,
            score1: data.score1,
            score2: data.score2,
            ties: data.ties + 1,
            previousWin: 'tie'
        }   
    }
    if (hand1 === 'paper' && hand2 === 'rock'){
         data = {
            gamesPlayed: data.gamesPlayed +1,
            score1: data.score1 +1,
            score2: data.score2,
            ties: data.ties,
            previousWin: 'hand1'
        }    
    } 
    if (hand1 === 'rock' && hand2 === 'scissors'){
        data = {
            gamesPlayed: data.gamesPlayed +1,
            score1: data.score1 +1,
            score2: data.score2,
            ties: data.ties,
            previousWin: 'hand1'
        }   
    } 
    if (hand1 === 'scissors' && hand2 === 'paper'){
        data = {
            gamesPlayed: data.gamesPlayed +1,
            score1: data.score1 +1,
            score2: data.score2,
            ties: data.ties,
            previousWin: 'hand1'
        }   
    }
     if (hand1 === 'rock' && hand2 === 'paper'){
        data = {
            gamesPlayed: data.gamesPlayed + 1,
            score1: data.score1,
            score2: data.score2 + 1,
            ties: data.ties,
            previousWin: 'hand2'
        }   
    } 
     if (hand1 === 'scissors' && hand2 === 'rock'){
        data = {
            gamesPlayed: data.gamesPlayed + 1,
            score1: data.score1,
            score2: data.score2 + 1,
            ties: data.ties,
            previousWin: 'hand2'
        }   

    } 
     if(hand1 === 'paper' && hand2 === 'scissors'){
        data = {
            gamesPlayed: data.gamesPlayed + 1,
            score1: data.score1,
            score2: data.score2 + 1,
            ties: data.ties,
            previousWin: 'hand2'
        }   
    } 
}




// Random number
// function getRandomArbitrary(max) {
//     return Math.floor(Math.random() * max);
// }

// module.exports = {
//     initGame,
//     play
// }