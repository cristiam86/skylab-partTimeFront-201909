
function initGame() {
    return {
      //gamesPlayed: 0,
      gamesCounter: 0,
      //score1: 0,
      resultA: 0,
      //score2: 0,
      resultB: 0,
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



  
  function checkPlay(playerA, playerB) {
    // si cualquiera de las jugadas ganadoras sobre un player es igual al otro.
    if(JUGADASGANADORAS[playerA] === playerB) return 'playerA';
    else if(JUGADASGANADORAS[playerB] === playerA) return 'playerB';

    // En caso que no sea así. devuelve un empate
    return 'tie';
  }
  
  // FUNCIÓN DEL JUEGO
  function play(playerA, playerB, gameState) {

    var ganador = checkPlay(playerA, playerB);


    if(ganador === 'tie') {
      return {  
        gamesCounter: gameState.gamesCounter + 1,
        resultA: gameState.resultA,
        resultB: gameState.resultB,
        playerWin: 'tie'
      }
    } else if(ganador === 'playerA') {
      return {
        gamesCounter: gameState.gamesCounter +1,
        resultA: gameState.resultA +1,
        resultB: gameState.resultB,
        playerWin: 'playerA'
      }
    } else {
      return {
        gamesCounter: gameState.gamesCounter +1,
        resultA: gameState.resultA,
        resultB: gameState.resultB +1,
        playerWin: 'playerB'
      }
    }
  }
  
  const gameLogic = {
    initGame,
    play
  };
  module.exports = gameLogic;
  