var game =  {
    gamesplayer: 0,
    score1: 0,
    score2: 0,
}

function initGame(){
    return  {
        gamesplayer: 0,
        score1: 0,
        score2: 0,
    }
}


function play(hand1, hand2){


        // hand 1
        if(hand1 === 'paper' && hand2 === 'rock'){
            return 'hand1'

        }
        if(hand1 === 'rock' && hand2 === 'scissors'){
            return 'hand1'

        }
        if(hand1 === 'scissors' && hand2 === 'paper'){
            return 'hand1'

        }
        // hand 2
        if(hand1 === 'rock' && hand2 === 'paper'){
            return 'hand2'

        }
        if(hand1 === 'scissors' && hand2 === 'rock'){
            return 'hand2'

        }
        if(hand1 === 'paper' && hand2 === 'scissors'){
            return 'hand2'

        }
        // tie
        if( hand1 === hand2 ){
            return 'tie'
        }

    
}

module.exports = {
    initGame,
    play
}