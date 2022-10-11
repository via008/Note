/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 二分查找
var binarySearch = function(numbers, target, start, end) {
  if (end < start) {
    return false;
  }
  const center = Math.floor((start + end) / 2);
  if (numbers[center] === target) {
    return center;
  }
  if (numbers[center] < target) {
    return binarySearch(numbers, target, center + 1, end);
  } else {
    return binarySearch(numbers, target, start, center - 1);
  }
}

var twoSum = function(numbers, target) {
  if (!numbers.length) {
    return [];
  }
  // 二分查找
  // let i = 0;
  // while (i < numbers.length) {
  //   const diff = target - numbers[i];
  //   const res = binarySearch(numbers, diff, ++i, numbers.length);
  //   if (res) {
  //     return [i, res + 1];
  //   }
  // }

  // 双指针
  let i = 0, j = numbers.length - 1;
  while(i < j) {
    const sum = numbers[i] + numbers[j];
    if (sum === target) {
      return [i + 1, j + 1];
    }
    if (sum > target) {
      j --;
    } else {
      i ++;
    }
  }
};

console.log(twoSum([5,25,75], 100))