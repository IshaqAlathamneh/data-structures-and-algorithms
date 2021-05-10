'use strict';

const Node = require('./node');

class LinkedList {
    
    constructor() {
        this.head = null;
    }

    insert(value) {
        let node = new Node(value);
        // if the linkedlist i empty
        if (!this.head) {
            this.head = node;
        } else {
            // if not empty 
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        return this;
    }
    includes(value) {
        let currentNode = this.head;
        let checked = false;
        console.log(currentNode);
        while(currentNode.next) {
            if(currentNode.value === value){
                checked = true;
            }
            currentNode = currentNode.next;
        }
        if(currentNode.value === value){
            checked = true;
        }
        return checked;
    }
    toString(){
        let currentNode = this.head;
        let myStr = '';
        while(currentNode.next) {
                myStr += `{ ${currentNode.value} } -> `
                currentNode = currentNode.next;
            }
            myStr += `{ ${currentNode.value} } -> NULL`
            return myStr;
    }
}

module.exports = LinkedList;