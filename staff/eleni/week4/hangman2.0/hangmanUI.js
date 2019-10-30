var gameState = gameLogic.initGame();

function setGameUiStatus(gameLogicState) {
    $_id('word-to-guess').innerHTML = getWord(words);
    getWord(words) = renewWord(word);
    $_id('input-guess').value = gameLogicState.input;
    $_id('error-text').innerHTML = gameLogicState.errorText;
    $_id('success-text').innerHTML = gameLogicState.successText;
    $_id('stickman').innerHTML = "<img src=\"https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif\" width=\"400px\" height=\"150px\">";
    $_id('guess-form').addEventListener('submit', checkLetter);
    $_id('submit-button').addEventListener('click', guessWord);
    $_id('reset-button').addEventListener('click', initGame, renewWord);
}

function checkLetter(uiState) {
    if (uiState.input && uiState.word) {
        gameState = gameLogic.checkLetter(uiState.input, uiState.word, gameState);
        setGameUiStatus(gameState);
        initGame();
    }
}

function guessWord(uiState) {
    if (uiState.input && uiState.word) {
        gameState = gameLogic.guessWord(uiState.input, uiState.word, gameState);
        setGameUiStatus(gameState);
        initGame();
    }
}

function renewWord(word) {
    let newWord = word.toLowerCase().split('');
    return newWord.map(function() { return '_' })
}

function $_id(id) {
    return document.getElementById(id);
}

setGameUiStatus(gameState);