console.log("ecma6");

//declaring classes

class Shape{
    //everything in the constructor will go to the prototype of shape..
    constructor(name,x,y){
        this.name = name;
        this.x = x;
        this.y = y;
    }

    move(newX, newY){
        this.x = newX;
        this.y = newY;
    }

    getPosition(){
        return {x:this.x, y:this.y}
    }
}

const s1 = new Shape("shape1", 5,9);
console.log(s1);
console.log(s1.getPosition());
s1.move(5,6);
const {x,y} = s1.getPosition(); //this is deconstructuring on ecma6

//how to create a new class that inherits from shape...


//interesting: with "class" notation, all methods go to the prototype.
class Circle extends Shape{
    constructor(name,x,y,r){
        super(name,x,y);
        this.r = r;
    }

    getPerimter(){
        return Math.PI * (this.r) * 2;
    }
}

const c1 = new Circle("circle",3,4,6);
console.log(c1);
