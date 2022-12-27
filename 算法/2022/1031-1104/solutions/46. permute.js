/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 1) {
    return nums;
  }
  for (let i = 0; i < nums.length; i ++) {
    const temp = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
    permute(temp);
  }
};