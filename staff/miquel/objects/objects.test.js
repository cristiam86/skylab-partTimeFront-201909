var errors = 0;

var obj1 = {}
var objOutput = isObject(obj1);
if(!objOutput) {
  errors += 1;
  console.error("1. objOutput should have be an object");
}

var car1 = objCar('Seat', 'León', 'black');
if(!car1.AI().includes("My")) {
  errors += 1;
  console.error("2. it should output the brand, model and color of the car");
}

console.log("- STACK -");
var filo1 = new Stack();
filo1.insertElement("1");
filo1.insertElement("2");
filo1.insertElement("3");
console.log("output: ", filo1.getElement());
console.log("remaining: ", filo1.print());
if(typeof filo1.print() !== "string") {
    errors += 1;
    console.error("3. it should output the requested element");
}

console.log("- QUEUE -");
var fifo1 = new Queue();
fifo1.insertElement("1");
fifo1.insertElement("2");
fifo1.insertElement("3");
console.log("output: ", fifo1.getElement());
console.log("remaining: ", fifo1.print());
if(typeof fifo1.getElement("1") !== "string") {
    errors += 1;
    console.error("4. it should output the requested element");
}

console.log("- LINKEDLIST -");

var list1 = new LinkedList();

var node1 = new Node("John", 0)
var node2 = new Node("Ringo", 1);
var node3 = new Node("George", 0);
var node4 = new Node("Paul", 1);

list1.insertElement(node1, 0);
list1.insertElement(node2, 1);
/*list1.insertElement(node3, 0);
list1.insertElement(node4, 1);
*/
//console.log("getElement: ", list1.getElement(2));
console.log("print: ", list1.print());

/*if(typeof list1.getElement("1") !== "string") {
    errors += 1;
    console.error("5. it should output the requested element");
}*/



console.log("- BLOCKCHAIN -");
var skylabBC = new BlockChain();
var block1 = new Block({name: "transacción #1", type: "transaction"});
console.log("TCL1: ", block1.data());
var block2 = new Block(["transacción #2", "transaction"]);
console.log("TCL2: ", block2.data());
var block3 = new Block("transacción #3");
console.log("TCL3: ", block3.data());
var block4 = new Block("transacción #4");
skylabBC.addBlock(block1);
skylabBC.addBlock(block2);
skylabBC.addBlock(block3);
skylabBC.addBlock(block4);
//console.log(skylabBC.blocks);


if (errors){
  console.error(errors + " ERROR(S) FOUND");
} else {
  console.log("CONGRATS!!!");
}