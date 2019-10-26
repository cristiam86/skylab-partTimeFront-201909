// object or not

function isObject(obj){
    typeof obj === 'object' ? console.log("Es un Object"): console.log("No es un Object")
};
console.log("// Object or not -->");
obj = 'Test cosa'
console.log('Vemos si el string "'+ obj + '" es un objeto:');
isObject(obj);

//Object mi carro
var carMaker = function(brand,model,color){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.message = function(){
        console.log("My "+this.color+" "+this.brand+" "+this.model+" is great!")
    }
}

console.log("// Mi carro -->");
var seat = new carMaker('Seat', 'Leon', 'black');
isObject(seat);
seat.message();

// Stack 
var StackObj = function(){
    this.content = [];
    this.insertElement = function(element){
        this.content.push(element);
    }
    this.getElement = function(){
        var get = this.content.pop();
        return get;
    }
    this.print = function(){
        var print = this.content.join();
        return print;
    }
}

console.log("// Stack -->");
var stack = new StackObj();
isObject(stack);
stack.insertElement(1);
stack.insertElement(2);
stack.insertElement(3);
stack.insertElement(4);
stack.insertElement(5);
stack.insertElement([6,7,8]);
console.log(stack.content);
console.log(stack.getElement());
console.log(stack.print());

// Queue 
var Queue = function(){
    this.content = [];
    this.insertElement = function(element){
        this.content.unshift(element);
    }
    this.getElement = function(number){
        position = number - 1;
        var get = this.content.pop();
        return get;
    }
    this.print = function(){
        var print = this.content.join();
        return print;
    }
}

console.log("// Queue -->");
var stackQ = new Queue();
isObject(stackQ);
stackQ.insertElement(1);
stackQ.insertElement(2);
stackQ.insertElement(3);
stackQ.insertElement(4);
stackQ.insertElement(5);
stackQ.insertElement([6,7,8]);
console.log(stackQ.content);
console.log(stackQ.getElement(1));
console.log(stackQ.print());

// Linked List 
console.log("// Linked List -->");



var Queue = function(){
    this.content = [];
    this.insertElement = function(element, position){
        this.content.unshift(element);
    }
    this.getElement = function(number){
        position = number - 1;
        var get = this.content.pop();
        return get;
    }
    this.print = function(){
        var print = this.content.join();
        return print;
    }
}

