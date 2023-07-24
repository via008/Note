/**
 * 数组有一个排序数据区域和非排序数据区域
 * 每次都在非排序区域中找到最小的值，放到排序区域的后面
 */
function selectionSort(nums) {
  for(let i = 0; i < nums.length; i ++) {
    // k 保存未排序的数组中最小的值的索引
    let k = i;
    for(let j = i + 1; j < nums.length; j ++) {
      if(nums[j] < nums[k]) {
        k = j;
      }
    }
    [nums[i], nums[k]] = [nums[k], nums[i]];
  }
}

const nums = [1, 3, 1, 4, 2, 5]
selectionSort(nums);
console.log(nums)