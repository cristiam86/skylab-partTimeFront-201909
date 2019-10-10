//function to create an array of arrays for the bingo card (each inner array represents a line)
let makeCardboard = function(lines, line_length){
	let card = [];
	for(let i=0; i<lines; i++){
		card[i] = [];
		for(let n=0; n<line_length; n++){
			card[i][n] = Math.floor((Math.random() * (lines*line_length)) + 1);
		}
	}
	return card;
}

var players = [];

let generateRandom = function(base){
	let random = Math.floor((Math.random() * base) + 1);
	return random;
}

//to check if all items on an array are the same.
let validateEquals = function(array, value){
	let bool = array.every(element => element === value);
	return bool;
}

//prints out the contents of the cardboard, line by line
let printStatus = function(card){
	for(i in card){
		console.log(card[i]);
	}
}

let printPlayers = function(array){
	for (i in array){
		console.log(array[i]);
	}
}

let returnPoints = function(turns){
	switch(true){
		case turns<=8:
		  return 30;
		case (turns<=15):
		  return 25;
		case turns<=20:
		  return 10
		case turns<=25:
		  return 8;
		case turns<=30:
		  return 6;
		default:
		  return 1;
	}
}

function runBingo(){

	let player = prompt("Enter your name: ");
	let turns = 0;
	let points = 0;
    let cardboard = makeCardboard(3,5);

	while(true){
		let bingo = false;
		printStatus(cardboard);
		turn = confirm('Draw number?');
		if(turn){
			draw = generateRandom(15); //generates a number
		    console.log(draw);
		    turns += 1
			for(line in cardboard){
				if (cardboard[line].indexOf(draw)>-1){
					console.log("There's a match on line "+line);
					cardboard[line][cardboard[line].indexOf(draw)] = 'x'; //replaces the drawn number with an x.
					points += returnPoints(turns);
					if(validateEquals(cardboard[line], 'x')){
						console.log("BINGO! Number of turns was "+turns);
						players[players.length] = {"name":player, "turns":turns, "points":points};
						printPlayers(players);
						bingo = true;
						break;
					}
				}
				else{
					console.log("No match on line "+line)
				}
			}
			if(bingo){
				break;
			}
		} else{
			console.log('Game ended');
			break;
		}
	}
}

runBingo();
