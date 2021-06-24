'use strict';

const {Graph,Vertex} = require('../graph');
const myGraph = new Graph();
const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);
myGraph.print();
console.log(myGraph.size());
describe('Hash Table', () => {
    beforeAll(() => {

        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        myGraph.addVertex(three);
        myGraph.addVertex(four);
        myGraph.addVertex(five);

        myGraph.addDirectedEdge(zero, two);
        myGraph.addDirectedEdge(two, three);
        myGraph.addDirectedEdge(two, four);
        myGraph.addDirectedEdge(three, five);
        myGraph.addDirectedEdge(four, five);
        myGraph.addDirectedEdge(one, three);

    });
    it('Node can be successfully added to the graph', () => {
        expect(myGraph.adjacencyList.has(zero)).toEqual(true);
        expect(myGraph.adjacencyList.has(one)).toEqual(true);
    });
    it('An edge can be successfully added to the graph', () => {
        let obj = myGraph.getNeighbours(zero);
        expect(obj[0].vertex).toEqual(two);
    });
    it('Neighbors are returned with the weight between nodes included', () => {
        let data = myGraph.getNeighbours(zero)
        let arr = Object.keys(data[0])
        expect(arr).toEqual(['vertex', 'weight']);
    });
    it('The proper size is returned, representing the number of nodes in the graph', () => {
        expect(myGraph.size()).toEqual(6);
    });
    it('A graph with only one node and edge can be properly returned', () => {
        const oneGraph = new Graph()
        const zero1 = new Vertex(0);
        // const one1 = new Vertex(1);
        oneGraph.addVertex(zero1);
        // oneGraph.addDirectedEdge(zero1, one1);
        expect(oneGraph.getNeighbours(zero1)).toEqual([]);
        // expect(index < 1024).toEqual(true);
    });
    it('A graph with only one node and edge can be properly returned', () => {
        const oneGraph = new Graph()
        expect(oneGraph.adjacencyList.get(one)).toBeFalsy()
        // expect(index < 1024).toEqual(true);
    });
})