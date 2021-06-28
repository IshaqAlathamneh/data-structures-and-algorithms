# Bussiness Trip
### Code
```
function businessTrip (graph, array) {
    let cost = 0;
    if(array.length < 2) return 'false $0';
    for(let idx=0; idx<array.length-1; idx++) {
        let element = {}
        let current = graph.adjacencyList.entries();
        for(let [k,v] of current) {
            if (k.value == array[idx]) {
                element = k
            }
        }
        const adjacencies =  graph.adjacencyList.get(element);
        if (adjacencies) {  
            let check = cost
            adjacencies.forEach(el => {
                if (el.vertex.value == array[idx+1]) {
                    cost+= el.weight
                }
            })
            if(cost == check) return 'false $0';
        }else{
            return 'false $0'
        }
    };


    return `true $${cost}`
}
```
### Algorethems
- Declare cost variable
- check if the array length less than 2 then returs false
- loop over the array and take the key that match the current element
- get the value of this key from the map
- check if the next element found in the value then add the wieght to the cost

### Complexity
* time: O(n^2)
* space: O(1)

### Trace

Graph: 'zero' ---300-> 'two' ---100-> 'one'
array: [zero, two, one]
cost: 300// 400

***return true $cost***