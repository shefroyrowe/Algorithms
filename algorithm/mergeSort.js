//merge two sorted parts of an array
const merge = (arr, left, middle, right) => {
    
    //length of both sorted aub arrays
    let l1 = middle - left + 1;
    let l2 = right - middle;
    // Create new subarrays
    let arr1 = new Array(l1);
    let arr2 = new Array(l2);
    
    //assign values in subarrays
    for (let i = 0; i < l1; ++i) {
        arr1[i] = arr[left + i];
    }
    for (let i = 0; i < l2; ++i) {
        arr2[i] = arr[middle + 1 + i];
    }

    //to travesrse and modify main array
    let i = 0,
        j = 0,
        k = left;
        
    //assign the smaller value for sorted output
    while (i < l1 && j < l2) {
        if (arr1[i] < arr2[j]) {
            arr[k] = arr1[i];
            ++i;
        } else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }
    //update the remaining elements
    while (i < l1) {
        arr[k] = arr1[i];
        i++;
        k++;
    }
    while (j < l2) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
}

//implement merger sort
const mergeSort = (arr, left, right) => {
    if (left >= right) {
        return;
    }
    
    let middle = left + parseInt((right - left) / 2);//middle index to create subarray halves
    
    //apply mergeSort to both the halves
    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);
    
    merge(arr, left, middle, right);//merge both sorted parts
}

//1st test case
const arr =  [3, 2, 1, 13, 8, 5, 0, 1];//input array
console.log("Input array: " + arr);//display input array
mergeSort(arr, 0, arr.length - 1);//apply merge sort function
console.log("Sorted arr: " + arr);//display output

//2nd test case
const arr2 = [105, 79, 100, 110];
console.log("Input array2: " + arr2);
mergeSort(arr2, 0, arr2.length - 1);//apply merge sort function
console.log("Sorted arr2: " + arr2);