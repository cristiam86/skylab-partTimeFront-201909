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

var stack = [];


function insertElement(element){
    this.push(element);
}

function getElement(){
    this.pop();
}

function print(){
    console.log(this);
}

insertElement(1);
insertElement(2);
insertElement(3);
print();
getElement();
print();
getElement();
print();
getElement();
print();

//Queue
var queue = [];

function insertElement(element){
    queue.unshift(element);
}

function getElement(){
    queue.pop();
}

function print(){
    console.log(queue);
}
insertElement(1);
insertElement(2);
insertElement(3);
print();
getElement();
print();
getElement();
print();
getElement();
print();

//Linked List
var node = {
    prevElement,
    data
}

//The blockchain
