
var gameState=gameLogic.initGame();
$_id('games-played-counter').innerHTML=gameState.gamesPlayed;

function $_id(id){
    return document.getElementById(id);
}
function $_class(className){
    return document.getElementById(className);
}