/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // for(let i = 0; i <= nums.length; i ++) {
  //   if (nums.indexOf(i) === -1) {
  //     return i;
  //   }
  // }

  // 先排序
  // nums.sort((a, b) => a - b);

  // for(let i = 0; i <= nums.length; i ++) {
  //   if (i !== nums[i]) {
  //     return i;
  //   }
  // }

  // hash集合
  // const set = new Set();
  // for(let i = 0; i <= nums.length; i ++) {
  //   set.add(nums[i]);
  // }
  // for(let i = 0; i <= nums.length; i ++) {
  //   if(!set.has(i)) {
  //     return i;
  //   }
  // }

  // 异或运算
  let result = 0;
  for (let i = 0; i < nums.length ; i ++) {
    result ^= nums[i];
  }
  for (let i = 0; i <= nums.length ; i ++) {
    result ^= i;
  }

  return result;
};