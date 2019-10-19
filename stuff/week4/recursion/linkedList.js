function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList(){
  this.start = null;
  this.insertElement = function(element, insertIndex) {
    var index = 0;
    var current = null;
    
    if (this.start === null) {
      this.start = element;
      
    } else {
      current = this.start;
      if(index === insertIndex) {
        element.next = current;
        this.start = element;
      }
    }
  };
  this.getElement = function(index) {
    
  }
  this.print = function() {
    return this.recursivePrint(this.start);
  }
  this.recursivePrint = function(element) {
    if (element === null) {
      return ''
    } else {
      return element.data + ', ' + this.recursivePrint(element.next);
    }
  }
}

var l = new LinkedList();
var n1 = new Node('a');
var n2 = new Node('b');
l.insertElement(n1,0); // a
l.insertElement(n2,0); // b,a
var listPrinted = l.print();


if (listPrinted !== 'b, a') {
  console.log("ERROR");
} else {
  console.log("CHACHI");
}
