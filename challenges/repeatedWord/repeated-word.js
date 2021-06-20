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
module.exports = RepeatWords;