// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (
      nums.lastIndexOf(target - nums[i]) !== i &&
      nums.lastIndexOf(target - nums[i]) >= 0
    ) {
      return [i, nums.lastIndexOf(target - nums[i])];
    }
  }
  return [];
};

let arr = [2, 7, 11, 15];
console.log(twoSum(arr, 9));
