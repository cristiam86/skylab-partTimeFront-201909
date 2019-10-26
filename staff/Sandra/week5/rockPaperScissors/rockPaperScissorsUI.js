var gameLogic = require('./rockPaperScissorsLogic');

var gameState = gameLogic.initGame();

$('#games-played-counter-value').html(gameState.gamesPlayed);
$('#hand1-score-value').html(gameState.score1);

