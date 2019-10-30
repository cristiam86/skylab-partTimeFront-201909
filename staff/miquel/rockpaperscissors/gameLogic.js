class RpsLogic {
    
    constructor() {
        this.gamesPlayed = 0;
        this.playerScores1 = [];
        this.playerScores2 = [];
        this.playerWon1 = 0;
        this.playerWon2 = 0;
        this.lastPlayWinner = null;
        this.lastPlayStatus = null;
    }
    
    WINS = {
        'paper': 'rock',
        'scissors': 'paper',
        'rock': 'scissors'
    }
    PLAYS = ['rock', 'paper', 'scissors'];
    
    isValidHands(hand1, hand2) {
        if(!this.PLAYS.includes(hand1) || !this.PLAYS.includes(hand2))
            return false;
        return true
    }
    
    checkPlay(hand1, hand2) {
        if(this.WINS[hand1] === hand2) return 'hand1';
        else if(this.WINS[hand2] === hand1) return 'hand2';
    
        return 'draw'
    }
    
    computerPlay() {
        const rand = Math.floor(Math.random() * Math.floor(this.PLAYS.length));
        return this.PLAYS[rand];
    }
    
    // WINS.paper gana a rock por lo que si hand2 es rock -> gana hand1
    play(hand1, hand2) {
        if(!this.isValidHands(hand1, hand2)) return 'error';
        return this.checkPlay(hand1, hand2);
    }
}

// function initGame() {
//     return {
//         gamesPlayed: 0,
//         playerScores1: [],
//         playerScores2: [],
//         playerWon1: 0,
//         playerWon2: 0,
//         lastPlayWinner: null,
//         lastPlayStatus: null
//     }
// }

// var WINS = {
//     'paper': 'rock',
//     'scissors': 'paper',
//     'rock': 'scissors'
// }
// var PLAYS = ['rock', 'paper', 'scissors'];

// function isValidHands(hand1, hand2) {
//     if(!PLAYS.includes(hand1) || !PLAYS.includes(hand2))
//         return false;
//     return true
// }

// function checkPlay(hand1, hand2) {
//     if(WINS[hand1] === hand2) return 'hand1';
//     else if(WINS[hand2] === hand1) return 'hand2';

//     return 'draw'
// }
// function computerPlay() {
//     const rand = Math.floor(Math.random() * Math.floor(PLAYS.length));
//     return PLAYS[rand];
// }

// // WINS.paper gana a rock por lo que si hand2 es rock -> gana hand1
// function play(hand1, hand2) {
//     if(!isValidHands(hand1, hand2)) return 'error';
//     return checkPlay(hand1, hand2);
// }

// const gameLogic = {
//     initGame,
//     play
//   };

// //module.exports = gameLogic;