module.exports = function BinarySearch(sortedArr, val){
    let check = Math.ceil(sortedArr.length/2)
    let checkTwo = Math.ceil(check/2)
    let myIndex = -1;
    for (let index = 0; index < sortedArr.length/2; index++) {
        const element = sortedArr[index];
        if(val == sortedArr[check]){
            myIndex = check;
            break;
        }else if(val > sortedArr[check]){
            check += checkTwo;
            checkTwo = Math.ceil(checkTwo/2);
        }else{
            check -= checkTwo;
            checkTwo = Math.ceil(checkTwo/2);
        }
        
    }
    return myIndex;
}