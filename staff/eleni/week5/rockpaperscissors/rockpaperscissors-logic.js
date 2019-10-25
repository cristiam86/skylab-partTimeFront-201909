var paper="paper";
var scissors="scissors";
var rock="rock";
var tie="tie";

var game=  {
    gamesPlayed:0,
    score1:0,
    score2:0
}
function initGame(){
    return game;
}
function play(hand1,hand2){
    if(hand1===paper && hand2===rock){
        game.gamesPlayed++
        game.score1++
        return 'hand1';
    }else if(hand1===paper && hand2===scissors){
        game.gamesPlayed++
        game.score2++
        return 'hand2';
    }else if(hand1===hand2){
        return tie;    
    }else if(hand1===scissors && hand2===paper){
        game.gamesPlayed++
        game.score1++
        return 'hand1';
    }else if(hand1===scissors && hand2===rock){
        game.gamesPlayed++
        game.score2++
        return 'hand2';
    }
    else if(hand1===rock && hand2===paper){
        game.gamesPlayed++
        game.score2++
        return 'hand2';
    }else if(hand1===rock && hand2===scissors){
        game.gamesPlayed++
        game.score1++
        return 'hand1';
    }
}
module.exports ={
    initGame,
    play
}