var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
]

var players = [];
var letters = [];
for (obj in questions){
	letters[letters.length] = questions[obj].letter;
}
console.log(letters)

function getObjectFromId(array, value){
	let index = array.findIndex(obj => obj.letter === value)
	return index;
}

let getQuestion = function(choice){
	let id = getObjectFromId(questions, choice);
	console.log("ID is "+id);
	console.log(questions[id]["question"]);
	return [id, questions[id]["question"]]
}

let processQuestion = function(ans, id){
	if(ans == questions[id]["answer"]){
		console.log("Correct! 1 point!");
		return 1;
	} else{
		console.log("Incorrect... 0 points")
		return 0;
	}
}

let runPasapalabra = function(){


	let n = prompt("Please enter your name"); //if canceled returns null as string
	if(n){
		let points = 0;
		let rounds = 0;
		console.log("Hello "+n);
		while(true){
			let choice = prompt("Remaining letters are: "+letters.toString()+"\nPlease select a letter from the alphabet:");
			if(choice){
				if(letters.indexOf(choice)===-1){
					console.log("Letter not in the list, please, pick again:");
					continue;
				}
				let q = getQuestion(choice);
				let a = prompt("Please select your answer:");
				if(a){
					if(a=="pasapalabra"){
						console.log("Next round");
						continue;
					} else if (a=="end"){
						console.log("Game finished.");
						break;						
					}
					let ans = a.toLowerCase();
					let res = processQuestion(ans, q[0]);
					points += res;
					rounds += 1;
					console.log("Total Points "+points);
					questions.splice(q[0], 1); //remove letters and questions if already used.
					letters.splice(q[0], 1);
				}else{
					console.log("No asnwer given.");
					continue;
				}
			}else{
				console.log("No choice, game ended.")
				break;
			}
		}
		if(letters.length === 0){
			console.log("Game completed!");
		}
		else{
			console.log("Game partially completed.");			
		}
		if(points>0){
			players[players.length] = {"p_name" : n, "p_points" : points, "success_rate" : points+"/"+rounds};
			console.log(players);
		}
	}
	else{
		console.log("No game.")
		return;
	}
}

runPasapalabra();