/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  // 记录差值最小对应的和
  let result = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length; i ++) {
    let left = i + 1, right = nums.length - 1;
    while(left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      // 比较绝对值
      if (Math.abs(target - result) > Math.abs(target - sum)) {
        result = sum;
      }
      
      if (sum > target) {
        right --;
      } else if (sum < target) {
        left ++;
      } else {
        return sum;
      }
    }
  }
  return result;
};
console.log(threeSumClosest([-1,2,1,-4], 1));