/**
 * 给两个有序数组和一个目标值 sum
 * 从这个数组中各找一个数，这两个数的和与目标值 sum 的差值最小
 * 返回这两个数的索引位置
 *
 * eg1
 * input: [1, 3, 4, 6], [2, 3, 5, 7], 7
 * output: [2, 1]
 *
 * eg2
 * input: [2, 5, 6, 8], [-3, -2, 0, 3], 4
 * output: [2, 1]
 *
 * eg3
 * input:[-5, -1, 0, 1, 4, 5, 7, 9], [-3, 3, 10, 12, 15, 18, 21, 28], 20
 * output: [1, 6]
 */

 function solution(arr1, arr2, sum) {
  // write code here...
  let min = Number.MAX_SAFE_INTEGER;
  let result = [];
  for(let i = 0; i < arr1.length; i ++) {
    for(let j = 0; j < arr2.length; j ++) {
      const diff = Math.abs(sum - (arr1[i] + arr2[j]));
      if (diff === 0) {
        return [i, j];
      }
      if (min > diff) {
        min = diff;
        result = [i, j]
      }
    }
  }

  return result;
}

console.log(solution([1, 3, 4, 6], [2, 3, 5, 7], 7));
console.log(solution([2, 5, 6, 8], [-3, -2, 0, 3], 7));
console.log(solution([-5, -1, 0, 1, 4, 5, 7, 9], [-3, 3, 10, 12, 15, 18, 21, 28], 20));