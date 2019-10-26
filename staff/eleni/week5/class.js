class Shape {
    staticParam = "soy de la clase";
    constructor(x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
    move(newX, newY) {
        this.x = newX;
        this.y = newY
    }
    getPosition() {
        return { x: this.x, y: this.y }
    }
}

class Circle extends Shape {
    constructor(name, x, y, r) {
        super(name, x, y);
        this.r = r;
    }
    setRadius(newR) {
        this.r = newR;
    }
    getPerimeter() {
        return 2 * Math.PI * this.r;
    }
    getArea() {
        return Math.PI * (this.r ** 2);
    }
}

const c = new Circle('circle', 3, 4, 6);
console.log(c)
console.log(c.getPosition());
c.move(1, 2)

const s = new Shape("circle", 5, 9);
console.log(s.getPosition());
s.move(1, 2)