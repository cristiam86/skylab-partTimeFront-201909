class Queue {
    constructor() {
      this.queue = {};
      this.count = 0;
    }
    
    enqueue(element) {
      //this.queue.push(element)
      this.queue[this.count] = element;
      this.count++;
      return this.queue;
    }
    
    dequeue() {
      if (this.isEmpty()) return 'Queue is empty' 
      return this.queue.shift()
    }
    
    peek() {
      if (this.isEmpty()) return 'Queue is empty'
      return this.queue;
    }
    
    isEmpty() {
      return !this.queue.length
    }
}

/*var queue = new Queue();
queue.enqueue("Eugenio");
console.log(queue);
*/

var nombres = ['Eugenio', 'Alberto', 'Patri']
console.log(nombres);
nombres.splice(1, 1);
console.log(nombres);
