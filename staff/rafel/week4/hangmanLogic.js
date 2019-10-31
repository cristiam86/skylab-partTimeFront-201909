function playHangman() {
    var amountWords = ['DESCARTES', 'SPINOZA', 'KANT', 'FICHTE', 'LEIBNIZ', 'HUME', 'POPPER', 'MILL',
        'ARISTOTIL', 'PLATO', 'HERACLIT']
    var wordToGuess = []
    var guessing = []
    var life = []
    var word = []
    

    function randomWord() {
        var randomNum = Math.floor(Math.random() * amountWords.length)
        word = amountWords[randomNum]
        return word
    }
    // choose one word of the list and separate letters in a Array

    function addWord() {
        randomWord()
        wordToGuess = word.split('');
        guessing = wordToGuess.map(function () { return '_' })
        life = Math.round(wordToGuess.length / 1.5)
        document.getElementById('life').innerHTML = life
        document.getElementById('Attemps').innerHTML = 'Attemps'
        return document.getElementById('word-to-guess').innerHTML = guessing.join(' ');

    }

    function congratz() {
        if (guessing.includes('_') === false) {
            return document.getElementById('Attemps').innerHTML = 'YOU WIN!!'
        }
    }

    function death() {
        if (life === 0) {
            return document.getElementById('Attemps').innerHTML = 'YOU LOSE!!'
        }
    }

    // New Word restart game
    document.getElementById("newGame").onclick = addWord


    document.getElementById('guess-form').addEventListener('submit', checkLetter)
    //document.getElementById('submit-button').addEventListener('click', checkLetter)

    function checkLetter(event) {
        event.preventDefault(); // don't refresh webpage
        var letter = document.getElementById('input-guess').value;
        var inputLetter = letter.toUpperCase();

        //var position = wordToGuess.map((element,index) => element === inputLetter ? index : undefined).filter(x => x)
        //check if inputLetter exists on wordToGuess
        if (word.includes(inputLetter) === false) {
            life = life - 1;
            document.getElementById('life').innerHTML = life
            death()
        } else {
            var position = []
            for (var i = 0; i < wordToGuess.length; i += 1) {
                if (wordToGuess[i] === inputLetter) {
                    position.push(i)
                }
            }

            // replace matching letters with inputLetter
            for (var i = 0; i < position.length; i++) {
                guessing[position[i]] = inputLetter
            };
            congratz()
        }

        // Borrar contenido del input
        document.getElementById('input-guess').value = "";

        return document.getElementById('word-to-guess').innerHTML = guessing.join(' ')

        addWord()
        checkLetter()
    }
}
playHangman()
