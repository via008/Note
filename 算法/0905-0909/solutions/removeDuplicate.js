function solutions(nums) {
  if (!nums || nums.length < 2) {
    return nums;
  }

  let pre;
  for (let i = 0; i < nums.length; ) {
    const item = nums[i];
    if (item === pre) {
      nums.splice(i, 1);
    } else {
      pre = item;
      i++;
    }
  }

  // let pre = 0;
  // for(const item of nums) {
  //   if (item !== nums[pre]) {
  //     pre ++;
  //     nums[pre] = item;
  //   }
  // }
  // return pre + 1;
}
