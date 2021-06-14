# Merge Sort
### Code
```
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
```
### Algorethems
- divides the array in two halves.
- recursively sorts them and finally merges the two sorted halves

### Trace
challenge([5,4,10,2,7])

array : [5,4,10,2,7] 

left: [5,4]

right: [10,2,7]

array: [5,4,10,2,7] 

---------------------

left: [5]

right: [4]

array: [5,4] --> [4,5]

---------------------

left: [10]

right: [2,7] --> left:[2] & right:[7]

array: [10,2,7] --> [2,7,10]

----------------------

array:[2,4,5,7,10]



***return array***