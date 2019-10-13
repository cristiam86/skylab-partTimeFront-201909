console.log('hello');

//constructor function for CAR
var Car = function(name,model,color){
    this.name = name;
    this.model = model;
    this.color = color;
    this.message = function(){
        console.log("My "+this.color+" "+this.name+" "+this.model+" is great!")
    }
}

var chevy = new Car('Chevrolet', 'Optra', 'Silver');
chevy.message();
var seat = new Car('Seat', 'Leon', 'black');
seat.message();

//Stack

var Stack = function(){
    this.content = [];
    this.insertElement = function(element){
        this.content[this.content.length] = element;
    }
    this.getElement = function(){
        var removed = this.content.pop();
        return removed;
    }
    this.print = function(){
        console.log(this.content.join());
    }
}

var stack_a = new Stack();
stack_a.insertElement(1);
stack_a.insertElement("f");
stack_a.insertElement("foo");
stack_a.insertElement([1,2,3]);
var just_removed = stack_a.getElement();
console.log("TCL: just_removed", just_removed)
console.log(stack_a);
stack_a.print();

//Linked List

var List() = function(){
    this.content = {};
    this.insertElement = function(element, index){
        this.content()
    }
}


