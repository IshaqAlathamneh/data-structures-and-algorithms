# Breadth First Graph
### Code
```
breadthFirst(vertex){
        let arrBreadth = [];
        const q = new Queue()
        q.enqueue(vertex)
        const trevarse = (node) => {
            const adjacencies =  this.adjacencyList.get(node.value); 
            if(!arrBreadth.includes(node.value.value)) arrBreadth.push(node.value.value);
            adjacencies.forEach(element => {
                if(!arrBreadth.includes(element.vertex.value)) q.enqueue(element.vertex)
            });
            q.dequeue()
            if(q.front){
                trevarse(q.front)
            }
        }
        trevarse(q.front)
        return arrBreadth.slice(1);
    }
```
### Algorethems
- Declare results array & queue
- enqueue current vertex to the queue.
- enter recursion function and check if current value does not exist in result array then push the value.
- check the edges of current value if not exist in the result array enqueue them.
- then check if there's a front for the queue if it's traverse again.
- return results array

### Complexity
* time: O(n)
* space: O(n)

### Trace

Graph: ![Graph](./gr.png)
BreadthFirst(1)
arrBreadth: [1,2,5,3,4,6]
queue: [1] // [2,5] // [5,3,4]// [3,4,6] // [4,6] // [6] // []

***return arrBreadth***