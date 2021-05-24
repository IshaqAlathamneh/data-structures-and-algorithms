


class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}


class AnimalShelter {
    constructor() {
       this.front = null; 
    }
    
    peek() {
        return this.front? this.front.value : this.front;
    }
    enqueue(item) {
        if(!(item == "dog" || item == "cat")){
            return 'The animal should be either a dog or a cat';
        }
        let node = new Node(item);
        if (!this.front) {
            this.front = node;
        } else {
            let currentNode = this.front;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        return this;
    }

    dequeue(pref) {
        if (this.isEmpty()) {
            return `It's Empty`;
        }
        if(pref){
                
        let popo= this.front;
        this.front = null;
        let data = new AnimalShelter();
        let deleted;
                while (popo) {
                    if(popo.value !== pref){
                        data.enqueue(popo.value)
                    }else{
                        deleted = popo.value;
                    }
                    popo = popo.next
                }
                this.front = data.front;
                return deleted;
        }
        
            let popo= this.front.value;
            
            this.front = this.front.next;
            return popo;
        
    }

    isEmpty() {
        return this.front? false : true;
    }
}
module.exports = AnimalShelter;