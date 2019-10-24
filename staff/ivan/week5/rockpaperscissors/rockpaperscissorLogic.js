var initGame = function(){
    return {gamesPlayed:0,score1:0,score2:0}
}

var play = function(selection1,selection2){
    var options = ['rock','paper','scissors'];
    var trial = function(a,b){
    switch(true){
        case selection1==="rock" && selection2==="paper":
            return "hand1";
        case selection1==="paper" && selection2==="rock":
            return "hand2";
        default:
            console.log("a");
        }
    }
}

module.exports = {initGame, play}

