function Merge(left, right, arr) {

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i]
            i = i + 1
        } else {
            arr[k] = right[j]
            j =j + 1
        }
        k =k + 1
    }

    if (i == left.length){
        // console.log('in right >>>>>>>>>>:', right);
        // console.log('in arr >>>>>>>>>>:', arr);
        while ( j < right.length) {
            arr[k] = right[j];
            k++;
            j++;
        }
    }
    else{
        // console.log('in arr >>>>>>>>>>:', arr);
        // console.log('in left >>>>>>>>>>:', left);
        while ( i < left.length) {
            arr[k] = left[i];
            k++;
            i++;
        }
    }
}


module.exports =  function mergeSort(array) {
    let n = array.length;

    if (n > 1) {
        let mid = n / 2;
        let left = array.slice(0, mid);
        let right = array.slice(mid,n)
        // console.log('right arr ------------>', right);
        mergeSort(left)
        mergeSort(right)
        Merge(left, right, array)

    }
    console.log('------------------------------',array);
    return array;
};