
var resultControl = {
    total: 0,
    hand1: 0,
    hand2: 0,
    tie: 0,
    lastWinner: null
}

function loadLocalStorage(){
    if (localStorage.getItem("RPSdata") !== null){
        var localString = JSON.parse(localStorage.getItem("RPSdata"))
        resultControl = localString
    }
}

loadLocalStorage()
debugger
// faltaria recuperar les coses de localStorage al començar i refrescar la pàgina

function play() {

    var hand1 = ''
    var hand2 = ''
    
    selectRPS()

    var winFirstHandOpt1 = this.hand1 === 'paper' && this.hand2 === 'scissors';
    var winFirstHandOpt2 = this.hand1 === 'scissors' && this.hand2 === 'rock';
    var winFirstHandOpt3 = this.hand1 === 'rock' && this.hand2 === 'paper';
    var winSecondHandOpt1 = this.hand1 === 'paper' && this.hand2 === 'rock';
    var winSecondHandOpt2 = this.hand1 === 'scissors' && this.hand2 === 'paper';
    var winSecondHandOpt3 = this.hand1 === 'rock' && this.hand2 === 'scissors';
    var tieOption = this.hand1 === this.hand2;


    if (this.hand1 === null || this.hand2 === null) {
        alert('Select both!!!')

    } else {
        if (winFirstHandOpt1 || winFirstHandOpt2 || winFirstHandOpt3) {
            resultControl.total = resultControl.total + 1;
            document.getElementById('gamesPlayed').innerHTML = resultControl.total;
            resultControl.hand1 = resultControl.hand1;
            document.getElementById('score1').innerHTML = resultControl.hand1;
            resultControl.hand2 = resultControl.hand2 + 1;
            document.getElementById('score2').innerHTML = resultControl.hand2;
            resultControl.tie = resultControl.tie;
            document.getElementById('tie').innerHTML = resultControl.tie;
            resultControl.lastWinner = 'HAND2'
            document.getElementById('winner').innerHTML = resultControl.lastWinner;
        }

        if (winSecondHandOpt1 || winSecondHandOpt2 || winSecondHandOpt3) {
            resultControl.total = resultControl.total + 1;
            document.getElementById('gamesPlayed').innerHTML = resultControl.total;
            resultControl.hand1 = resultControl.hand1 + 1;
            document.getElementById('score1').innerHTML = resultControl.hand1;
            resultControl.hand2 = resultControl.hand2;
            document.getElementById('score2').innerHTML = resultControl.hand2;
            resultControl.tie = resultControl.tie;
            document.getElementById('tie').innerHTML = resultControl.tie;
            resultControl.lastWinner = 'HAND1'
            document.getElementById('winner').innerHTML = resultControl.lastWinner;
        }

        if (tieOption) {
            resultControl.total = resultControl.total + 1;
            document.getElementById('gamesPlayed').innerHTML = resultControl.total;
            resultControl.hand1 = resultControl.hand1;
            document.getElementById('score1').innerHTML = resultControl.hand1;
            resultControl.hand2 = resultControl.hand2;
            document.getElementById('score2').innerHTML = resultControl.hand2;
            resultControl.tie = resultControl.tie + 1;
            document.getElementById('tie').innerHTML = resultControl.tie;
            resultControl.lastWinner = 'TIE'
            document.getElementById('winner').innerHTML = resultControl.lastWinner;
        }
    }

    restartControl()
    localStorage.setItem("RPSdata", JSON.stringify(resultControl));
}


//////This should be UI////////

function restartControl() {
    var ele = document.getElementsByName("player1");
    for (var i = 0; i < ele.length; i++)
        ele[i].checked = false;
        hand1 = null
    var ele = document.getElementsByName("player2");
    for (var i = 0; i < ele.length; i++)
        ele[i].checked = false;
        hand2 = null
}

function resetGame() {
    resultControl.total = 0;
    document.getElementById('gamesPlayed').innerHTML = resultControl.total;
    resultControl.hand1 = 0;
    document.getElementById('score1').innerHTML = resultControl.hand1;
    resultControl.hand2 = 0;
    document.getElementById('score2').innerHTML = resultControl.hand2;
    resultControl.tie = 0;
    document.getElementById('tie').innerHTML = resultControl.tie;
    resultControl.lastWinner = null;
    document.getElementById('winner').innerHTML = resultControl.lastWinner;
    
    localStorage.removeItem("RPSdata");
}

function selectRPS() {
    var memo1 = document.getElementsByName('player1');
    for (i = 0; i < memo1.length; i++) {
        if (memo1[i].checked) {
            var hand1selected = memo1[i].value;
            hand1 = hand1selected;
        }
    }

    var memo2 = document.getElementsByName('player2');
    for (i = 0; i < memo2.length; i++) {
        if (memo2[i].checked) {
            var hand2selected = memo2[i].value;
            hand2 = hand2selected;
        }
    }

    return { hand1, hand2 }
}

function randomPlay(){
    var options = ['rock', 'paper', 'scissors']
    var randomNum = Math.floor(Math.random() * options.length)
    
    return document.getElementsByName('player2')[randomNum].checked = true;
        //,play()
     
}


