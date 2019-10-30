function initGame() {
    const gameStatusStorage = localStorage.getItem('gameStatus');
    if (gameStatusStorage) {
        return JSON.parse(gameStatusStorage);
    }
    return {
        gamesPlayed: 0,
        score1: 0,
        score2: 0,
        lastPlayWinner: null,
        lastPlayError: false
    }
}
var WINS = {
    'paper': 'rock',
    'scissors': 'paper',
    'rock': 'scissors'
};
var PLAYS = ['rock', 'paper', 'scissors'];

function areValidHands(hand1, hand2) {
    if (!PLAYS.includes(hand1) ||  !PLAYS.includes(hand2)) {
        return false;
    }
    return true;
}

function checkPlay(hand1, hand2) {
    if (WINS[hand1] === hand2) return 'hand1';
    else if (WINS[hand2] === hand1) return 'hand2';

    return 'tie';
}

function play(hand1, hand2, gameState) {

    if (!areValidHands(hand1, hand2)) {
        const result = {
            gamesPlayed: gameState.gamesPlayed,
            score1: gameState.score1,
            score2: gameState.score2,
            lastPlayWinner: null,
            lastPlayError: true
        }
        localStorage.setItem('gameStatus', JSON.stringify(result));
        return result;
    }
    var winner = checkPlay(hand1, hand2);
    if (winner === 'tie') {
        result = {
            gamesPlayed: gameState.gamesPlayed + 1,
            score1: gameState.score1,
            score2: gameState.score2,
            lastPlayWinner: 'tie',
            lastPlayError: false,
        }
        localStorage.setItem('gameStatus', JSON.stringify(result));
        return result;

    } else if (winner === 'hand1') {
        result = {
            gamesPlayed: gameState.gamesPlayed + 1,
            score1: gameState.score1 + 1,
            score2: gameState.score2,
            lastPlayWinner: 'hand1',
            lastPlayError: false,
        }
        localStorage.setItem('gameStatus', JSON.stringify(result));
        return result;

    } else {
        result = {
            gamesPlayed: gameState.gamesPlayed + 1,
            score1: gameState.score1,
            score2: gameState.score2 + 1,
            lastPlayWinner: 'hand2',
            lastPlayError: false
        }
        localStorage.setItem('gameStatus', JSON.stringify(result));
        return result;
    }
}

const gameLogic = {
    initGame,
    play
};
module.exports = gameLogic;