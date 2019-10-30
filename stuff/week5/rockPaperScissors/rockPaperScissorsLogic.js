
function initGame() {
  return {
    gamesPlayed: 0,
    score1: 0,
    score2: 0,
    lastPlayWinner: null,
    lastPlayError: false
  }
}


function play(hand1, hand2, gameState) {
  if (!areValidHands(hand1, hand2)) {
    return {
      gamesPlayed: gameState.gamesPlayed + 1,
      score1: gameState.score1,
      score2: gameState.score2,
      lastPlayWinner: null,
      lastPlayError: true
    }
  }
  var winner = checkPlay(hand1, hand2);
  if(winner === 'tie') {
    return {
      gamesPlayed: gameState.gamesPlayed + 1,
      score1: gameState.score1,
      score2: gameState.score2,
      lastPlayWinner: 'tie',
      lastPlayError: false
    }
  } else if(winner === 'hand1') {
    return {
      gamesPlayed: gameState.gamesPlayed + 1,
      score1: gameState.score1 + 1,
      score2: gameState.score2,
      lastPlayWinner: 'hand1',
      lastPlayError: false
    }
  } else {
    return {
      gamesPlayed: gameState.gamesPlayed + 1,
      score1: gameState.score1,
      score2: gameState.score2 + 1,
      lastPlayWinner: 'hand2',
      lastPlayError: false
    }
  }
}


var WINS = {
  'paper': 'rock',
  'scissors': 'paper',
  'rock': 'scissors'
};

var PLAYS = ['rock', 'paper', 'scissors'];

function areValidHands(hand1, hand2) {
  if(!PLAYS.includes(hand1) || !PLAYS.includes(hand2)) {
    return false;
  }
  return true;
}

function checkPlay(hand1, hand2) {
  if(WINS[hand1] === hand2) return 'hand1';
  else if(WINS[hand2] === hand1) return 'hand2';
    
  return 'tie';
}
const gameLogic = {
  initGame,
  play
};
module.exports = gameLogic;
