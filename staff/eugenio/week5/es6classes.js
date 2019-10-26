class Shape{
  constructor(name, x, y){
    this.name = name;
    this.x = x;
    this.y = y;
  }
  move(newX, newY){
    this.x = newX;
    this.y = newY;
  }
  getPosition(){
    return {x: this.x, y: this.y}
  }
}

const s = new Shape("Circle", 5, 9);
console.log(s.name);
console.log(s.getPosition());
s.move(1,2);
console.log(s.getPosition());

class Circle extends Shape{
  constructor(name, x, y, r){
    super(name, x, y); //IMPORTAMOS LAS PROPIEDADES DEL CONSTRUCTOR DE SHAPE, EL CONSTRUCTOR SUPERIOR
    this.r = r;
  }

  setRadius(newR){
    this.r = newR;
  }

  getPerimeter(){
    return 2 * Math.PI * this.r;
  }

  getArea(){
    return Math.PI * (this.r ** 2);//CALCULAMOS LA POTENCIA DEL RADIO, 2 INDICAMOS QUE ES AL CUBO
  }
}

class Square extends Shape{
  constructor(name, x, y, width){
    super(name, x, y);
    this.width = width;
  }
  getArea(){
    return this.width ** 2;
  }

  getPerimeter(){
    return this.width * 4;
  }
}

/*const c = new Circle('circle', 3, 4, 6);
console.log(c);
console.log(c.getPosition());
c.move(1,1);
console.log("NEW POSITION: ",c.getPosition());
console.log("PERIMETER: ",c.getPerimeter());
console.log("AREA: ",getArea());
*/

class Rectangle extends Square {
  constructor(name, x, y, width, height){
    super(name, x, y, width);
    this.height = height;
  }
  
  getArea(){
    return this.width * this.height;
  }

  getPerimeter(){
    return 2 * this.width + 2 * this.height;
  }
}

const r = new Rectangle('rect', 3, 4, 10, 12);
console.log(r.getArea());
