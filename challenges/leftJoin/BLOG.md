# Left Join
### Code
```
function leftJoin (hash1, hash2) {
    const arr1 = hash1.table;
    const results = [];
    for(let element of arr1){
        if (element) {
            let current = element.root;
            while (current) {
                let peers = Object.entries(current.value);
                let item = hash2.getOne(peers[0][0])
                item? peers[0].push(item): peers[0].push('NULL');
                results.push(peers[0])
                current = current.next
            }
        }
    }
    return results;
}
```
### Algorethems
- Declare results array
- for loop through the table of first hash table.
- if element found then while loop through this element.
- take the key and value of all objects as an array.
- check if this key is found in the second hash table.
- if it is push the value to the array and then push this array to results array.
- return results array

### Complexity
* time: O(n)
* space: O(1)

### Trace
hash1: [{a:'b'},{d:'e'},{g:'h'}]
hash2: [{a:'c'},{d:'f'},{g:'i'}]
element: {a:'b'} // {d:'e'} // {g:'h'}
results: [['a','b','c']] // [['a','b','c'],['d','e','f'],['g','h','i']]

***return results***