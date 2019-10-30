class RpsUi extends RpsLogic {
    constructor() {
        super();
    }
    checkGameStatus(hand1, hand2) {

        const result = this.play(hand1, hand2);
        if(result !== 'error') {
            
            this.gamesPlayed += 1;
            this.lastPlayStatus = result;
            this.playerScores1.push(hand1);
            this.playerScores2.push(hand2);
            
            this.updateScoreTable(this);
            this.scorePersistance();
        }
    }
    setScoreTable() {
        $('tbody tr').remove();
    
        for(let i = 0; i < this.playerScores1.length; i++) {
    
            const hand1 = this.playerScores1[i];
            const hand2 = this.playerScores2[i];
            const result = this.checkPlay(hand1, hand2);
            let classHand1 = '';
            let classHand2 = '';
            
            if(result === 'hand1') {
                classHand1 = 'class="won"';
                classHand2 = 'class="lost"'
            } 
            
            if(result === 'hand2') {
                classHand1 = 'class="lost"';
                classHand2 = 'class="won"'
            }
    
            $('tbody').append(`
            <tr>
                <th>Partida ${i+1}</th>
                <td ${classHand1}>${hand1}</td>
                <td ${classHand2}>${hand2}</td>
            </tr>`);
        }
    
        this.addNewRow();
    }
    updateScoreTable() {
        const handTxt1 = $(this.playerScores1).last()[0];
        const handTxt2 = $(this.playerScores2).last()[0];
        const rowCell1 = $('tbody tr:last td:eq(0)');
        const rowCell2 = $('tbody tr:last td:eq(1)');
        
        rowCell1.html(handTxt1);
        rowCell2.html(handTxt2);
        
        if(this.lastPlayStatus === 'hand1') {
            rowCell1.attr('class', 'won');
            rowCell2.attr('class', 'lost');
        }
        
        if(this.lastPlayStatus === 'hand2') {
            rowCell2.attr('class', 'won');
            rowCell1.attr('class', 'lost');
        }
    
        this.addNewRow();
    }
    addNewRow() {
        $('tbody').append(`
        <tr>
            <th>Partida ${this.gamesPlayed+1}</th>
            <td></td>
            <td></td>
        </tr>`);
        
        $('.window').scrollTop($('.window')[0].scrollHeight);
    }
    scorePersistance() {
        localStorage.setItem('playerScores1', this.playerScores1);
        localStorage.setItem('playerScores2', this.playerScores2);
    }
    
    checkPersistance() {
        
        let playerScores1 = localStorage.getItem('playerScores1');
        let playerScores2 = localStorage.getItem('playerScores2');
    
        if(playerScores1 && playerScores2) {
            playerScores1 = playerScores1.split(',');
            playerScores2 = playerScores2.split(',');
            
            const result = this.checkPlay($(playerScores1).last()[0], $(playerScores2).last()[0]);
            
            this.gamesPlayed = playerScores1.length;
            this.playerScores1 = playerScores1;
            this.playerScores2 = playerScores2;
            this.lastPlayStatus = result;
    
            this.setScoreTable();
        }
    }

    resetPersistance() {
        localStorage.clear();
    }
}

//let this = gameLogic.initGame();

const a = new RpsUi();
console.log(a);

a.checkPersistance();

$('button').click(function(elem) {
    const handJugador = this.dataset.hand;
    const handComputer = a.computerPlay();

    a.checkGameStatus(handJugador, handComputer);
});

//a.resetPersistance();