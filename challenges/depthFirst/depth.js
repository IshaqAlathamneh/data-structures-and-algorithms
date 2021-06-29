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

module.exports = depthFirst;