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

module.exports = businessTrip;