'use strict';

let LinkedList = require('../linked-list')


function zipLists(list1, list2)  {
    let currentOne = list1.head.next;
    let currentTwo = list2.head.next;
    // console.log( currentOne);
    if( !currentOne){
        list1.next = list2;
        return list1;
    }
    if( !currentTwo){
        list2.next = list1.next;
        list1.next = list2
        return list1;
    }
    currentOne = list1.head;
    currentTwo = list2.head;
    let one = 3;
    let two = 2;
    let myArr = [];
    // console.log('one', currentOne);
    while(currentOne.next || currentTwo.next) {
        let myLL = null;
        if (one > two) {
            myLL = currentOne;
            currentOne = currentOne.next;
            two += 2;
        }else {
            myLL = currentTwo;
            currentTwo = currentTwo.next;
            one += 2;
        }
        myArr.push(myLL)
        if (!currentOne.next) {
            one = -100;
        }
        if (!currentTwo.next) {
            two = -100;
        }
    }
    if( currentOne.value){
        myArr.push(currentOne)
    }
    if( currentTwo.value){
        myArr.push(currentTwo)
    }

    for (let index = (myArr.length-2) ; index > -1; index--) {
        // console.log(myArr[index]);
        myArr[index].next = myArr[index + 1]
    }
    return myArr[0];
}
module.exports = zipLists;