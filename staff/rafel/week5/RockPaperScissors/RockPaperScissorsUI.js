(function(){

var gameState = gameLogic.initGame();

var handsChosen = handInitial();

function setGameUiStatus(gameLogicState) {

    $('#gamesPlayed').html(gameLogicState.gamesPlayed)
    $('#score1').html(gameLogicState.score1)
    $('#score2').html(gameLogicState.score2)
    $('#tie').html(gameLogicState.tie)
}

Array.from($('.player1-button')).forEach(function(button){
    button.addEventListener('click', function() {
      handsChosen.hand1 = this.dataset.move;
      checkGameResult(handsChosen);
    })
})

Array.from($('.player1-button')).forEach(function(button){
    button.addEventListener('click', function() {
      handsChosen.hand2 = this.dataset.move;
      checkGameResult(handsChosen);
    })
})

function checkGameResult(uiState) {
    if (uiState.hand1 && uiState.hand2) {
      gameState = gameLogic.play(uiState.hand1, uiState.hand2, gameState);
      setGameUiStatus(gameState);
      //resetUiHands();
    }
  }

function handInitial(){
    return {
        hand1: null,
        hand2: null
    }
}

setGameUiStatus(gameState);
})();

//saber quantes partides s'han jugat - cada nova ronda +1
//sumar partides guanyades de cada mà a l'SCORE
//partides empatades seran gamesPlayed - hand1 + hand2



























/*module.exports = {
    initGame,
    play

}*/
