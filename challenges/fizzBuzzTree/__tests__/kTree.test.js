'use strict';

const fizzBuzzTree = require('../fizz-buzz-tree')
const myTree = require('../../tree/tree').kTree
const myNode = require('../../tree/tree').kTreeNode
let tree = new myTree(5);
let tree2 = new myTree('Buzz');
describe('Binary Tree', ()=> {

    beforeAll(()=> {
        
tree.root.child = new myNode(3)
tree.root.child.sibling = new myNode(1)
tree.root.child.sibling.sibling = new myNode(15)
tree.root.child.sibling.sibling.sibling = new myNode(4)
tree.root.child.sibling.child = new myNode(10)
tree.root.child.sibling.child.child = new myNode(13)
tree.root.child.sibling.child.child.sibling = new myNode(55)


tree2.root.child = new myNode('Fizz')
tree2.root.child.sibling = new myNode(`1`)
tree2.root.child.sibling.sibling = new myNode('FizzBuzz')
tree2.root.child.sibling.sibling.sibling = new myNode(`4`)
tree2.root.child.sibling.child = new myNode('Buzz')
tree2.root.child.sibling.child.child = new myNode(`13`)
tree2.root.child.sibling.child.child.sibling = new myNode('Buzz')
    });

    it ('It is return the true values?', ()=> {
        console.log(tree);
        expect(fizzBuzzTree(tree).root.value).toEqual(tree2.root.value);
        expect(fizzBuzzTree(tree).root.child.value).toEqual(tree2.root.child.value);
        expect(fizzBuzzTree(tree).root.child.sibling.value).toEqual(tree2.root.child.sibling.value);
    });

});