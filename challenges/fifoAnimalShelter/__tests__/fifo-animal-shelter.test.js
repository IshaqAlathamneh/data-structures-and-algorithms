'use strict';

// const Stack = require('../queue-with-stacks').stack;
const Queue = require('../fifo-animal-shelter');

describe('Queue', ()=> {
    
    it('Can successfully enqueue cat or dog', ()=> {
        let q = new Queue();
        q.enqueue('dog')
        q.enqueue('cat')
        // console.log('------>',q);
        // console.log('------------>',q.enqueue('dog'));
        // console.log('------------------>',q.enqueue('asdasd'));
        expect(q.front.value).toEqual('dog');
        expect(q.front.next.value).toEqual('cat');
        expect(q.front.next.next).toEqual(null);
        expect(q.enqueue('dooooo')).toEqual('The animal should be either a dog or a cat');
    });

    it('Can successfully dequeue cat or dog ', ()=> {
        let q = new Queue();
        q.enqueue('dog')
        q.enqueue('cat')
        q.enqueue('dog')
        console.log('------>',q);
        expect(q.dequeue('cat')).toEqual(`cat`);
        console.log('------>',q);
        expect(q.dequeue('dog')).toEqual('dog');
    });

    it('Can successfully dequeue the latest one if there isn\'t pref', ()=> {
        let q = new Queue();
        q.enqueue('dog')
        q.enqueue('cat')
        q.enqueue('dog')
        expect(q.dequeue()).toEqual(`dog`);
        expect(q.dequeue()).toEqual('cat');
    });

})
