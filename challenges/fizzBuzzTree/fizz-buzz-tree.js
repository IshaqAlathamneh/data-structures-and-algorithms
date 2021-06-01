// const Queue = require('../stacksAndQueues/stacks-and-queues').queue;
// let q = new Queue;
// let myTree = {};
// function FizzBuzzTree(tree){
//     let myArr = Object.keys(tree)
//     myArr.forEach( (x,i) => {
//         if(! x == 'value'){
//             if(tree[x]) {
//                 FizzBuzzTree(tree[x])
//             }
//         }else{
//             if(i != 0){

//                 q.enqueue(tree[x].value)
//             }else{
//                 q.enqueue(tree[x])
//             }
//         }
//         if(tree[x].value%15 == 0){
//             myTree[x] = 'fizz buzz'
//         }else if(tree[x].value%3== 0){
//             myTree[x] = 'fizz'
//         }else if(tree[x].value%5 == 0){
//             myTree[x] = 'buzz'
//         }else{
//             myTree[x] = tree[x].value;
//         }
//     })
    
//     // function trevarse(node) {
//     //     Object.keys(node).forEach( y => {
//     //         if(!(node[y].value%15)){
//     //             myTree[y] = 'fizz buzz'
//     //         }else if(!node[y].value%3){
//     //             myTree[y] = 'fizz'
//     //         }else if(!node[y].value%5){
//     //             myTree[y] = 'buzz'
//     //         }else{
//     //             myTree[y] = node[y].value;
//     //         }
//     //         trevarse(node[y]);
//     //     })
//     // }
//     // trevarse(tree)
//     console.log('-----myArr-----',myArr);
//     console.log('-----myTree-----',myTree);
//     console.log('-----ishaq-----',q.front.next.next.next);
//     return q;
// }

// let btata = {
//     value : 5,
//     right : {
//         value : 3,
//         right : { value : 7},
//         left : { value : 8},
//         middleRight :{ value : 22},
//         middleLeft : { value : 15}
//     },
//     left :  {
//         value : 77,
//         right : { value : 3},
//         left : { value : 5},
//         middleRight :{ value : 7},
//         middleLeft : { value : 6}
//     },
//     middleRight : {
//         value : 150,
//         right : { value : 7},
//         left : { value : 7},
//         middleRight :{ value : 7},
//         middleLeft : { value : 7}
//     },
//     middleLeft : {
//         value : 100,
//         right : { value : 21},
//         left : { value : 55},
//         middleRight :{ value : 44},
//         middleLeft : { value : 8}
//     }
// }
// console.log(FizzBuzzTree(btata));
const myTree = require('../tree/tree').kTree
const myNode = require('../tree/tree').kTreeNode
function fizzBuzzTree(tree) {
    const results = new myTree(fizBuzz(tree.root.value));
    let current = results.root;
    let traverse = (root, relation)=>{
        let node = new myNode(fizBuzz(root.value))
        if(relation){
            current[relation] =  node;
            current = current[relation]
        }
        let back = current;
        if(root.child){
            traverse(root.child, 'child')
        }
        current = back;
        if(root.sibling){
            traverse(root.sibling, 'sibling')
        }
    }
    traverse(tree.root)
    return results;
}

function fizBuzz (num){
    return (num%3 == 0 && num%5 == 0) ? 'FizzBuzz' : (! (num % 3)) ? 'Fizz' : (! (num % 5) ) ? 'Buzz' : `${num}`;
}


module.exports = fizzBuzzTree;