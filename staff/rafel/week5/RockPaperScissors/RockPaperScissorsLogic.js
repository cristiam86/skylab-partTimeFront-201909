function initGame() {
    return {
        gamesPlayed: 0,
        score1: 0,
        score2: 0,
        tie: 0
    }
}
// I need to checking the errr, but I think is not necessary because of de button
// var PLAYS = ['rock', 'paper', 'scissors'];

function play(hand1, hand2, gameState){

    //comprovar si les dues mans son correctes

    var winFirstHandOpt1 = hand1 === 'paper' && hand2 === 'scissors';
    var winFirstHandOpt2 = hand1 === 'scissors' && hand2 === 'rock';
    var winFirstHandOpt3 = hand1 === 'rock' && hand2 === 'paper';
    var winSecondHandOpt1 = hand1 === 'paper' && hand2 === 'rock';
    var winSecondHandOpt2 = hand1 === 'scissors' && hand2 === 'paper';
    var winSecondHandOpt3 = hand1 === 'rock' && hand2 === 'scissors';

    
    if (winFirstHandOpt1|| winFirstHandOpt2 || winFirstHandOpt3){
        return {
            gamesPlayed: gamesState.gamesPlayed +1,
            score1: gamesState.score1,
            score2: gamesState.score2 +1,
            tie: gameState.tie
        } 
    } 

    if (winSecondHandOpt1 || winSecondHandOpt2 || winSecondHandOpt3){
        return {
            gamesPlayed: gamesState.gamesPlayed +1,
            score1: gamesState.score1 +1,
            score2: gamesState.score2, 
            tie: gameState.tie
        } 
    } 

    if (hand1 === hand2){
        return {
            gamesPlayed: gamesState.gamesPlayed +1,
            score1: gamesState.score1,
            score2: gamesState.score2, 
            tie: gameState.tie +1
        } 
    }
}

const gameLogic = {
    initGame,
    play
  };

  module.exports = gameLogic;
//cada button hauria de fer el setdata quan es premi el button


//això ho farem quan hagem de fer el test  des del TERMINAL
//quan estiguem en prova al navegador ja no podem
/*module.exports = {
    initGame,
    play

}*/