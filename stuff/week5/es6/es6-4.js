class Shape {
  static name = "shape";

  constructor(x, y){
      this.x = x;
      this.y = y;
      this.angle = 0;
  }

  move(newX, newY) {
      this.x = newX;
      this.y = newY;
  }

  getPosition() {
      return { x: this.x, y: this.y };
  }

  rotate(newAngle){
      this.angle = newAngle;
  }
}

class Circle extends Shape {
  static name = 'Circle';
  constructor(x , y, r) {
      super(x, y);
      this.r = r;
  }

  setRadius(newR) {
     this.r = newR;   
  }

  getPerimeter(){
      return 2 * Math.PI * this.r;
  }

  getArea() {
      return Math.PI * (this.r ** 2);
  }
}

class Square extends Shape {
  static name = 'Square';

  constructor(x, y, width){
      super(x, y);
      this.width = width;
  }

  getArea(){
      return this.width ** 2;
  }

  getPerimeter(){
      return this.width * 4;
  }
}


class Rectangle extends Square {
  static name = "Rectangle";

  constructor(x, y, width, height){
      super(x, y, width);
      this.height = height;
  }

  getArea() {
      return this.width * this.height;        
  }

  getPerimeter() {
      return 2 * this.width + 2 * this.height;
  }
}

const r = new Rectangle('rect', 3, 4, 10, 12);
console.log(r);

/*
const c = new Circle('circle', 3, 4, 6);
console.log(c.getPosition());
c.move(1,1);
console.log("NEW POSITION: ", c.getPosition());
console.log("PERIMETER: ", c.getPerimeter());
console.log("AREA: ", c.getArea());
*/

/*
const s = new Shape("shape1", 5, 9);
console.log(s.getPosition());
s.move(1,2);
const { x, y } = s.getPosition();
console.log(x, y);
*/