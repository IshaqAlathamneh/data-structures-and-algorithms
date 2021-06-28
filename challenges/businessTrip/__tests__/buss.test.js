'use strict';

const {Graph,Vertex} = require('../../graph/graph');
const businessTrip = require('../buss')
const myGraph = new Graph();
const zero = new Vertex('zero');
const one = new Vertex('one');
const two = new Vertex('two');
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);
describe('Graph', () => {
    beforeAll(() => {

        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        // myGraph.addVertex(three);
        // myGraph.addVertex(four);
        // myGraph.addVertex(five);

        myGraph.addDirectedEdge(zero, two, 300);
        myGraph.addDirectedEdge(two, one, 100);
        // myGraph.addDirectedEdge(two, four);
        // myGraph.addDirectedEdge(three, five);
        // myGraph.addDirectedEdge(four, five);
        // myGraph.addDirectedEdge(one, three);

    });
    it('It find the cost?', () => {
        expect(businessTrip(myGraph, ['zero', 'two'])).toEqual(`true $300`);
        expect(businessTrip(myGraph, ['zero', 'two', 'one'])).toEqual(`true $400`);
    });
    it('It return false if there is no way', () => {
        expect(businessTrip(myGraph, ['zero', 'one'])).toEqual(`false $0`);
    });
    it('It return false if not found or empty array', () => {
        expect(businessTrip(myGraph, [])).toEqual(`false $0`);
    });
    // it('An edge can be successfully added to the graph', () => {
    //     let obj = myGraph.getNeighbours(zero);
    //     expect(obj[0].vertex).toEqual(two);
    // });
    // it('Neighbors are returned with the weight between nodes included', () => {
    //     let data = myGraph.getNeighbours(zero)
    //     let arr = Object.keys(data[0])
    //     expect(arr).toEqual(['vertex', 'weight']);
    // });
    // it('The proper size is returned, representing the number of nodes in the graph', () => {
    //     expect(myGraph.size()).toEqual(6);
    // });
    // it('A graph with only one node and edge can be properly returned', () => {
    //     const oneGraph = new Graph()
    //     const zero1 = new Vertex(0);
    //     // const one1 = new Vertex(1);
    //     oneGraph.addVertex(zero1);
    //     // oneGraph.addDirectedEdge(zero1, one1);
    //     expect(oneGraph.getNeighbours(zero1)).toEqual([]);
    //     // expect(index < 1024).toEqual(true);
    // });
    // it('A graph with only one node and edge can be properly returned', () => {
    //     const oneGraph = new Graph()
    //     expect(oneGraph.adjacencyList.get(one)).toBeFalsy()
    //     // expect(index < 1024).toEqual(true);
    // });
    // it('Breadth First', () => {
    //     console.log(myGraph.breadthFirst(one));
    //     expect(myGraph.breadthFirst(one)).toEqual([ 3, 5 ]);
    //     expect(myGraph.breadthFirst(zero)).toEqual([ 2, 3, 4, 5 ]);
    //     expect(myGraph.breadthFirst(five)).toEqual([]);
    //     expect(myGraph.breadthFirst(four)).toEqual([ 5 ]);
    // });
})