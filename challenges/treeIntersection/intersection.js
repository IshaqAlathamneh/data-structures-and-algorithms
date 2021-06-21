function tree_intersection(tree1, tree2){
let first = tree1.root;
let second = tree2.root;
const results = [];
let traverse = (node1 , node2) => {
     if(node1.value == node2.value) results.push(node1.value);
    if (node1.left && node2.left) traverse(node1.left, node2.left);
    if (node1.right && node2.right) traverse(node1.right, node2.right);
}
traverse(first, second)
return results;
}
module.exports = tree_intersection;