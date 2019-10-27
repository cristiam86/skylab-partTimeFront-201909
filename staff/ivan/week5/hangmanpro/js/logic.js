//returns a random number between 0 and max.
const replaceOnPlaceholder = (string,character,placeholder) => {
    mod_placeholder = '';
    for(let letter in string){
        if(placeholder[letter]==="_"){
            if(string[letter] === character){
                mod_placeholder += character;
            } else{
                mod_placeholder += "_";
            }            
        } else{
            mod_placeholder += placeholder[letter];
        }
    }
    return mod_placeholder;
}

const buildPlaceholder = (string) => {
    let placeholder = '';
    for(let letter in string){
        placeholder += "_";
    }
    return placeholder;
}

const randomNumber = (max) => {
    return Math.floor(Math.random() * max);
}
//returns a random word from an array of objects.
const randomWord = (array) => {
    return array[randomNumber(array.length)].word;
}

class Hangman{
    constructor(){
        this.score = 0;//starts on 0 by default.
        this.word = randomWord(words);
        this.placeholder = buildPlaceholder(this.word);
        this.attempts = 7;
        this.usedLetters = [];
        this.usedWords = [];      
    }
}

g = new Hangman();
console.log(g);