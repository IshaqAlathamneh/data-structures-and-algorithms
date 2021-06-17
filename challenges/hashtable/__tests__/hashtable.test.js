'use strict';

const HashTable = require('../hashtable');
const myTable = new HashTable(1024)
describe('Hash Table', ()=> {
    beforeAll(()=> {
        myTable.add('btata', 'ishaq')
        myTable.add('ttaba', 'athamneh')
        
    });
    it ('Adding a key/value to your hashtable results in the value being in the data structure', ()=> {
        const index = myTable.hash('btata')
        const LL = myTable.table[index];
        myTable.add('test', 'hash')

        // console.log('1LL---------------',LL);
        expect(LL.root.value).toEqual({btata: 'ishaq'});
        expect(LL.root.next.value).toEqual({ttaba: 'athamneh'});
        expect(myTable.contains('test')).toEqual(true);
    });
    it ('Retrieving based on a key returns the value stored', ()=> {
        const LL = myTable.get('test')
        // console.log('2LL---------------',LL);
        expect(LL[0]['test']).toEqual('hash');
        expect(LL[0].test).toEqual('hash');
    });
    it ('Successfully returns null for a key that does not exist in the hashtable', ()=> {
        const LL = myTable.get('asd')
        // console.log('3LL---------------',LL);
        expect(LL).toEqual(null);
    });
    it ('Successfully handle a collision within the hashtable', ()=> {
        const LL = myTable.get('btata')
        // console.log('4LL---------------',LL);
        expect(LL).toEqual([ { btata: 'ishaq' }, { ttaba: 'athamneh' } ]);
    });
    it ('Successfully retrieve a value from a bucket within the hashtable that has a collision', ()=> {
        const LL = myTable.getOne('btata')
        expect(LL).toEqual('ishaq');
    });
    it ('Successfully hash a key to an in-range value', ()=> {
        const index = myTable.hash('ajsdhj')
        expect(index >= 0).toEqual(true);
        expect(index < 1024).toEqual(true);
    });
})