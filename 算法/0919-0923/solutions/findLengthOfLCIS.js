function findLengthOfLCIS(nums) {
  let i = 0,
    j = 1,
    maxLength = 0;
  while (j <= nums.length) {
    const length = j - i;
    maxLength = length > maxLength ? length : maxLength;

    if (nums[j] <= nums[j - 1]) {
      i = j;
    }
    j++;
  }

  return maxLength;
}
