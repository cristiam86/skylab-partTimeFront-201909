class Queue {
    constructor() {
      this.queue = []
    }
    
    enqueue(element) {
      this.queue.push(element)
    }
    
    dequeue() {
      if (this.isEmpty()) return 'Queue is empty' 
      return this.queue.shift()
    }
    
    peek() {
      if (this.isEmpty()) return 'Queue is empty'
      return this.queue;
    }
    
    // helper method
    isEmpty() {
      return !this.queue.length
    }
}

var queue = new Queue();
queue.enqueue("Eugenio");
queue.enqueue("Alberto");
queue.enqueue("Patri");
console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());
queue.enqueue("Eugenio");
console.log(queue.peek());

