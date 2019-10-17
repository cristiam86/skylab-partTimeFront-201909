


# Object

## Tasks


#DONE
### 1. isObject

Write a JavaScript function to check whether an `input` is an object or not.

----------------

Escriba una función de JavaScript para verificar si una `entrada` es un objeto o no.


### 2. Create object car

Write an object that represents a car with three properties: `brand`, `model`, `color`. Add a method that shows the following message: 'My black Seat León is great!' (Hint: use `this`)

Use literal notation, and object constructor notation.

----------------

Escriba un objeto que represente un automóvil con tres propiedades: `marca`,` modelo`, `color`. Agregue un método que muestre el siguiente mensaje: "¡Mi Seat León negro es genial!" (Sugerencia: use `this`)

Use notación literal y notación de constructor de objetos.

### 3. Stack

Create an object that manages a data structure following the stack principles FILO (first in last out) which means, the first object to be inserted should be the last to be pulled out.

The object should have its constructor `new Stack()` and the following methods:
* insertElement(element): inserts an element into the stack
* getElement(): retrieves the corresponding element from the stack
* print(): prints the stack as comma-separated string elements 


----------------

Cree un objeto que gestione una estructura de datos siguiendo los principios de pila FILO (primero en entrar, último en salir), lo que significa que el primer objeto que se insertará debe ser el último en extraerse.

El objeto debe tener su constructor `new Stack ()` y los siguientes métodos:
* insertElement (elemento): inserta un elemento en la pila
* getElement (): recupera el elemento correspondiente de la pila
* print (): imprime la pila como elementos de cadena separados por comas


### Queue

Create an object that manages a data structure following the queue principles FIFO (first in first out) which means, the first object to be inserted should be the first to be pulled out.

The object should have its constructor `new Queue()` and the following methods:
* insertElement(element): inserts an element into the queue
* getElement(): retrieves the corresponding element from the queue
* print(): prints the queue as comma-separated string elements 


### Linked List

Create an object that manages a data structure following the linked list principles. A Linked List allows to insert an element in any given position as well as retrieve an element from any position.
The elements should be objects and not primitive variables. Its structure should follow the following pattern:
```js
var node = {
    prevElement,
    data
}
```

The object should have its constructor `new LinkedList()` and the following methods:
* insertElement(element, index): inserts an element into the list at the position *index*
* getElement(index): retrieves the corresponding element at position *index*
* print(): prints the data property of each list node as comma-separated string elements 


### The blockchain

From Wikipedia: a blockchain is a growing list of records, called blocks, which are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a merkle tree root hash).

That cryptographic hash of the previous block validates the entire chain and ensures that if any value on any block changes, all the subsequent blocks must change their hash in order to keep the chain valid.

* Create the block object function constructor `new Block(...)` with the following attributes: 
    * number: length of the chain where this block is located
    * timestamp: timestamp of the block creation
    * prevHash: hash of the previous block (the first node should have an empty string)
    * data: any string, number, object or array

* Create the blockchain object function constructor `new BlockChain()` with the following attributes and methods
    * blocks: array with the blocks added to the chain
    * addBlock: creates a new block and adds it to the chain
    * isValidChain: checks if every hash refference of each block is correct

HINT: hashfunction: 
```js
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
```
