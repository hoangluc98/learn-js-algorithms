// Time Complexity: Best: O(n logn)
//					Average: O(n logn)
//					Worst: O(n^2)
// Space Complexity: O(logn)

const unsortedNums = [35, 21, 52, 38, 59, 79, 81, 64, 38, 63];

function swap(arr, i, j) {
    return [arr[i], arr[j]] = [arr[j], arr[i]];
}

function pivotPseudocode(arr, start = 0, end = arr.length - 1) {
    let pivot = start,
        i = start + 1;
    
    while (i <= end) {
        if (arr[start] > arr[i]) {
            pivot++;
            swap(arr, i, pivot);
        }

        i++;
    }

    swap(arr, start, pivot);
    return pivot;
}

function quickSort(nums, start = 0, end = nums.length - 1) {
    if (start < end) {
        const pivot = pivotPseudocode(nums, start, end);
        quickSort(nums, start, pivot - 1);
        quickSort(nums, pivot + 1, end);
    }
  
    return nums;
}

console.log(quickSort(unsortedNums));