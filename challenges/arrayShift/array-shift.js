module.exports = function insertShiftArray (arr, val) {
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(index == (Math.ceil(arr.length/2))){
            newArr.push(val);
            newArr.push(element);
        }else{
            newArr.push(element)
        }
    }
    return newArr;
}