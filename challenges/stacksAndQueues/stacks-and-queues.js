'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class Stack {
    constructor() {
        this.top = null;
    }

    peek() {
        return this.top? this.top.value : this.top;
    }

    push(item) {
        let val = new Node(item);
        if (this.isEmpty()) {
            this.top = val; 
        }else{
            val.next = this.top;
            this.top = val
        }
        return this;
    }

    pop() {
        if (this.isEmpty()) {  
            return `It's Empty`;
        }else{
            let popo= this.top.value;
            
            this.top = this.top.next;
            return popo;
        }
    }
    isEmpty() {
        return this.top===null;
    }
}

class Queue {
    constructor() {
       this.front = null; 
    }
    
    peek() {
        return this.front? this.front.value : this.front;
    }
    enqueue(item) {
        let node = new Node(item);
        if (!this.front) {
            this.front = node;
        } else {
            let currentNode = this.front;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        return this;
    }

    dequeue() {
        if (this.isEmpty()) {
            return `It's Empty`;
        }else{
            let popo= this.front.value;
            
            this.front = this.front.next;
            return popo;
        }
    }

    isEmpty() {
        return this.front? false : true;
    }
}
module.exports = {
    stack: Stack,
    queue: Queue
}