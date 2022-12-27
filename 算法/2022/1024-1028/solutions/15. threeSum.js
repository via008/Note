/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length; i ++) {
    let j = i + 1, k = nums.length - 1;

    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while(j < k) {
      const sum = nums[j] + nums[k];
      if (sum === -nums[i]) {
        result.push([nums[i], nums[j], nums[k]]);
        // 去重
        while(j < k && nums[j] === nums[j + 1]) {
          j ++;
        }
        while(j < k && nums[k] === nums[k + 1]) {
          k --;
        }
        k --;
        j ++;
      } else if (sum > -nums[i]) {
        k --;
      } else {
        j ++;
      }
    }
  }
  return result;
};
console.log(threeSum([-2,0,0,2,2]));