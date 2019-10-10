// functions for CALCULATOR 

//Performas calculations and returns an array with sum,sub,mul,div
function doCalcs(list){

	let sum = 0;
	let sub = 0;
	let mul = 1;
	let div = 1;

	//perform repetitve operations for each of the members of the provided numbers
	for (i in list){
		sum += list[i];
		sub -= list[i];
		mul *= list[i];
		div /= list[i];
	};

	//clean up results, only 3 decimals, and pass into an array
	let results = [parseFloat(sum.toFixed(3)),
	  parseFloat(sub.toFixed(3)),
	  parseFloat(mul.toFixed(3)),
	  parseFloat(div.toFixed(3))];
	return results;
};

//Starts calculator on a loop, taking inputs and running the calcs function
function run_calculator(){
	
	let acc = [];
	let numbers = [];
	let results = '';

	while (true){
		var input = prompt("Enter number: ");

		if(input==='n' || input === null){
			console.log('Calculator ended');
			break;
		}

		else if(input==='y' && numbers.length){
			acc[acc.length] = results;
			numbers = [];
			for (i in acc){
				console.log(acc[i]);
			}
			console.log('Reset calculator');
			continue;
		}

		else if (isNaN(input) || input.length){
			console.log('Input must be a number!');
			continue;
		}

		else{
			  numbers[numbers.length] = parseFloat(input);
			  console.log(numbers);			  
			  results = (doCalcs(numbers));
			  console.log("Sum: "+results[0]+", Sub: "+results[1]+", Mult: "+results[2]+", Div: "+results[3]);
		
		var con = confirm();	  
		};
	};
};

run_calculator();
