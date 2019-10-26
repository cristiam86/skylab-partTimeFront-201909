(function(){

  var gameState = gameLogic.initGame();
  var gameUiState = initUiState();

  function resetUiHands() {
    gameUiState = initUiState();
  }

  function setGameUiStatus(gameLogicState) {
    $_id('games-played-counter').innerHTML = gameLogicState.gamesPlayed;
    $_id('hand1-score').innerHTML = gameLogicState.score1;
    $_id('hand2-score').innerHTML = gameLogicState.score2;
    $_id('tie-score').innerHTML = getTieScore(gameLogicState);
    $_id('game-last-winner').innerHTML = getWinnerAsString(gameLogicState.lastPlayWinner);
    $_id('game-last-error').innerHTML = getErrorAsString(gameLogicState.lastPlayError);
  }

  Array.from($_class('player1-button')).forEach(function(button){
    button.addEventListener('click', function() {
      gameUiState.hand1 = this.dataset.move;
      checkGameResult(gameUiState);
    })
  })

  Array.from($_class('player2-button')).forEach(function(button){
    button.addEventListener('click', function() {
      gameUiState.hand2 = this.dataset.move;
      checkGameResult(gameUiState);
    })
  })

  function checkGameResult(uiState) {
    if (uiState.hand1 && uiState.hand2) {
      gameState = gameLogic.play(uiState.hand1, uiState.hand2, gameState);
      setGameUiStatus(gameState);
      resetUiHands();
    }
  }

  function initUiState() {
    return {
      hand1: null,
      hand2: null
    } 
  }

  function $_id(id){
    return document.getElementById(id);
  }

  function $_class(className){
    return document.getElementsByClassName(className);
  }

  function getWinnerAsString(winner) {
    if (winner === 'hand1') return 'HAND 1';
    else if (winner === 'hand2') return 'HAND 2';
    else return 'NONE';
  }

  function getErrorAsString(error) {
    return error ? 'ERROR' : 'NO ERROR';
  }

  function getTieScore(gameLogicState) {
    return gameLogicState.gamesPlayed - (gameLogicState.score1 + gameLogicState.score2);
  }

  setGameUiStatus(gameState);
})();