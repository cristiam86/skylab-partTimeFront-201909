function Node(data){
  this.data = data;
  this.next = null;
}

function LinkedList(){
  this.start = null;
  this.insertElement = function(element, insertIndex){
    var index = 0;
    var current = null;
    var previous = null;
    if(this.start === null){
      this.start = element;
    } else if(insertIndex === 0){
      element.next = Object.assign({}, this.start);
      this.start = element;
    } else {
      var index = 0;
      current = null;
      previous = this.start;
      while(index < insertIndex && previous.next !== null){
        previous = current;
        current = current.next;
        index += 1;
      }
      element.next = previous;
      previous.next = element;
      }
    };
    this.getElement = function(index){

    };
    this.print = function(){
      return this.recursivePrint(this.start);
    };
    this.recursivePrint = function(element){
      if(element === null){
        return ''
      } else {
        var restOfTheList = this.recursivePrint(element.next);
        if(restOfTheList){
          return element.data + ', ' + restOfTheList;
        } else {
          return element.data;
        }
      }
    }
  };
  
 

  

  
 



var l = new LinkedList();
var n1 = new Node('a');
var n2 = new Node('b');
l.insertElement(n1, 0); //a
l.insertElement(n2, 0); //b,a
var listPrinted = l.print();
if(listPrinted !== 'b,a'){
  console.log("ERROR");
}else{
  console.log("CHACHI");
}



