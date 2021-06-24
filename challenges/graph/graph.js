

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Vertex {
    constructor(value) {
        this.value = value
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
        return vertex;
    }

    addDirectedEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log("VERTEX DOES NOT EXIST");
            return;
        }
        const adjacencies =  this.adjacencyList.get(start);
        adjacencies.push(new Edge(end, weight));
    }

    print() {
        let i =0;
        for (const [k, v] of this.adjacencyList.entries()) {
            console.log(`-----------------${i}-${i}-${i}-${i}-----------------`);
            console.log("key------->", k);
            console.log("value----->", v);
            console.log('-----------------------------------------------------');
            i++
        }
    }

    getNeighbours(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            console.log("VERTEX DOES NOT EXIST");
            return;
        }
        return this.adjacencyList.get(vertex);
    }

    size(){
        return this.adjacencyList.size
    }
}

module.exports = {Graph,Vertex}
// const myGraph = new Graph();
// const zero = new Vertex(0);
// const one = new Vertex(1);
// const two = new Vertex(2);
// const three = new Vertex(3);
// const four = new Vertex(4);
// const five = new Vertex(5);

// myGraph.addVertex(zero);
// myGraph.addVertex(one);
// myGraph.addVertex(two);
// myGraph.addVertex(three);
// myGraph.addVertex(four);
// myGraph.addVertex(five);

// myGraph.addDirectedEdge(zero, two);
// myGraph.addDirectedEdge(two, three);
// myGraph.addDirectedEdge(two, four);
// myGraph.addDirectedEdge(three, five);
// myGraph.addDirectedEdge(four, five);
// myGraph.addDirectedEdge(one, three);
// myGraph.print();
// console.log(myGraph.size());
// console.log("-----------------")
// console.log(myGraph.getNeighbours(two));
// console.log("-----------------")
// console.log(myGraph.getNeighbours(one));
// adjacencyList
// 0 => [2]
// 1 => [2,4] ....
// .....

// console.log(myGraph);