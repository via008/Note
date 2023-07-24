function bubbleSort(nums) {
  // 外层循环，[0, i] 表示未排序的数组
  for(let i = nums.length - 1; i > 0; i --) {
    let flag = false;
    // 内层循环，将 [0, i] 中最大的元素放到最后
    for(let j = 0; j < i; j++) {
      if(nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        flag = true;
      }
    }
    // 如果发现一轮没有任何交换，则可以直接退出
    if(!flag) break;
  }
}
const nums = [1, 3, 1, 4, 2, 5]
bubbleSort(nums);
console.log(nums)