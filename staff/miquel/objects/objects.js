function isObject(obj) {
    return obj instanceof Object;
}

function objCar(brand, model, color1) {
    return {
        'brand': brand,
        'model': model,
        'color': color1,
        'AI': function() {
            return `My ${this.color} ${this.brand} ${this.model} is great!`;
        }
    }
}

function Stack() {
    this.elements = [];
    this.insertElement = function(elem) {
        this.elements.push(elem);
    }
    this.getElement = function() {
        return this.elements.pop();
    }
    this.print = function() {
        return this.elements.join(',');
    }
}

function Queue() {
    this.elements = [];
    this.insertElement = function(elem) {
        this.elements.push(elem);
    }
    this.getElement = function() {
        this.elements.reverse();
        return this.elements.pop();
    }
    this.print = function() {
        this.elements.reverse();
        return this.elements.join(',');
    }
}

function Node(data) {
    this.data = data;
    this.next = null;
}
function LinkedList() {
    //this.elements = [];
    this.start = null;
    /*this.insertElement = function(elem, index) {
        let prev = '';
        if(this.elements[index-1])
            prev = this.elements[index-1].data

        if(this.elements[index])
            this.elements[index].prevElement = elem

        let dataObj = {
            prevElement: prev,
            data: elem
        }
        
        this.elements.splice(index, 0, dataObj);
    }*/
    this.insertElement = function(elem, insertIndex) {
        var index = 0;
        
        if(this.start === null) {
            this.start = elem;
        } 
        else {
            current = this.start;
            /*if(index === insertIndex) {
                element.next = current;
                this.start = element;
            }*/
        }
    }
    this.getElement = function(index) {
        return this.elements[index].data;
    }
    this.print = function() {
        /*return this.elements.map(function(elem, index) {
            return elem.data;
        }).join(", ");*/
        
        this.recursivePrint(this.start);
    }
    this.recursivePrint = function(elem) {
        console.log("elem", elem)
        if(elem === null) {
            return '';
        } else {
            var restOfTheList = this.recursivePrint(elem.next);
            if(restOfTheList)
                return elem.data + ',' + restOfTheList;
            else 
                return elem.data;
        }
    }
}

function Block(data) {
    this.number = function() {

    }
    this.timestamp = new Date().getTime();
    this.prevHash = function() {

    }
    this.data = function() {
        console.log("data: ", Array.isArray(data));
        return "hola";
        //hash(data.name);
    }
}
function BlockChain() {
    this.blocks = [];
    this.addBlock = function(block) {
        this.blocks.push(block);
    }
    this.isValidChain = function() {
        
    }
}
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