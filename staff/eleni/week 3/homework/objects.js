//### isObject
function isObject(input) {
    if (typeof input === 'object' && input !== null) {
        return true
    } else {
        return false
    }
}
// ### Create object car
function Car(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.motto = function(color, model, brand) {
        return "My " + this.color + ' ' + this.brand + ' ' + this.model + " is great!"
    }
};
var car = new Car("Seat", "Leon", "black");
console.log(car.motto())

//### Stack
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    print() {
        var output = "";
        for (var i = 0; i < this.items.length; i++) {
            output += this.items[i] + " ";
        }
        return output;
    }
}

var stack = new Stack();
stack.push(10);
console.log(stack.print());

//### Queue
class Queue {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    shift() {
        return this.items.shift();
    }
    print() {
        var output = "";
        for (var i = 0; i < this.items.length; i++) {
            output += this.items[i] + " ";
        }
        return output;
    }
}
var queue = new Queue();
queue.push("a");
queue.push("b");
console.log(queue.print());

// ### Linked List
class LinkedList {
    constructor() {
        this.head = null;
    }
}
let list = new LinkedList();