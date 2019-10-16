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


// blockchain...

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


var Block = function(value,position,array,timestamp=1){
    //if array is empty, then previous value is set to string 'origin'
    this.previous_hash = array.length===0 ? "" : hash(array[position-1].value.toString());
    this.value = value;
}

var Blockchain = function(){
    this.chain = [];//array to contain the chain of nodes
    this.insertElement = function(value, position=this.chain.length){ //by default adds in the last position if no parameter is provided
        if(position>=this.chain.length){ //if you go to far, the new node just goes last...
            position=this.chain.length; 
        }
        var newBlock = new Block(value, position, this.chain); //create the node from class
        this.chain[position] = newBlock; //add the node at the defined position
        if(this.chain.length>position+1){ //only if you didn't add to the last position...
            this.chain[position+1].previous_hash = hash(newBlock.value.toString()); //then go fetch the next and change its previous hash
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
    this.isValidChain = function(){
        for(var i=this.chain.length-1; i>0; i--){ //starts on the last
            if(this.chain[i].previous_hash !== hash(this.chain[i-1].value.toString())){
                console.error("ERROR! Mistake in blockchain");
                break;
            }
        }
        console.log("All OK")
        return true;        
    }
}


var blockchain1 = new Blockchain();
blockchain1.insertElement(0);
blockchain1.insertElement(1);
blockchain1.insertElement(2);
blockchain1.insertElement(3);
blockchain1.insertElement(4);
blockchain1.insertElement(5);
blockchain1.insertElement(6);
blockchain1.insertElement(7);
blockchain1.insertElement(8);
blockchain1.insertElement(9);
blockchain1.insertElement(10,5);
blockchain1.isValidChain()

console.log(blockchain1)
