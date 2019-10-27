// UI functions.
const get = (id) => {
    let elem = document.getElementById(id);
    return elem;
}

//executions

var game = new Hangman();

//on player submitting a letter, do this...
get('guess_form').addEventListener('submit',()=>{
    let char = get("input_guess").value;
    let message = game.processInput(char);
    if(message){
        get('status').innerHTML=message;
    } else{
        get('status').innerHTML="Match!";
    }
    console.log(game);
});