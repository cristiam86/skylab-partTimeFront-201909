const hangmanWords = ['Marcelo', 'Modric', 'Courtois', 'Hazard', 'Benzema', 'Casemiro', 'Varane', 'Carvajal', 'Vinicius']
            let wordRandom = Math.floor(Math.random() * (9 - 0)) + 0;
            let word = hangmanWords[wordRandom]
            let wordToGuess = word.split('');
            let guessing = wordToGuess.map(function(){return '_'});
            let lives = word.length -2;
            console.log(Array.from(word));