/******* Create object car ********/ 

function isObject(input){
    if(typeof(input) === 'Object'){
        true;
    }
}

/******* Create object car ********/ 
var car ={
    brand: 'Seat',
    model: 'León',
    color: 'black',
    sentence : function() {
    return 'My '+ this.color + ' ' +this.brand + ' ' + this.model +' is great!';
  }
}

car.sentence()

/******* Stack ********/ 


function Stack() {
    this.elements = []
    this.insertElement = function(element){this.elements.push(element)};
    this.getElement= function(){this.elements.pop()};
    this.print = function(){console.log(this.elements)}
}

var aa = new Stack()

aa.insertElement(3)

/******* Queue ********/ 

function Queue() {
    this.elements = []
    this.insertElement = function(element){this.elements.unshift(element)};
    this.getElement = function(){this.elements.pop()};
    this.print = function(){console.log(this.elements)}
}

var aa = new Queue()

aa.insertElement(3)
aa.insertElement(4)
aa.insertElement(5)
aa.getElement()
aa.print()

/******* LinkedList ********/ 
var node = {
    prevElement,
    data
}


function LinkedList(){

    this.list = []
    this.insertElement = function(element, index){
        this.list.splice(index, "", element)
    }
    this.getElement = function(index){
        console.log(this.list.splice(index,index+1))
    }
    this.print = function(){console.log(this.list)}
    
}

var aa = new LinkedList()

aa.insertElement('a', 0)
aa.insertElement('b', 1)
aa.insertElement('c', 2)
aa.getElement(2)
aa.print()