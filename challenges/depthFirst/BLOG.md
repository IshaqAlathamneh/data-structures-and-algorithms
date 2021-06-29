# Map Depth First
### Code
```
function depthFirst (adj) {
    let arr = [];
    let current = adj.entries();
    let queue = []
    for(let [k,v] of current) {
        queue.push(k);
        break;
    }
    while (queue.length > 0) {
        let value = adj.get(queue[0]);
        let val = value[0]
        if (val) {   
            queue.push(val.vertex)
        }
        arr.push(queue[0].value)
        queue.shift()
    }
    return arr;
}
```
### Algorethems
- Declare result array & queue
- loop over map keys and push the first one to the queue then break
- while loop if the length of queue more than 0
- push the first edge to the queue then push the current value to the result array
- delete the first item from the queue
- return result array

### Complexity
* time: O(n)
* space: O(n)

### Trace

Map: 'zero' --- 'two' --- 'one' -- 'five'
            \                  \
             'four'              'three'
array: [] // ['zero'] // ['zero', 'two'] // ['zero', 'two', 'one'] // ['zero', 'two', 'one', 'five']
queue: ['zero'] // ['two'] // ['one'] // ['five'] // []

***return array***