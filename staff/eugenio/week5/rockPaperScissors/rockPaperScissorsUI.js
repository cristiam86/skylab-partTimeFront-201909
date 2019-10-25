var gameLogic = require('./rockPaperScissorsLogic.js');

var gameState = gameLogic.initGame();
$_id('games-plaed-counter').innerHTML = gameState.gamesPlayed;
function $_id(id){
  return document.getElementById(id);
}

function $_class(className){
  return document.getElementsByClassName(className);
}