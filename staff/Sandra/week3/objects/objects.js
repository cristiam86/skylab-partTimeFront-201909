//isObject

function isObject(param){
    return typeof param == 'object' ? true : false;
}

var arr = [];
console.log(isObject(arr));

//Create object car
var car = {
    brand:"Seat",
    model:"León",
    color:"black",
    printCar: function (){
        console.log("My "+this.color+" "+this.brand+" "+this.model+" is great")    
    }
}

car.printCar();

//Stack
function Stack(){
    this.elements = [];
    this.insertElement = function (element){
        this.elements.push(element);
    }
    this.getElement = function(){
        this.elements.pop();
    }
    this.print = function (){
        console.log(this.elements);
    }
}

var myStack = new Stack();
myStack.insertElement(1);
myStack.insertElement(2);
myStack.insertElement(3);
myStack.print();
myStack.getElement();
myStack.print();
myStack.getElement();
myStack.print();
myStack.getElement();
myStack.print();

//Queue
function Queue(){
    this.elements = [];
    this.insertElement = function (element){
        this.elements.unshift(element);
    }
    this.getElement = function(){
        this.elements.pop();
    }
    this.print = function (){
        console.log(this.elements);
    }
}
var myQueue = new Queue();
myQueue.insertElement(1);
myQueue.insertElement(2);
myQueue.insertElement(3);
myQueue.print();
myQueue.getElement();
myQueue.print();
myQueue.getElement();
myQueue.print();
myQueue.getElement();
myQueue.print();

//Linked List
function node (data) {
    this.next = null;
    this.data = data;
}

function LinkedList(){
    this.start = null;
    this.insertElement = function (data,insertIndex) {
        if (this.start === null){
            this.start = new node(data);
         }else if (insertIndex === 0){
            element = new node(data);
            element.next = this.start;
            this.start = element;
        } else {
            var previous = this.getElement(insertIndex-1);
            var newNode = new node(data);
            newNode.next = previous.next;
            previous.next = newNode;       
            
            }
    }   
    this.getElement = function (index){
        var count = 0;
        var element = this.start;
        var current = this.start;
        while (element){
            if (count === index) return element;
            count +=1;
            current = element;
            element = element.next;
        }
        return current;
    }
    this.print = function (){
       return this.recursivePrint(this.start);
    }
    this.recursivePrint = function(element) {
        if (element === null) return '';
        return element.data + this.recursivePrint(element.next);
    }
}

var myLinkedList = new LinkedList();
myLinkedList.insertElement('a',0);
myLinkedList.insertElement('b',1);
myLinkedList.insertElement('c',2);
myLinkedList.insertElement('d',4);
myLinkedList.insertElement('e',3);
myLinkedList.insertElement('f',5);

var result = myLinkedList.print();
if (result !== 'abcedf'){
    console.log("ERROR");
}else{
    console.log("OK");
}

//The blockchain
var hash = function(s) {
    var a = 1, c = 0, h, o;
    if (s) {
        a = 0;
        for (h = s.length - 1; h >= 0; h--) {
            o = s.charCodeAt(h);
            a = (a<<6&268435455) + o + (o<<14);
            c = a & 266338304;
            a = c!==0?a^c>>21:a;
        }
    }
    return String(a);
};

function block(number,data, prevHash = ''){
    this.number = number;
    this.timestamp = new Date();
    this.prevHash = prevHash;
    this.hash =  hash(this.number + this.timestamp);
    this.data=data;
}

function blockchain(){
    this.blocks = [];
    this.addBlock = function (data){
        if (this.blocks.length == 0){
          this.blocks.push(new block(0,'Bloque0'));
        }
          var prevBlock = this.blocks.length-1;
          var newBlock = new block(prevBlock+1,data,this.blocks[prevBlock].hash);
          this.blocks.push(newBlock);
    }
    this.isValidChain = function (){
       
    }
}

var myBlockChain = new blockchain();
myBlockChain.addBlock("Bloque1");
myBlockChain.addBlock("Bloque2");
console.log(myBlockChain.blocks);