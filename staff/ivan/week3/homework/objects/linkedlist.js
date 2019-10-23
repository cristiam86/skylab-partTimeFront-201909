var Node = function(value,index,previousNode){
    this.previousNode = previousNode
    this.value = value;
    this.index = index
}

var LinkedList = function(){
    this.origin = new Node("",0,"");
    this.first_index = 0; 
    this.insertElement = function(value){
        


    }
}

var a = new LinkedList();
console.log(a);
a.insertElement();