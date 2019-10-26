var initGame = function(){
    return {gamesPlayed:0,score1:0,score2:0}
}

var WINS = {
    "paper":"rock",
    "scissors":"paper",
    "rock":"scissors"
}

var PLAYS = ["rock","paper","scissors"];

var areValidHands = function(hand1,hand2){
    if(!PLAYS.includes(hand1) || !PLAYS.includes(hand2)){
        return false;
    }
    return true;
}

var checkPlay = function(hand1,hand2){
    if(WINS[hand1]===hand2) return "hand1";
    else if(WINS[hand2]===hand1) return "hand2";
    return "tie";
}

var play = function(selection1,selection2){
    if(!areValidHands(selection1,selection2)){
        return "error!";
    }
    return checkPlay(selection1,selection2);
}

module.exports = {initGame, play}