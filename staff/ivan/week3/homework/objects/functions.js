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

//structure of each node to be added to the link list. A node is like a block.
var Node = function(value,position,array){
    //if arrat is empty, then previous value is set to string 'origin'
    this.previous_value = array.length===0 ? "origin" : array[position-1].value;
    this.value = value;
}

var LinkedList = function(){
    this.chain = [];//array to contain the chain of nodes
    this.insertElement = function(value, position=this.chain.length){ //by default adds in the last position if no parameter is provided
        if(position>=this.chain.length){ //if you go to far, the new node just goes last...
            position=this.chain.length; 
        }
        var newNode = new Node(value, position, this.chain); //create the node from class
        this.chain[position] = newNode; //add the node at the defined position
        if(this.chain.length>position+1){ //only if you didn't add to the last position...
            this.chain[position+1].previous_value = value; //then go fetch the next and change its previous
        }
    }
    this.getElement = function(index){
        var selected = this.chain[index];
        console.log(selected);
    }
    this.print = function(){
        var values = '';
        for(node in this.chain){
            values += this.chain[node].value+","
        }
        console.log(values);
    }
}

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




