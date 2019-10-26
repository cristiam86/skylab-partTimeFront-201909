function initGame() {
    return {
        gamesPlayed: 0,
        score1: 0,
        score2: 0
    }
}

function play(hand1, hand2) {
    var posiblesVal = ['rock','paper','scissors'];
    
    var incluye1 = posiblesVal.includes(hand1);
    var incluye2 = posiblesVal.includes(hand2);

    if(!incluye1){
        return 'introduce un valor valido';
    }
    if(!incluye2){
        return 'introduce un valor valido';
    }

    switch (hand1) {
        case 'rock':
            switch (hand2) {
                case 'rock':
                    return 'ninguno';
                    break;
                case 'paper':
                    return 'hand2';
                    break;
                case 'scissors':
                    return 'hand1';
                    break;
            }
            break;
        case 'paper':
            switch (hand2) {
                case 'rock':
                    return 'hand1';
                    break;
                case 'paper':
                    return 'ninguno';
                    break;
                case 'scissors':
                    return 'hand2';
                    break;
            }
            break;
        case 'scissors':
            switch (hand2) {
                case 'rock':
                    return 'hand2';
                    break;
                case 'paper':
                    return 'hand1';
                    break;
                case 'scissors':
                    return 'ninguno';
                    break;
            }
            break;
    }
}

// module.exports = {
//     initGame,
//     play
// }