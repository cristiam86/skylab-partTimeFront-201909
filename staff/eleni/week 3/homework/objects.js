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
function Node(data){
    this.data=data;
}
class LinkedList {
    this.start=null;
    this.insertElement=function(element,insertIndex){
        var index=0;
        var current=null;
        var previous=null;

        if(this.start===null){
            this.start=element;
        }else if(insertIndex===0){
            element.next=Object.assign({}this.start);
            this.start=element;
        }
        else{
            index=0;
            current=null;

            while(index<insertIndex && current.next!==null){
              current=current.next;
              index+=1;
            }
            current.next=element;
        }
    };
    this.getElement=function(index){

    }
    this.print=function(){
    return this.recursivePrint(this.start);

    }
    this.recursivePrint=function(element){
        if(element===null){
            return ''
        }else{
            return element.data+this.recursivePrint(element,next)

        }
}
var l=new LinkedList();
var n1=new Node('a');
var n2=new Node('b');
var n3=new Node('c');

l.insertElement(n1,0); //a
l.insertElement(n2,1); //b,a
l.insertElement(n3,2); //b,a


var listPrinted=l.print();


//test
if(listPrinted!=='a'){
    console.log("Error")
}else{
    console.log("hooray")
}


