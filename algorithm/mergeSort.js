//=======================================================>
const mergeSort = (arr) => {
    //base case to stop recursion
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    //recursion cases
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    //result
    return merge(leftSorted, rightSorted);
}

//========================================================>
//function for merging sorted array
const merge = (left, right) => {
    const results = [];
    while(left.length && right.length) {
      if (left[0] <= right[0]) {
         results.push(left.shift());
      } else {
         results.push(right.shift());
      }
    }

    results.push(...left);
    results.push(...right);
    return results;
 }

//1st test case==========================================>
const arr =  [3, 2, 1, 13, 8, 5, 0, 1];
console.log("Input array: ", arr);
console.log('Sorted arr:', mergeSort(arr))

//2nd test case==========================================>
const arr2 = [105, 79, 100, 110];
console.log("Input array2: ", arr2);
console.log('Sorted arr2:', mergeSort(arr2));