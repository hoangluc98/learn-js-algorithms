// Time Complexity: Best: O(n^2)
//								  Average: O(n^2)
//								  Worst: O(n^2)
// Space Complexity: O(1)

const unsortedNums = [35, 21, 52, 38, 59, 79, 81, 64, 38, 63];

function selectionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
      let minIdx = i;
      for (let j = i+1; j < nums.length; j++) {
        if (nums[minIdx] > nums[j]) {
          minIdx = j;
        }
      }
  
      if (i !== minIdx) {
        [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]]
      };
    }
  
    return nums;
  }

console.log(selectionSort(unsortedNums));