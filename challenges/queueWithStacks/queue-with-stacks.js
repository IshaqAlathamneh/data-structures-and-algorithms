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

class PseudoQueue {
    constructor() {
       this.front = new Stack(); 
    }
    
    peek() {
        return this.front.top? this.front.top.value : this.front.top;
    }
    enqueue(item) {
        let stackOne = this.front;
        stackOne.push(item)

        return stackOne;
    }

    dequeue() {
        let popo = this.front
        console.log(this.front);
        if (this.front.top == null) {
            return `It's Empty`;
        }else{
            console.log('one ------>', popo);
            let n = new Stack;
            n = reverse(popo);
            console.log('two ------>', n);
            let b = n.pop()
            console.log('three ------>', popo);
            console.log(b);
            let d = reverse(n);
            console.log('fffff ------>', d);
            return b;
        }
    }

    // isEmpty() {
    //     return this.front? false : true;
    // }
}
function reverse(head) {
    let node = head.top;
    let previous = null;
    let tmp;
    let i = 1;
    while (node) {
      // save next before we overwrite node.next!
      tmp = node.next;
        // if (i == 1) {
            
        // }
        console.log('in',previous);
      // reverse pointer
      node.next = previous;
  
      // step forward in the list
      previous = node;
      node = tmp;
    }
    head.top = previous
    console.log('out',head);
    return head;
  }
module.exports = {
    stack: Stack,
    queue: PseudoQueue
}