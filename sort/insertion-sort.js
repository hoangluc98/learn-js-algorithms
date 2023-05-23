// Time Complexity: Best: O(n)
//								  Average: O(n^2)
//								  Worst: O(n^2)
// Space Complexity: O(1)

const unsortedNums = [35, 21, 52, 38, 59, 79, 81, 64, 38, 63];

function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] >= nums[i-1]) continue;

        for (let j = i; j > 0; j--) {
            if (nums[j] >= nums[j-1]) break;
            [nums[j], nums[j-1]] = [nums[j-1], nums[j]]
        }
    }
  
    return nums;
}

console.log(insertionSort(unsortedNums));