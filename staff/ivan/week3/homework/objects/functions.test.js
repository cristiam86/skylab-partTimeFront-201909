var chevy = new Car('Chevrolet', 'Optra', 'Silver');
chevy.message();
var seat = new Car('Seat', 'Leon', 'black');
seat.message();


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

console.log("TCL: just_removed", just_removed)
console.log(stack_a);
stack_a.print();




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
console.log("TCL: list1", list1)
list1.getElement(2);
list1.print();
