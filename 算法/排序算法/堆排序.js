function siftDown(nums, n, i) {
  while(true) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;
    if (left < n && nums[max] < nums[left]) {
      max = left;
    }
    if (right < n && nums[max] < nums[right]) {
      max = right;
    }
    if (max === i) {
      break;
    }
    [nums[i], nums[max]] = [nums[max], nums[i]];
    i = max;
  }
}

function heapSort(nums) {
  // 建堆操作：堆化除叶节点之外的其他所有节点
  for(let i = Math.floor(nums.length / 2) - 1; i >= 0; i --) {
    siftDown(nums, nums.length, i);
  }
  // 从堆中提取最大的元素
  for(let i = nums.length - 1; i > 0; i --) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    siftDown(nums, i, 0);
  }
}

const nums = [9, 1, 4, 2, 6, 7, 8];
heapSort(nums);
console.log(nums)