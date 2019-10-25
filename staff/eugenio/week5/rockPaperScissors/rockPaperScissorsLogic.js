function initGame(){
  return {
    gamesPlayed: 0,
    score1: 0,
    score2: 0,
    lastPlayWinner: null,
    lastPlayError: false
  }

}

var WINS = {
  'paper': 'rock',
  'scissors': 'paper',
  'rock': 'scissors'
};

var PLAYS = ['rock', 'paper', 'scirssors']


function areValidHands(hand1, hand2){
  if(!PLAYS.includes(hand1) || !PLAYS.includes(hand2)){
    return false;
  }
  return true;
}

function checkPlay(hand1, hand2){
  if(WINS[hand1] === hand2) return 'hand1';
  else if(WINS[hand2] === hand1) return 'hand2';
  return 'tie';
}

function play(hand1, hand2, gameState){
  if(!areValidHands(hand1, hand2))
   return {
    gamesPlayed: gameState.gamesPlayed + 1,
    score1: gameState.score1,
    score2: gameState.score2,
    lastPlayWinner: null,
    lastPlayError: true
   }
  var winner = checkPlay(hand1, hand2);
  if(winner === 'tie'){
    return {
    gamesPlayed: gameState.gamesPlayed + 1,
    score1: gameState.score1,
    score2: gameState.score2,
    lastPlayWinner: null,
    lastPlayError: false
    }
  } else if(winner === 'hand1'){ 
    return {
      gamesPlayed: gameState.gamesPlayed + 1,
      score1: gameState.score1 +1,
      score2: gameState.score2,
      lastPlayWinner: 'hand1',
      lastPlayError: false
    }
  } else {
    return {
      gamesPlayed: gameState.gamesPlayed + 1,
      score1: gameState.score1 +1,
      score2: gameState.score2,
      lastPlayWinner: 'hand2',
      lastPlayError: false
    }
  }
}

/*
function play(hand1, hand2){
  
  if(hand1 == 'paper' && hand2 == 'rock'){
    return 'hand1';
  }else if(hand1 == 'scissors' && hand2 == 'paper'){
    return 'hand1';
  }else if(hand1 == 'rock' && hand2 == 'scissors'){
    return 'hand1';
  }else if(hand1 == 'rock' && hand2 == 'paper'){
    return 'hand2';
  }else if(hand1 == 'scissors' && hand2 == 'rock'){
    return 'hand2';
  }else if(hand1 == 'paper' && hand2 == 'scissors'){
    return 'hand2';
  }else if(hand1 == 'rock' && hand2 == 'rock'){
    return 'tie';
  }else if(hand1 == 'scissors' && hand2 == 'scissors'){
    return 'tie';
  }else if(hand1 == 'paper' && hand2 == 'paper'){
    return 'tie';
  }else if(typeof hand1 == string && typeof hand2 == string){
    return 'correct format';
  }
}
*/
module.exports = {
  initGame,
  play
}
