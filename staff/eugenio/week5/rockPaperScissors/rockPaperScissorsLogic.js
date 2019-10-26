function initGame(){
  return {
    gamesPlayed: 0,
    score1: 0,
    score2: 0
  }
}

const PLAYS = ['rock', 'paper', 'scissors']
var WINS = {
  'paper': 'rock',
  'scissors': 'paper',
  'rock': 'scissors'
};

function checkPlay(hand1, hand2) {
  if(WINS[hand1] === hand2) return 'hand1';
  else if(WINS[hand2] === hand1) return 'hand2';
    
  return 'tie';
}


function play(hand1, hand2){

  if(typeof hand1 !== 'string' || typeof hand2 !== 'string'){ return 'incorrect format';}

  if(!PLAYS.includes(hand1) || !PLAYS.includes(hand2)){return 'options incorrect selected';}

  if(hand1 === 'paper' && hand2 === 'rock'){ return 'hand1';}

  if(hand1 === 'scissors' && hand2 === 'paper'){ return 'hand1';}

  if(hand1 === 'rock' && hand2 === 'scissors'){return 'hand1';}

  if(hand1 === 'rock' && hand2 === 'paper'){return 'hand2';}

  if(hand1 === 'scissors' && hand2 === 'rock'){return 'hand2';}

  if(hand1 === 'paper' && hand2 === 'scissors'){return 'hand2';}

  if(hand1 === hand2){return 'tie';}
}

module.exports = {
  initGame,
  play
}


