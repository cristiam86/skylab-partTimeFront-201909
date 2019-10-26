function initGame() {
    return game = {
        gamesPlayed: 0,
        score1: 0,
        score2: 0,
        tie: function(gamesPlayed, score1,score2){
            return tie = gamesPlayed - score1 - score2
        } 

    }
}

function play(hand1, hand2){

    //comprovar si les dues mans son correctes

    var winFirstHandOpt1 = hand1 === 'paper' && hand2 === 'scissors';
    var winFirstHandOpt2 = hand1 === 'scissors' && hand2 === 'rock';
    var winFirstHandOpt3 = hand1 === 'rock' && hand2 === 'paper';
    var winSecondHandOpt1 = hand1 === 'paper' && hand2 === 'rock';
    var winSecondHandOpt2 = hand1 === 'scissors' && hand2 === 'paper';
    var winSecondHandOpt3 = hand1 === 'rock' && hand2 === 'scissors';

    
    if (winFirstHandOpt1|| winFirstHandOpt2 || winFirstHandOpt3){
        //score2 +1
        //gamesPlayed +1
        return 'hand2'        
    } 

    if (winSecondHandOpt1 || winSecondHandOpt2 || winSecondHandOpt3){
        //score1 +1
        //gamesPlayed +1
        return 'hand1'
    } 

    if (hand1 === hand2){
        //gamesPlayed +1
        return 'tie'
    }
}

//every turn push up 1 gamesPlayed
//increse score for each hand
//cada button hauria de fer el setdata quan es premi el button


//això ho farem quan hagem de fer el test  des del TERMINAL
//quan estiguem en prova al navegador ja no podem
/*module.exports = {
    initGame,
    play

}*/