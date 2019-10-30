function initGame(){   
    var game = {
        gamesPlayed: 0,
        score1: 0,
        score2: 0,
        lastPlayWinner: null,
        lasPlayStatus: false
    }
    //si existe localStorage Recupero informacion
    localStorage.setItem("RPSData", JSON.stringify(game));
    return game;

}

var WINS = {
    'paper':'rock',
    'scissors': 'paper',
    'rock': 'scissors'
}

var PLAYS = ['rock','paper','scissors'];

function areValidHands(hand1, hand2){
    if (!PLAYS.includes(hand1) || !PLAYS.includes(hand2)){   
        return false;
    }
    return true;
}

function checkPlay(hand1, hand2, gameState){
    if (WINS[hand1] === hand2) {
        return { 
            gamesPlayed: gameState.gamesPlayed + 1,
            score1: gameState.score1 + 1,
            score2: gameState.score2,
            lastPlayWinner: 'hand 1',
            lasPlayStatus: false
        }
    }
    else if (WINS[hand2] === hand1) {
        return { 
            gamesPlayed: gameState.gamesPlayed + 1,
            score1: gameState.score1,
            score2: gameState.score2 + 1,
            lastPlayWinner: 'hand 2',
            lasPlayStatus: false
        }
    }

    return { 
        gamesPlayed: gameState.gamesPlayed + 1,
        score1: gameState.score1,
        score2: gameState.score2,
        lastPlayWinner: null,
        lasPlayStatus: false
    }
}

function play(hand1, hand2, gameState){   
   if (!areValidHands(hand1,hand2)){
    return { 
        gamesPlayed: gameState.gamesPlayed + 1,
        score1: gameState.score1,
        score2: gameState.score2,
        lastPlayWinner: null,
        lasPlayStatus: true
    }
   } 
    return checkPlay(hand1, hand2, gameState);
}

const gameLogic = {
    initGame,
    play
 };

/*module.exports = {
    initGame,
    play
}*/