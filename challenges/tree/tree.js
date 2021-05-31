'use strict';
const Queue = require('../stacksAndQueues/stacks-and-queues').queue;
class Node {
    constructor(value, left= null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    // Pre-Order: Root - Left - Right
    // Time : O(n) -> n is the number of nodes
    // Space: O(h) -> h is the height of the tree
    preOrder() {
        try{

            let results = [];
            let traverse = (node) => {
                results.push(node.value);
                if (node.left) traverse(node.left);
                if (node.right) traverse(node.right);
            }
            traverse(this.root);
            return results;
        } catch(err){
            console.log(err);
        }
    }
    findMaximumValue(){
        try{
            let big = 0;
            
            let traverse = (node) => {
                
                node.value>big? big = node.value : big=big;
                if (node.left) traverse(node.left);
                if (node.right) traverse(node.right);
            }
            traverse(this.root);
            return big;
        } catch(err){
            console.log(err);
        }
    }
    // In-Order: Left - Root - Right
    // Time : O(n) -> n is the number of nodes
    // Space: O(h) -> h is the height of the tree
    inOrder() {
        try{
        let results = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            results.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return results;
    } catch(err){
        console.log(err);
    }
    }
    // Post-Order:  Left - Right - Root
    // Time : O(n) -> n is the number of nodes
    // Space: O(h) -> h is the height of the tree
    postOrder() {
        try{
        let results = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            results.push(node.value);
        }
        traverse(this.root);
        return results;
    } catch(err){
        console.log(err);
    }
    }
    breadthFirst(){
        let arrBreadth = [];
        const q = new Queue()
        q.enqueue(this.root)
        while (q.front.value.value) {
            arrBreadth.push(q.front.value.value)
            if(q.front.value.left){
                q.enqueue(q.front.value.left)
            }
            if(q.front.value.right){
                q.enqueue(q.front.value.right)
            }
            q.dequeue()
            let errrr = q.front;
            if(!errrr){
                q.front = {value: {
                    value: null
                }}
            }
        }
        return arrBreadth;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }
    // Pre-Order: Root - Left - Right
    // Time : O(n) -> n is the number of nodes
    // Space: O(h) -> h is the height of the tree
    add(val) {
        try{
            let newVal = new Node()
            newVal.value = val;
            if(this.root == null){
                this.root = newVal;
                return this;
            }
            let current = this.root;
            while (current) {
                if (newVal.value > current.value) {
                    if(current.right == null){
                        current.right = newVal;
                        return this;
                    }
                    current = current.right;
                }else if (newVal.value < current.value){
                    if(current.left == null){
                        current.left = newVal;
                        return this;
                    }
                    current = current.left
                }
                if (newVal.value == current.value) {
                    return this;
                }
                // console.log('anaaaaaaaaaaaaaa',current);
            }
            if(!current){
                current = newVal;
            }
            return this;
        } catch(err){
            console.log(err);
        }
    }
    contains(val){
        try{
            let current = this.root;
            while (current) {
                if (val > current.value) {
                    if(current.right == null){
                        return false;
                    }
                    current = current.right;
                }else if (val < current.value){
                    if(current.left == null){
                        return false;
                    }
                    current = current.left
                }
                if (val == current.value) {
                    // console.log('contains ---- true');
                    return true;
                }
            }
            return false;
        } catch(err){
            console.log(err);
        }
    }
}

module.exports = {
    Node ,
    BinaryTree,
    BinarySearchTree
}