// UI functions.
const get = (id) => {
    let elem = document.getElementById(id);
    return elem;
}

const updateResults = (obj, hand1, hand2) => {
    get("gamesPlayed").innerHTML = obj.gamesPlayed;
    get("score1").innerHTML = obj.score1;
    get("score2").innerHTML = obj.score2; 
    get("freqRock").innerHTML = `${obj.frequency["rock"]} times won. ${((obj.frequency["rock"]/obj.gamesPlayed)*100).toFixed(2)}% ocurrence`;
    get("freqPaper").innerHTML = `${obj.frequency["paper"]} times won. ${((obj.frequency["paper"]/obj.gamesPlayed)*100).toFixed(2)}% ocurrence`;
    get("freqScissors").innerHTML = `${obj.frequency["scissors"]} times won. ${((obj.frequency["scissors"]/obj.gamesPlayed)*100).toFixed(2)}% ocurrence`
    get("freqTie").innerHTML = `${obj.frequency["tie"]} results. ${((obj.frequency["tie"]/obj.gamesPlayed)*100).toFixed(2)}% ocurrence`
    get("hand1play").innerHTML = hand1;
    get("hand2play").innerHTML = hand2;
}

const randomPlay = (array) => { //returns an integer from 0 to 2
    return array[Math.floor(Math.random()*3)];
}

//EXECUTION...

//makes instance
const g = new Game();

get('run').addEventListener("click", ()=>{
    let [hand1,hand2] = [randomPlay(PLAYS),randomPlay(PLAYS)] //ES6
    g.play(hand1,hand2); 
    updateResults(g,hand1,hand2);
});





