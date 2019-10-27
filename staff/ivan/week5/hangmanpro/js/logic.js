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

const checkValidInput = (letter,array)=> {
    //works only if letter is string over 1 length and is not used already.
    if(letter.length>0 && !array.includes(letter)){
        return letter;
    } else{
        return "Invalid or repeated input.";
    }
}

const processLetter = (char, string, placeholder)=>{
    if(string.includes(char)){
        mod_placeholder = '';
        for(let i in string){
            if(placeholder[i]==="_"){
                if(string[i] === char){
                    mod_placeholder += char;
                } else{
                    mod_placeholder += "_";
                }            
            } else{
                mod_placeholder += placeholder[i];
            }
        }
        return [char, mod_placeholder];        
    } else{
        return "No match for this letter.";
    }
}

class Hangman{
    constructor(){
        this.score = 0;//starts on 0 by default.
        //this.word = randomWord(words);
        this.word = "pizza";
        this.placeholder = buildPlaceholder(this.word);
        this.attempts = 7;
        this.usedLetters = [];
        this.usedWords = [];      
    }

    processInput(letter){
        let char = checkValidInput(letter.toLowerCase(), this.usedLetters);
        if(char==="Invalid or repeated input."){
            console.log("Repeated or invalid input.");
            return char;
        }
        let result = processLetter(char,this.word,this.placeholder)
        if(result==="No match for this letter."){
            console.log("No match for this letter!");
            this.attempts -= 1;
            return char;
        }
        this.usedLetters.push(result[0]);
        this.placeholder = result[1];
    }
}
