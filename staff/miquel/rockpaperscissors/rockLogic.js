function initGame() {
    return {
        gamesPlayed: 0,
        score1: 0,
        score2: 0,
        lastPlayWinner: null,
        lastPlayStatus: null
    }
}

var WINS = {
    'paper': 'rock',
    'scissors': 'paper',
    'rock': 'scissors'
}
var PLAYS = ['rock', 'paper', 'scissors'];

function isValidHands(hand1, hand2) {
    if(!PLAYS.includes(hand1) || !PLAYS.includes(hand2))
        return false;
    return true
}

function checkPlay(hand1, hand2) {
    if(WINS[hand1] === hand2) return 'hand1';
    else if(WINS[hand2] === hand1) return 'hand2';

    return 'draw'
}

// WINS.paper gana a rock por lo que si hand2 es rock -> gana hand1
function play(hand1, hand2) {
    if(!isValidHands(hand1, hand2)) return 'error';
    return checkPlay(hand1, hand2);
}

module.exports = {
    initGame,
    play
}