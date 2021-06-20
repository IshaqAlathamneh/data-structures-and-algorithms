# Merge Sort
### Code
```
function RepeatWords(string) {
    let myArr = string.split(/[ ,]+/);
    let result = [];
    for (let item of myArr) {
        let count = 0;
        let index = 0;
        let inx = 0;
        for (let data of myArr) {
           if(item.toLowerCase() == data.toLowerCase()){
            count++;
            count == 2?  inx = index: inx;
           } 
           index++
        }
        if (count > 1) result.push({element : item.toLowerCase(), count, inx}) ;
    }
    let index = result[0].inx;
    let word = ''
    for(let el of result){
        if (el.inx <= index) {
            word = el.element;
            index = el.inx;
        }
    }
    return word || 'No Repeated Words';
}
```
### Algorethems
- take every single word in the string.
- check if it's repeated in the array.
- save the index of first repeat.
- after that push the word and index into an array.
- take the smallest index in the elements of this array and return it.

### Complexity
* time: O(n^2)
* space: O(1)

### Trace
String: "Hi ishaq athamneh hi"
arr: ['Hi', 'ishaq', 'athamneh', 'hi']
results: [{
    element: 'hi',
    inx: 3
}]
word: hi

***return hi***