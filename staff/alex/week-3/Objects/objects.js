//isObject
//Write a JavaScript function to check whether an input is an object or not.

function isObject(input) {
  return typeof (input) === object;

}

// Create object car
//Write an object that represents a car with three properties: brand, model, color. Add a method that shows the following message: 'My black Seat León is great!' (Hint: use this)

//Use literal notation, and object constructor notation.

var car = {
  brand: "Seat",
  model: "León",
  color: "black",
  mycar: function () {
    return "My " + this.color + " " + this.brand + " " + this.model + " is great!";
  }

}

console.log(car.mycar());

//Stack
//Create an object that manages a data structure following the stack principles FILO (first in last out) which means, the first object to be inserted should be the last to be pulled out.

//The object should have its constructor new Stack() and the following methods:

//insertElement(element): inserts an element into the stack
//getElement(): retrieves the corresponding element from the stack
//print(): prints the stack as comma-separated string elements
//Queue

function Stack() {

  this.elements = [],
    this.insertElement =
    function (element) {
      this.elements.push(element)
    }
  this.getElement =
    function () {
      this.elements.pop();
    }
  this.print =
    function () {
      console.log(this.elements)
    }
};

var test = new Stack()

test.print()

test.insertElement("rellotge")
test.insertElement("corretja")
test.getElement()

test.print()

//Queue

function Queue() {

  this.elements = [],
    this.insertElement =
    function (element) {
      this.elements.unshift(element)
    }
  this.getElement =
    function () {
      this.elements.shift();
    }
  this.print =
    function () {
      console.log(this.elements)
    }
};

var test = new Queue()

test.print()

test.insertElement("rellotge")
test.insertElement("corretja")
test.insertElement("agulla")
test.getElement()

test.print()

//Linked List

function Node(data, prev) {
  this.data = data;
  this.prev = prev;
}

function LinkedList() {
  this.start = mull;
  this.insertElement = function(element, insertIndex) {
    var index = 0
    var current = null;
    var previous = null;
    if (this.start = null) {
      this.start = element; 
    } else {
      current = this.start;
      if(index === insertIndex && current !== null) {
        element.next = current;
        this.start = element;

      }
    }

  }
this.getElement = function(index) {
if (element === null)
return 0
}

this.print = function() {

}
}
this.recursivePrint = function(element) {
  if (element === null){
return ''
} else {

  return element.data + this.recursivePirnt(element.next)
}
}





var l = new LinkedList();
var n1 = new Node('a');
var n2 = new Node('b');
l.insertElement(n1,0); // a
l.insertElement(n2,0);// a,b
var listPrinted = l.print();

if(listPrinted !== 'b, a') {
  console.log("ERROR")
}