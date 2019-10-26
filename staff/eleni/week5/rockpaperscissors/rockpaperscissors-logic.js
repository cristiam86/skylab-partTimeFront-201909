var paper = "paper";
var scissors = "scissors";
var rock = "rock";
var tie = "tie";

var game = {
    gamesPlayed: 0,
    score1: 0,
    score2: 0,
    lastPlayWinner: null,
    lastPlayError: null
}

function initGame() {
    return game;
}

function play(hand1, hand2) {
    if (hand1 === paper && hand2 === rock) {
        game.gamesPlayed++
            game.score1++
            return 'hand1';
    } else if (hand1 === paper && hand2 === scissors) {
        game.gamesPlayed++
            game.score2++
            return 'hand2';
    } else if (hand1 === hand2) {
        return tie;
    } else if (hand1 === scissors && hand2 === paper) {
        game.gamesPlayed++
            game.score1++
            return 'hand1';
    } else if (hand1 === scissors && hand2 === rock) {
        game.gamesPlayed++
            game.score2++
            return 'hand2';
    } else if (hand1 === rock && hand2 === paper) {
        game.gamesPlayed++
            game.score2++
            return 'hand2';
    } else if (hand1 === rock && hand2 === scissors) {
        game.gamesPlayed++
            game.score1++
            return 'hand1';
    }
}
/*
var WINS={
    'paper':'rock',
    'scissors':'paper',
    'rock':'scissors'
}
var PLAYS=['rock','paper','scissors'];

function areValidHands(hand1,hand2){
    if(!PLAYS.includes(hand1)||!PLAYS.includes(hand2)){
        return false;
    }
    return true;
}
function checkPlay(hand1,hand2){
    if(WINS[hand1]===hand2) return 'hand1';
    else if(WINS[hand2]===hand1) return 'hand2';
    return 'tie';
}

function play(hand1,hand2,gameState){
    if(!areValidHands(hand1,hand2)) {
        return{
            gamesPlayed:gameState+1,
            score1:gameState.score1,
            score2:gameState.score2,
            lastPlayError:true,
            lastPlayWinner:null
        }
    }
    var winner=checkPlay(hand1,hand2);{
    if(winner==='tie'){
        return{
            gamesPlayed:gameState.gamesPlayed+1,
            score1:gameState.score1,
            score2:gameState.score2,
            lastPlayError:false,
            lastPlayWinner:'tie'
        }
    }else if(winner===hand1){
        return{
            gamesPlayed:gameState.gamesPlayed+1,
            score1:gameState.score1,
            score2:gameState.score2,
            lastPlayError:false,
            lastPlayWinner:'hand1'
    }
    }else if(winner===hand2){
        return{
                gamesPlayed:gameState+1,
                score1:gameState.score1,
                score2:gameState.score2,
                lastPlayError:false,
                lastPlayWinner:'hand2'
        }
    }  
}
var gameLogic ={
    initGame,
    play
}
*/