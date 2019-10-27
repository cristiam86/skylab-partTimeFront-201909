
function initGame() {
    return {
      //gamesPlayed: 0,
      gamesNumber: 0,
      //score1: 0,
      ResultA: 0,
      //score2: 0,
      ResultB: 0,
      //lastPlayWinner: null,
      playerWin: null,
    }
  }
  
  // WINS
  // jugadas ganadoras
  var JUGADASGANADORAS = {
    'paper': 'rock',
    'scissors': 'paper',
    'rock': 'scissors'
  };
  
  //var PLAYS = ['rock', 'paper', 'scissors'];
  // tipos de manos o jugadas
  var JUGADAS = ['paper', 'rock', 'scissors'];


  // validador de jugadores
  /*function areValidHands(hand1, hand2) {
    if(!PLAYS.includes(hand1) || !PLAYS.includes(hand2)) {
      return false;
    }
    return true;
  } */


// FUNCIÓN VALIDADORA
 function validadorJugadores(hand1, hand2) {
        if(JUGADAS.includes(hand1) || JUGADAS.includes(hand2)) {
        return true;
        }
        return false;
    } 

  
  function checkPlay(playerA, playerB) {
    // si la gugada ganadora sobre playerA es igual a player b = retorna PLayerA como ganador
    if(JUGADASGANADORAS[playerA] === playerB) return 'playerA';
    else if(JUGADASGANADORAS[playerB] === playerA) return 'playerB';
    
    return 'tie';
  }
  
  function play(hand1, hand2, gameState) {
    if (validadorJugadores(hand1, hand2)) {
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
  
  const gameLogic = {
    initGame,
    play
  };
  module.exports = gameLogic;
  