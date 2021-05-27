'use strict';

const BinaryTree = require('../tree').BinaryTree;
const BinarySearchTree = require('../tree').BinarySearchTree;
const Node = require('../tree').Node;
let tree = null;
describe('Binary Tree', ()=> {

    beforeAll(()=> {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        tree = new BinaryTree(one);
    });

    it ('constructor', ()=> {
        let newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
    });

    it ('Can successfully instantiate a tree with a single root node', ()=> {
        let newBiSeTree = new BinarySearchTree();
        newBiSeTree.add(10)
        // console.log("1---------newBiSeTree: ", newBiSeTree)
        expect(newBiSeTree.root.value).toEqual(10);
    });

    it ('Can successfully add a left child and right child to a single root node', ()=> {
        let newBiSeTree = new BinarySearchTree();
        newBiSeTree.add(10)
        newBiSeTree.add(15)
        newBiSeTree.add(13)
        
        // console.log("2-------newBiSeTree: ", newBiSeTree.root.right)
        newBiSeTree.add(8)
        expect(newBiSeTree.root.value).toEqual(10);
        expect(newBiSeTree.root.right.value).toEqual(15);
        expect(newBiSeTree.root.left.value).toEqual(8);
        expect(newBiSeTree.root.right.left.value).toEqual(13);
    });

    it ('Can successfully returne true or false if the tree contain value', ()=> {
        let newBiSeTree = new BinarySearchTree();
        newBiSeTree.add(10)
        newBiSeTree.add(15)
        newBiSeTree.add(13)
        
        console.log("2-------newBiSeTree: ", newBiSeTree.contains(13))
        console.log("2-------newBiSeTree: ", newBiSeTree.contains(1))
        newBiSeTree.add(8)
        expect(newBiSeTree.contains(13)).toEqual(true);
        expect(newBiSeTree.contains(10)).toEqual(true);
        expect(newBiSeTree.contains(5)).toEqual(false);
        expect(newBiSeTree.contains(1000)).toEqual(false);
    });

    it ('preOrder', ()=> {
        let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        let preOrderResult = tree.preOrder();
        // console.log("preOrderResult: ", preOrderResult)
        expect(preOrderResult).toEqual(expected);
    });

    it ('inOrder', ()=> {
        let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrderResult = tree.inOrder();
        // console.log("inOrderResult: ", inOrderResult)
        expect(inOrderResult).toEqual(expected);
    });

    it ('postOrder', ()=> {
        let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrderResult = tree.postOrder();
        // console.log("postOrderResult: ", postOrderResult)
        expect(postOrderResult).toEqual(expected);
    });
});