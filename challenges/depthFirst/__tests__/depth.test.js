'use strict';

const {Graph,Vertex} = require('../../graph/graph');
const depthFirst = require('../depth')
const myGraph = new Graph();
const zero = new Vertex('zero');
const one = new Vertex('one');
const two = new Vertex('two');
const three = new Vertex('three');
const four = new Vertex('four');
const five = new Vertex('five');
describe('Graph', () => {
    beforeAll(() => {

        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        myGraph.addVertex(three);
        myGraph.addVertex(four);
        myGraph.addVertex(five);

        myGraph.addDirectedEdge(zero, two, 300);
        myGraph.addDirectedEdge(two, one, 100);
        myGraph.addDirectedEdge(zero, four);
        myGraph.addDirectedEdge(one, five);
        // myGraph.addDirectedEdge(four, five);
        myGraph.addDirectedEdge(one, three);

    });
    it('It find the cost?', () => {
        const adj = myGraph.adjacencyList;
        console.log('-------8-8-8-8-8-8-8-', depthFirst(adj));
        expect(depthFirst(adj)).toEqual(['zero', 'two', 'one', 'five']);
        // expect(businessTrip(myGraph, ['zero', 'two', 'one'])).toEqual(`true $400`);
    });
    // it('It return false if there is no way', () => {
    //     expect(businessTrip(myGraph, ['zero', 'one'])).toEqual(`false $0`);
    // });
    // it('It return false if not found or empty array', () => {
    //     expect(businessTrip(myGraph, [])).toEqual(`false $0`);
    // });
})