/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) {
    return nums;
  }
  let max = Number.MIN_SAFE_INTEGER;
  let temp = 0;
  let i = 0, j = 0;
  while(i <= j && j < nums.length) {
    if (temp + nums[j] >= temp) {
      temp += nums[j];
      j ++;
      continue;
    }
    if (temp > max) {
      max = temp;
    }
    i ++;
    j = i;
  }
  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))