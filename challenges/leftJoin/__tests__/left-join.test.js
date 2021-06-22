'use strict';

const HashTable = require('../../hashtable/hashtable');
const leftJoin = require('../left-join')
const firstTable = new HashTable(10)
const secondTable = new HashTable(10)
const thirdTable = new HashTable(10)
const fourthTable = new HashTable(100)

describe('Left Join', ()=> {
    beforeAll(()=> {
        firstTable.add('a', 'b')
        firstTable.add('d', 'e')
        firstTable.add('g', 'h')
        secondTable.add('a','c')
        secondTable.add('d','f')
        secondTable.add('g','i')
        thirdTable.add('s','q')
        thirdTable.add('x','q')
        thirdTable.add('z','q')
        fourthTable.add('s','q')
        fourthTable.add('x','q')
        fourthTable.add('z','q')
    });
    it ('Return the whole data that with same key', ()=> {
        expect(leftJoin(firstTable,secondTable)).toEqual([ [ 'd', 'e', 'f' ], [ 'a', 'b', 'c' ], [ 'g', 'h', 'i' ] ]);
    });
    it ('Return results with Null if it does not includes in the second hashtable', ()=> {
        expect(leftJoin(firstTable,thirdTable)).toEqual([["d", "e", "NULL"], ["a", "b", "NULL"], ["g", "h", "NULL"]]);
    });
    it ('Return results when hashtables with deffirent length', ()=> {
        expect(leftJoin(firstTable,fourthTable)).toEqual([["d", "e", "NULL"], ["a", "b", "NULL"], ["g", "h", "NULL"]]);
    });
    // it ('Successfully returns null for a key that does not exist in the hashtable', ()=> {
    //     const LL = myTable.get('asd')
    //     // console.log('3LL---------------',LL);
    //     expect(LL).toEqual(null);
    // });
    // it ('Successfully handle a collision within the hashtable', ()=> {
    //     const LL = myTable.get('btata')
    //     // console.log('4LL---------------',LL);
    //     expect(LL).toEqual([ { btata: 'ishaq' }, { ttaba: 'athamneh' } ]);
    // });
    // it ('Successfully retrieve a value from a bucket within the hashtable that has a collision', ()=> {
    //     const LL = myTable.getOne('btata')
    //     expect(LL).toEqual('ishaq');
    // });
    // it ('Successfully hash a key to an in-range value', ()=> {
    //     const index = myTable.hash('ajsdhj')
    //     expect(index >= 0).toEqual(true);
    //     expect(index < 1024).toEqual(true);
    // });
})