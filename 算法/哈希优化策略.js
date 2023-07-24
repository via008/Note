function twoSum(nums, target) {
  // 保存已经遍历过的元素
  const map = {};

  for(let i = 0; i < nums.length; i ++) {
    const temp = map[target - nums[i]];
    if (temp !== undefined) {
      return [temp, i];
    } else {
      map[nums[i]] = i;
    }
  }

  return [];
}