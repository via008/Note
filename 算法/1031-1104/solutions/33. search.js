/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  /**
   * 1. 将数组二分（mid），一定有一边是有序的
   * 2. 判断 target 是否在有序数组中，如果在，则通过二分法查找有序数组
   * 3. 如果不在，无序数组重复步骤 1
   */
  if (nums.length === 0) {
    return -1;
  }
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let left = 0, right = nums.length - 1;
  while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([5,1,3], 3))
