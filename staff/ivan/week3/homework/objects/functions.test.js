console.log("CAR TESTS!")

var chevy = new Car('Chevrolet', 'Optra', 'Silver');
chevy.message();
var seat = new Car('Seat', 'Leon', 'black');
seat.message();

console.log("STACK Tests!")

var stack_a = new Stack();
stack_a.insertElement(1);
stack_a.insertElement("f");
stack_a.insertElement("foo");
stack_a.insertElement([1,2,3]);
stack_a.insertElement(7);
var just_removed = stack_a.getElement();

if(just_removed!==7){
	console.error("Error, expected 7");
} else{
	console.log("Correct, returns 7")
}

stack_a.print();

console.log("LINKED LISTS TESTS!")

var list1 = new LinkedList();
list1.insertElement(0);
list1.insertElement(1);
list1.insertElement(2);
list1.insertElement(3,10);//even with position 10, it will just be appended as the last.
list1.insertElement(4);
list1.insertElement(5); 
list1.insertElement("-2",2);
list1.insertElement("-4",4);
list1.insertElement(6);

if(list1.getElement(2).value==="-2"){
	console.log("OK! Expected return is -2");
} else{
	console.error("Error, expected return was -2");
}

list1.print();

console.log("BLOCKCHAIN TESTS!")

var blockchain1 = new Blockchain();
blockchain1.insertElement(0);
blockchain1.insertElement(1);
blockchain1.insertElement(2);
blockchain1.insertElement(3);
blockchain1.insertElement(4);
blockchain1.insertElement(5);
blockchain1.insertElement(6);
blockchain1.insertElement(7);
blockchain1.insertElement(8);
blockchain1.insertElement(9);
blockchain1.insertElement(9,5);
blockchain1.isValidChain()

console.log(blockchain1)