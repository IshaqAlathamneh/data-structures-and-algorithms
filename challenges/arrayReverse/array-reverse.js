module.exports = function reverseArray  (array) {
    let newArr = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[array.length - index - 1];
        newArr.push(element)
    }
    return newArr;
}