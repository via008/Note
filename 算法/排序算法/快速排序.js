/**
 * 快速排序，选择一个数据作为基准数，
 * 将比基准数大的数据放在右边，比基准数小的数据放在左边
 * 再递归处理数据
 */
// 交换两个值
function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
// 哨兵计划
function portition(nums, left, right) {
  // nums[left] 作为基准值
  let i = left,
      j = right;
  while(i < j) {
    // 从右到左找到第一个比基准值小的值
    while(i < j && nums[j] >= nums[left]) {
      j -= 1;
    }
    // 从左到右找到第一个比基准值大的值
    while(i < j && nums[i] <= nums[left]) {
      i += 1;
    }
    console.log('===i', i)
    console.log('===j', j)
    // 交换两个值
    swap(nums, i, j);
  }
  // 将基准值交换到两个子数组的分界线处
  swap(nums, i, left);
  return i;
}

function quickSort(nums, left, right) {
  if(left >= right) {
    return;
  }
  // 先对原数组执行一次哨兵计划
  const pivot = portition(nums, left, right);
  quickSort(nums, left, pivot - 1);
  quickSort(nums, pivot + 1, right);
}

const nums = [1, 3, 1, 4, 2, 5]
quickSort(nums, 0, nums.length - 1);
console.log(nums)