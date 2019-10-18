class Stack{
    constructor (){
        this.stack = {};
        this.count = 0;
    }
    push(element){
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }
    peek(){
        return this.stack[this.count -1]
    }
    size(){
        return this.count;
    }
    print(){
        return this.stack;
    }
    pop(){
        this.count--;
        const element = this.stack[this.count]
        delete this.stack[this.count]
        return element;
    }

}

var stack = new Stack();
stack.push("Eugenio");
stack.push("Alberto");
stack.push("Patri");
console.log(stack.print());
stack.pop();
console.log(stack.print());
stack.push("Enzo");
console.log(stack.print());

