// Time Complexity: Best: O(n)
//								 Average: O(n^2)
//								 Worst: O(n^2)
// Space Complexity: O(1)

const unsortedNums = [35, 21, 52, 38, 59, 79, 81, 64, 38, 63];

function bubbleSort(nums) {
    let noSwaps = false;
    for (let i = nums.length; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j+1]) {
                [nums[j],  nums[j+1]] = [nums[j+1], nums[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }

    return nums;
}

console.log(bubbleSort(unsortedNums));