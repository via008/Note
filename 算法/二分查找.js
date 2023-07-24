/**
 * 适用条件
 * 1. 有序数据，无序数据需要先排序，效率往往会更低
 * 2. 数组等可以随机访问数据元素的结构，链表不适合
 * 3. 数据量大，数据量小的话，顺序遍历更快
 */

// 双闭合区间
function binarySearch(nums, target) {
  if (!nums.length) {
    return;
  }
  let i = 0,
      j = nums.length - 1;

  while(i <= j) {
    const m = Math.floor(i + (j - i) / 2);
    if (nums[m] > target) {
      j = m - 1;
    } else if (nums[m] < target) {
      i = m + 1;
    } else {
      return m;
    }
  }

  return -1;
}

// 左开右闭区间
function binarySearch2(nums, target) {
  if(!nums.length) {
    return;
  }
  let i = 0,
      j = nums.length;
  while(i < j) {
    const m = Math.floor(i + (j - i) / 2);
    if (nums[m] > target) {
      j = m;
    } else if (nums[m] < target) {
      i = m + 1;
    } else {
      return m;
    }
  }

  return -1;
}

/**
 * 数组中有多个目标元素时
 * 查找左边界和右边界
 */
// 左边界
function binarySearchLeft(nums, target) {
  if (!nums.length) {
    return;
  }
  let i = 0,
      j = nums.length - 1;
  while(i <= j) {
    const m = Math.floor(i + (j - i) / 2);
    if (nums[m] > target) {
      j = m - 1;
    } else if (nums[m] < target) {
      i = m + 1;
    } else {
      j = m - 1;
    }
  }

  // 越界和不存在目标元素判断
  if (i === nums.length || target !== nums[i]) {
    return -1;
  }

  return i;
}

// 右边界
function binarySearchRight(nums, target) {
  if (!nums.length) {
    return;
  }
  let i = 0,
      j = nums.length - 1;
  while(i <= j) {
    const m = Math.floor(i + (j - i) / 2);
    if (nums[m] > target) {
      j = m - 1;
    } else if (nums[m] < target) {
      i = m + 1;
    } else {
      i = m + 1;
    }
  }
  if (j < 0 || target !== nums[j]) {
    return -1;
  }

  return j;
}

console.log(binarySearchRight([1, 6, 6, 6, 6, 6, 6, 10, 12, 15], 6));
