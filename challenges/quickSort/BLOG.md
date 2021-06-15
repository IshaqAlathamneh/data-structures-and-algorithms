# Merge Sort
### Code
```
function QuickSort(arr, left, right) {
    if (left < right){
        let position = Partition(arr, left, right)
        QuickSort(arr, left, position - 1)
        QuickSort(arr, position + 1, right)
    }
    return arr;
}
function Partition(arr, left, right){
    let pivot = arr[right]
    let low = left - 1
    for (i = left; i <= right- 1; i++){
        if (arr[i] <= pivot){
            low++
            Swap(arr, i, low)
        }
    }
     Swap(arr, right, low + 1)
     return low + 1
}
function Swap(arr, i, low){
    let temp;
    temp = arr[i]
    arr[i] = arr[low]
    arr[low] = temp
}
```
### Algorethems
- Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time..
- we start from the leftmost element and keep track of index of smaller (or equal to) elements as i. While traversing, if we find a smaller element, we swap current element with arr[i]. Otherwise we ignore current element.

### Complexity
* time: O(n)
* space: O(1)

### Trace
arr: [8, 4, 23, 42, 16, 15] // [ 8, 4, 15, 42, 16, 23 ] // [ 4, 8, 15, 42, 16, 23 ]
left: 0 // 0 // 3
right: 5 // 1 // 5

[ 4, 8, 15, 16, 23, 42 ]

***return array***