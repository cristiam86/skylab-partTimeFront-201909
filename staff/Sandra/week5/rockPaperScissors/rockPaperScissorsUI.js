(function(){

var gameState = gameLogic.initGame();
var gameHands = setGameHands();

function setUIGame(gameState){
    $('#games-played-counter').html(gameState.gamesPlayed);
    $('#hand1-score').html(gameState.score1);
    $('#hand2-score').html(gameState.score2);
    $('#game-last-winner').html(getPlayWinner(gameState.lastPlayWinner));
    $('#game-last-error').html(getPlayStatus(gameState.lasPlayStatus));
    $('#game-ties').html(getGamesTies(gameState));
}

function getGamesTies(gameState){
    return gameState.gamesPlayed - (gameState.score1 + gameState.score2);
}

function getPlayStatus(status){
    return status ? 'ERROR' : 'NO ERROR';
}

function getPlayWinner(playWinner){
    if (playWinner === 'hand1') return 'HAND 1'
    else if (playWinner === 'hand2') return 'HAND 2'
    else return 'NONE'
}

function checkResult(game) {
    if (game.hand1 && game.hand2) {
      gameState = gameLogic.play(game.hand1, game.hand2, gameState);
      setUIGame(gameState);
      gameHands = setGameHands();
    }
  }

$('button').click(function () {
    gameHands.hand1 = this.dataset.btn;
    checkResult(gameState);
})

function setGameHands(){
    return {
            hand1: null, 
            hand2: null
        }
}

setUIGame(gameState);

})();