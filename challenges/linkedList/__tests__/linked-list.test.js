'use strict';

let LinkedList = require('../linked-list')

describe('Linked List', ()=> {
    it('instantiate an empty linked list', ()=> {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    });

    it('insert into the linked list', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        list.insert(firstValue);
        expect(list.head.value).toEqual(firstValue);
        
        const secondValue =  'Second Value';
        list.insert(secondValue);
        expect(list.head.value).toEqual(firstValue);
        expect(list.head.next.value).toEqual(secondValue);

        const thirdValue =  'Third Value';
        list.insert(thirdValue);
        expect(list.head.value).toEqual(firstValue);
        expect(list.head.next.value).toEqual(secondValue);
        expect(list.head.next.next.value).toEqual(thirdValue);

    });
    it('The head property will properly point to the first node in the linked list', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        list.insert(firstValue);
        const secondValue =  'Second Value';
        list.insert(secondValue);
        expect(list.head.value).toEqual(firstValue);
        expect(list.head.next.value).toEqual(secondValue);

    });
    it('Can properly insert multiple nodes into the linked list', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        const secondValue =  'Second Value';
        list.insert(firstValue).insert(secondValue);
        expect(list.head.value).toEqual(firstValue);
        expect(list.head.next.value).toEqual(secondValue);
    });
    it('return true or false id the value exists in linked list', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        const secondValue =  'Second Value';
        list.insert(firstValue);
        expect(list.includes(firstValue)).toEqual(true);
        expect(list.includes(secondValue)).toEqual(false);
    });
    it('return a collection of all the values that exist in the linked list', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        const secondValue =  'Second Value';
        list.insert(firstValue);
        list.insert(secondValue);
        expect(list.toString()).toEqual('{ Fist Value } -> { Second Value } -> NULL');
    });
})