'use strict';

let LinkedList = require('../linked-list')

describe('Linked List', ()=> {

    it('insert into the end of linked list multiple times', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        const secondValue =  'Second Value';
        const thirdValue =  'Third Value';
        list.insert(firstValue).insert(secondValue).insert(thirdValue);
        
        expect(list.head.value).toEqual(firstValue);
        expect(list.head.next.value).toEqual(secondValue);
        expect(list.head.next.next.value).toEqual(thirdValue);

    });
    it('Can successfully insert a node before a node located i the middle of a linked list', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        const secondValue =  'Second Value';
        const thirdValue =  'Third Value';
        const newVal = 'newValue';
        list.insert(firstValue).insert(secondValue).insert(thirdValue);
        list.insertBefore(secondValue,newVal)
        console.log(list.head);
        expect(list.head.next.value).toEqual(newVal);
        expect(list.head.next.next.value).toEqual(secondValue);
        

    });
    it('Can successfully insert a node before the first node of a linked list', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        const secondValue =  'Second Value';
        const thirdValue =  'Third Value';
        const newVal = 'newValue';
        list.insert(firstValue).insert(secondValue).insert(thirdValue);
        list.insertBefore(firstValue,newVal)
        expect(list.head.next.value).toEqual(firstValue);
        expect(list.head.value).toEqual(newVal);
    });
    it('Can successfully insert after a node in the middle of the linked list', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        const secondValue =  'Second Value';
        const thirdValue =  'Third Value';
        const newVal = 'newValue';
        list.insert(firstValue).insert(secondValue).insert(thirdValue);
        list.insertAfter(firstValue,newVal)
        expect(list.head.next.value).toEqual(newVal);
        expect(list.head.next.next.value).toEqual(secondValue);
    });
    it('Can successfully insert a node after the last node of the linked list', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        const secondValue =  'Second Value';
        const thirdValue =  'Third Value';
        const newVal = 'newValue';
        list.insert(firstValue).insert(secondValue).insert(thirdValue);
        list.insertAfter(thirdValue,newVal)
        // console.log(list.head);
        expect(list.head.next.next.next.next).toBeFalsy();
        expect(list.head.next.next.next.value).toEqual(newVal);
    });
})