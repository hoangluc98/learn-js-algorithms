const unsortedNums = [35, 21, 52, 38, 59, 79, 81, 64, 38, 63];

function bubbleSort(nums) {
    for (let i = nums.length; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j+1]) {
                [nums[j],  nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }

    return nums
}

console.log(bubbleSort(unsortedNums))