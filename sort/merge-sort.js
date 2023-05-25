// Time Complexity: Best: O(n logn)
//								  Average: O(n logn)
//								  Worst: O(n logn)
// Space Complexity: O(n)

const unsortedNums = [35, 21, 52, 38, 59, 79, 81, 64, 38, 63];

function mergeArrays(arr1, arr2) {
    let i = 0,
        j = 0;
    const mergedArr = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }

    return mergedArr;
}

function mergeSort(nums) {
    if (nums.length < 2) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid, nums.length));
  
    return mergeArrays(left, right);
}

console.log(mergeSort(unsortedNums));