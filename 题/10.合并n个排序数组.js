/**
 * 《合并 n 个排序数组》
 * 关联题目：https://cooper.didichuxing.com/knowledge/2199348623203/2199541302040
 *
 * eg1
 * input: [1,3,8], [2,4], [2,5,6]
 * output: [1,2,2,3,4,5,6,8]
 *
 * eg2
 * input: [1,6], [2,3,7], [3,5], [2,4]
 * output: [1,2,2,3,3,4,5,6,7]
 */

function merge2Arr(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length || j < arr2.length) {
    if (!arr1[i] && arr1[i] !== 0) {
      result.push(arr2[j]);
      j ++;
      continue;
    }
    if (!arr2[j] && arr2[j] !== 0) {
      result.push(arr1[i]);
      i ++;
      continue;
    }

    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i ++;
    } else {
      result.push(arr2[j]);
      j ++;
    }
  }
  return result;
}

function solution(grids = []) {
  return grids.reduce((acc, cur) => {
    return merge2Arr(acc, cur);
  }, []);
}

console.log(solution([[1,3,8], [2,4], [2,5,6]]));
console.log(solution([[1,6], [2,3,7], [3,5], [2,4]]));
console.log(solution([[1,3,8], [0,2,4]]));