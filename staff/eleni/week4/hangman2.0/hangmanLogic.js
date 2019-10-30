const words = ["Mars", "Venus", "Mercury", "Pluto", "Jupiter", "Neptune", "Earth", "Saturn", "Uranus"];

function initGame() {
    const gameStatusStorage = localStorage.getItem('gameStatus');
    if (gameStatusStorage) {
        return JSON.parse(gameStatusStorage);
    }
    return {
        gamesPlayed: 0,
        score: 0,
        lastPlayError: false,
        errorText: null,
        successText: null,
        inputGuess: null,
        lives: 3,
        word: getWord(words)
    }
}

function getWord(words) {
    Array.prototype.randomElement = function() {
        return this[Math.floor(Math.random() * this.length)];
    }
    return words.randomElement();
}

function renewWord(word) {
    let newWord = word.toLowerCase().split('');
    return newWord.map(function() { return '_' })
}

function guessWord(word, input, gameState) {
    if (word === input) {
        const result = {
            gamesPlayed: gameState.gamesPlayed + 1,
            score: gameState.score + 1,
            lastPlayError: false,
            errorText: null,
            successText: "totalSuccess",
            inputGuess: null,
            lives: 3,
            image: "totalSuccessImage",
        }
        localStorage.setItem('gameStatus', JSON.stringify(result));
        return result;
    } else {
        const result = {
            gamesPlayed: gameState.gamesPlayed + 1,
            score: gameState.score - 1,
            lastPlayError: true,
            errorText: "totalFailure",
            successText: null,
            inputGuess: null,
            lives: 0,
            image: "totalFailureImage",
        }
        localStorage.setItem('gameStatus', JSON.stringify(result));
        return result;
    }
}

function checkLetter(word, input, gameState) {
    if (word.includes(input)) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] == input) {
                word.splice(i, 1, input);
            }
            word.innerHTML = word.join(" ");
        }
        const result = {
            gamesPlayed: gameState.gamesPlayed + 1,
            score: gameState.score + 1,
            lastPlayError: false,
            errorText: null,
            successText: "success",
            inputGuess: null,
            lives: 3,
            image: "successImage",
        }
        localStorage.setItem('gameStatus', JSON.stringify(result));
        return result;
    } else {
        const result = {
            gamesPlayed: gameState.gamesPlayed + 1,
            score: gameState.score,
            lastPlayError: true,
            errorText: "failure",
            successText: null,
            inputGuess: null,
            lives: gameState.lives - 1,
            image: "failureImage"
        }
        localStorage.setItem('gameStatus', JSON.stringify(result));
        return result;

    }
}

const gameLogic = {
    initGame,
    guessWord,
    getWord,
    checkLetter,
    renewWord
};

module.exports = gameLogic;