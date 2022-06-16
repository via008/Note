/**
 * 操场上，男生按身高从低到高站成了一队，女生按身高从低到高站成了一队，
 * 现在，快来帮助体育老师将他们按身高排成一队吧。
 * 不可以使用魔法(数组的 sort 方法)
 * eg
 * input: [1,2,5], [3,4]
 * output: [1,2,3,4,5]
 * 
 * input: [1,3,5], [2,4,6,8]
 * output: [1,2,3,4,5,6,8]
 * 
 * input: [1,3,5,7], [2,4,5]
 * output: [1,2,3,4,5,5,7]
 */
function solution(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length || j < arr2.length) {
    if (!arr1[i]) {
      result.push(arr2[j]);
      j ++;
      continue;
    }
    if (!arr2[j]) {
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
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

console.log(solution([1,2,5], [3,4]))
console.log(solution([1,3,5], [2,4,6,8]))
console.log(solution([1,3,5,7], [2,4,5]))