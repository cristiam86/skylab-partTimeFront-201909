
//for the program to work, run the function runAirlines() with an "onclick" event.

var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

var counter = flights.length;

//Class for creating flights
function Flight(id,to,from,cost,scale){
	this.id = id;
	this.to = to;
	this.from = from;
	this.cost = cost;
	this.scale = scale;
}

function validateInteger(input){
	if(input == null || isNaN(input) || input.length < 1){
		console.log('Wrong input, not a number.');
		return false;
	} else{
		return parseInt(input);
	}
}

function validateString(input){
	if(input == null || input.length < 1){
		console.log('Wrong input, not a text.');
		return false;
	} else{
		return input;
	}
}

function getObjectFromId(list, id){
	//this actually returns both the object and index, but we just need the index.
	let object = list.filter(obj => { return obj.id === id} );
	let index = list.findIndex(obj => obj.id === id )
	return [object, index];
}

function determinePriceExtremes(list){
	let prices = [];
	for (i in list){
		prices[prices.length] = (list[i].cost);
	}
	console.log(prices);
	return extremes = [Math.max(...prices), Math.min(...prices)];
}

function welcome(){
	let name = prompt('Please enter your name:');
	if(name == null || name.length==0){
		name = 'stranger';
	}

	console.log('Hello '+name+', welcome to Airline Services!')
	return name;
}

function requestRole(){
	let role = prompt("Enter 'u' if you're USER or 'a' if you're ADMIN:");
	if(role == null || role != 'a' || role.length==0){
		role = 'user';
	}
	else{
		role = "admin"
	}

	console.log("You're logged as "+role)
	return role;
}

function printFlights(){ //We can re-use this each time we want to see the updated list
	let totalValue = 0;
	let scaleCount = 0;
	for (n in flights){
		console.log('Vuelo '+flights[n].id+
			', Origen: '+flights[n].from+
			', Destino: '+flights[n].to+
			', con un coste de '+flights[n].cost
			+' euros. El vuelo '+(flights[n].scale ? 'realiza escalas.' : 'no realiza escalas.'));
		totalValue += flights[n].cost;
		scaleCount += (flights[n].scale ? 1 : 0);
	};
	console.log('El coste medio de los vuelos es '+parseInt(totalValue/flights.length)+' euros');
	console.log(parseInt(scaleCount)+' vuelos realizan escalas.');
};

function runAirlines(){
	welcome();
	printFlights();
	let role = requestRole();

	switch (role){
		case 'admin':
		  while(true){
		  	let action = prompt("Enter 'a to add flight, 'd' to delete flight or 'x' to end.");
		  	switch(action){
		  		case 'a': //in case the admin decides to ADD NEW FLIGHT
		  		  if (counter >= 15){
		  		  	alert("Exceded limit of flights! Must delete.");
		  		  	break;
		  		  }
		  		  else{
		  		  	flights[flights.length] = new Flight(counter, "Chicago", "Paris", 5000, true);
		  		  	counter += 1; //affects global variable to not overwrite flights.
		  		  	printFlights();
		  		  	break;
		  		  }
		  		case 'd': //in case the admin decides to DELETE
		  		  id = validateInteger(prompt("Please, end the id number to delete:"));
		  		  if(id==false){
		  		  	break;
		  		  } else{
		  		  	let idToRemove = getObjectFromId(flights, id);
		  		  	flights.splice(idToRemove[1], 1); //splice to remove by index
		  		  	console.log("Removed flight!")
		  		  	printFlights();
		  		  }
		  		default: //if user doesn't choose either to ADD or DELETE
		  		  break;
		  	}
		  	break; //breaks the while loop
		  }
		  break; //breaks the switch-case 'admin' so it doesn't execute the default
		  //part of the normal switch/case structure

		default: //this happens only if the user does not select ADMIN.
		  let extremes = determinePriceExtremes(flights);
		  console.log("The highest price is "+extremes[0]+", the lowest is "+extremes[1]);
		  break;
	}
};

runAirlines();

