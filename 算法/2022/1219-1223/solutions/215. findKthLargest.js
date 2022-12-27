// 交换数组中两个位置的值
const swap = (nums, a, b) => {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

// 划分
const pratition = (nums, p, r) => {
  const key = nums[r];
  let i = p - 1;
  for(let j = p; j < r; j ++) {
    if (nums[j] <= key) {
      i ++;
      swap(nums, i, j);
    }
  }
  swap(nums, i + 1, r);
  return i + 1;
}

// 快速排序
const quickSort = (nums, p = 0, r = nums.length - 1) => {
  if (nums.length < 2) {
    return nums;
  }

  if (p < r) {
    const i = pratition(nums, p, r);
    // 分别对左边和右边的数据进行上述过程
    quickSort(nums, p, i - 1);
    quickSort(nums, i + 1, r);
  }
  return nums;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  if (!nums.length || k > nums.length) {
    return undefined;
  }
  quickSort(nums);
  return nums[nums.length - k];
};

console.log(findKthLargest([3, 7, 9, 1, 0, 3, 4, 6], 3));
