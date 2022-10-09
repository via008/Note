function findRepeatNumber(nums) {
  // const map = {};
  // for(const num of nums) {
  //   if (map[num]) {
  //     return num;
  //   }
  //   map[num] = true;
  // }

  // 索引与值一对多的关系
  // 1. 当 i === nums[i]，跳过，i ++
  // 2. 当 nums[nums[i]] === nums[i]，重复，直接返回结果
  // 3. 否则 交换 i 和 nums[i] 的值
  let i = 0;
  while (i < nums.length) {
    const num = nums[i];
    if (i === num) {
      i++;
      continue;
    }

    if (nums[num] === num) {
      return num;
    }
    nums[i] = nums[num];
    nums[num] = num;
  }
  return -1;
}
