# Insertion Sort
### Code
```
function sortArray  (array) {
    for (let i = 0; i < array.length; i++) {
        let j = i - 1;
        let temp = array[i]
        while (j >= 0 && temp < array[j]) {
            array[j + 1] = array[j]
            j = j - 1
        }
        array[j + 1] = temp;
    }
    return array;
}
```
### Algorethems
- for loop over the array
- declare two variables `j` and `temp`
- `temp` equal current value and `j = index -1`
- while loop over the array if the element less than the previous one
- inside while we update the current value to be equal to previous one then we update `j` value to  `j-1`
- after while loop we make the `array[j+1]` equal to temp
- after for loop we return array
### Trace
challenge([5,4,10,2,7])

array : [5,4,10,2,7] 

***For Loop One***

i : 0
j : -1 ,
temp : 5,
array : [5,4,10,2,7], 

***For Loop Two***

i : 1
j : 0 , -1
temp : 4,
array : [5,5,10,2,7], [4,5,10,2,7]

***For Loop Three***

i : 2
j : 1
temp : 10,
array : [4,5,10,2,7]

***For Loop Three***

i : 3
j : 2, 1, 0, -1
temp : 2,
array : [4,5,10,10,7], [4,5,5,10,7], [4,4,5,10,7], [2,4,5,10,7]

***For Loop Three***

i : 4
j : 3, 2
temp : 7,
array : [2,4,5,10,7], [2,4,5,10,10] ,[2,4,5,7,10]

***return array***