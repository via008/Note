function search(nums, target) {
  let i = 0,
    j = nums.length - 1;

  // 搜索右边界
  while (i <= j) {
    const mid = Math.floor((j + i) / 2);

    if (nums[mid] <= target) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  const right = i;
  if (nums[j] !== target) {
    return 0;
  }

  // 搜索左边界
  (i = 0), (j = nums.length - 1);
  while (i <= j) {
    const mid = Math.floor((j + i) / 2);

    if (nums[mid] < target) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  const left = j;

  return right - left - 1;
}
