// UI functions.
const get = (id) => {
    let elem = document.getElementById(id);
    return elem;
}

const updateResults = (obj) => {
    get("gamesPlayed").innerHTML = obj.gamesPlayed;
    get("score1").innerHTML = obj.score1;
    get("score2").innerHTML = obj.score2;   
}

let temp = ['rock','scissors'];

//EXECUTION...

//makes instance
const g = new Game();

console.log(g);

get('run').addEventListener("click", function(){
    currentWinner = g.play(temp[0], temp[1]);
    updateResults(g);
});





