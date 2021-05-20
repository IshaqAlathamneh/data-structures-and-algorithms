'use strict';

const Stack = require('../stacks-and-queues').stack;
const Queue = require('../stacks-and-queues').queue;

describe('Queue', ()=> {
    // it('implements the FIFO functionality', ()=> {
    //     let q = new Queue();
    //     q.enqueue(1).enqueue(2).enqueue(3)
    //     let item = q.dequeue();
    //     expect(item).toEqual(1);
    //     expect(q.dequeue()).toEqual(2);
    //     expect(q.dequeue()).toEqual(3);


    // });
    it('Can successfully instantiate an empty queue', ()=> {
        let q = new Queue();
        expect(q instanceof Queue).toBeTruthy();
    });

    it('Calling dequeue or peek on empty queue raises exception', ()=> {
        let q = new Queue();
        expect(q.dequeue()).toEqual(`It's Empty`);
        expect(q.peek()).toBeNull();
    });

    it('Can successfully peek into a queue, seeing the expected value', ()=> {
        let q = new Queue();
        q.enqueue(1)
        expect(q.peek()).toEqual(1);
        q.enqueue(2);
        expect(q.peek()).toEqual(1);
    });

    it('Can successfully enqueue multiple values into a queue', ()=> {
        let q = new Queue();
        q.enqueue(1).enqueue(2).enqueue(3)
        expect(q.front.value).toEqual(1);
        expect(q.front.next.value).toEqual(2);
        expect(q.front.next.next.value).toEqual(3);
    });

    it('Can successfully dequeue out of a queue the expected value & empty a queue after multiple dequeues', ()=> {
        let q = new Queue();
        q.enqueue(1).enqueue(2).enqueue(3)
        let item = q.dequeue();
        expect(item).toEqual(1);
        expect(q.dequeue()).toEqual(2);
        expect(q.dequeue()).toEqual(3);
        expect(q.peek()).toBeNull();
    });
})
describe('Stack', ()=> {

    it('Can successfully instantiate an empty stack', ()=> {
        let stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
    });

    it('Calling pop or peek on empty stack raises exception', ()=> {
        let stack = new Stack();
        expect(stack.pop()).toEqual(`It's Empty`);
        expect(stack.peek()).toBeNull();
    });

    it('Can successfully peek the next item on the stack', ()=> {
        let stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toEqual(1);
        stack.push(2);
        expect(stack.peek()).toEqual(2);
    });

    it('Can successfully push multiple values onto a stack', ()=> {
        let stack = new Stack();
        stack.push(1).push(2).push(3);
        expect(stack.top.value).toEqual(3);
        expect(stack.top.next.value).toEqual(2);
        expect(stack.top.next.next.value).toEqual(1);
    });

    it('Can successfully pop off the stack And empty a stack after multiple pops', ()=> {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        let item = stack.pop();
        expect(item).toEqual(2);
        expect(stack.peek()).toEqual(1);
        item = stack.pop();
        expect(item).toEqual(1);
        expect(stack.peek()).toBeNull();
    });
})