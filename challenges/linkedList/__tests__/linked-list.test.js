'use strict';

let LinkedList = require('../linked-list')
let zipLists = require('../llZip/ll-zip')

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
        // console.log(list.head);
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

describe('Linked List Two', ()=> {

    it('Where k is greater than the length of the linked list', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        const secondValue =  'Second Value';
        const thirdValue =  'Third Value';
        list.insert(firstValue).insert(secondValue).insert(thirdValue);
        
        let a = list.kthFromEnd(4)
    
        expect(a).toEqual('Exception');

    });
    it('Where k and the length of the list are the same', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        const secondValue =  'Second Value';
        const thirdValue =  'Third Value';
        list.insert(firstValue).insert(secondValue).insert(thirdValue);
        
        let a = list.kthFromEnd(3)
    
        expect(a).toEqual('Exception');
        

    });
    it('Where k is not a positive integer', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        const secondValue =  'Second Value';
        const thirdValue =  'Third Value';
        list.insert(firstValue).insert(secondValue).insert(thirdValue);
        
        let a = list.kthFromEnd(-4)
    
        expect(a).toEqual('Exception');
    });
    it('Where the linked list is of a size 1', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        
        list.insert(firstValue)
        
        let a = list.kthFromEnd(0)
    
        expect(a).toEqual(firstValue);
    });
    it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', ()=> {
        const list = new LinkedList();
        const firstValue = 'Fist Value';
        const secondValue =  'Second Value';
        const thirdValue =  'Third Value';
        list.insert(firstValue).insert(secondValue).insert(thirdValue);
        
        let a = list.kthFromEnd(2)
    
        expect(a).toEqual(firstValue);
    });
})

describe('Merge linked lists', ()=> { 
    it('If the at the same length or different lengths', ()=> {
        const list1 = new LinkedList();
        const firstValue = 'Fist Value';
        const secondValue =  'Second Value';
        const thirdValue =  'Third Value';
        list1.insert(firstValue).insert(secondValue).insert(thirdValue);
        // console.log(list1);
        const list2 = new LinkedList();
        list2.insert(firstValue).insert(secondValue).insert(thirdValue);
        // console.log(list2);
        const list3 = new LinkedList();
        list3.insert(firstValue).insert(firstValue).insert(secondValue).insert(secondValue).insert(thirdValue).insert(thirdValue);
        console.log(list3);
        const a = zipLists(list1, list2)
        console.log('fun',a);
        console.log('list',list3.head);
        expect(a.value).toEqual(firstValue);
        expect(a.next.value).toEqual(firstValue);
        expect(a.next.next.value).toEqual(secondValue);
        expect(a.next.next.next.value).toEqual(secondValue);
        expect(a.next.next.next.next.value).toEqual(thirdValue);
        expect(a.next.next.next.next.next.value).toEqual(thirdValue);
    });
})