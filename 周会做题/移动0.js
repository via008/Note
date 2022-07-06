/**
 * 《移动 0》
 * 数组中有 0 和其他的数字，把数组中所有的 0 移动到数组末尾，还要保证非 0 元素的相对顺序不变。
 *
 * eg1
 * input: [0, 1, 0]
 * output: [1, 0, 0]
 *
 * eg2
 * input: [1, 0, 1]
 * output: [1, 1, 0]
 *
 * eg3
 * input: [0, 1, 3, 0, 4]
 * output: [1, 3, 4, 0, 0]
 *
 * eg4
 * input: [3, 0, 0, 4, 5, 0]
 * output: [3, 4, 5, 0, 0, 0]
 */

function swap(nums, m, n) {
  const val = nums[n];
  nums[n] = nums[m];
  nums[m] = val;
}

function solution(arr) {
  let i = 0;
  let j = 0;

  while(i < arr.length) {
    if (arr[i] !== 0) {
      swap(arr, i, j);
      j ++;
    }
    i ++;
  }
}
