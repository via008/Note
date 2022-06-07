/**
 * 《分零钱》
 * 妈妈手里有一些零花钱，一块的、两块的、五块的等等，
 * 现在想要把这些零花钱尽可能的平均分给他的两个孩子。
 * 快来帮助这位妈妈吧
 * 
 * eg1
 * input: [1,2,5,7]
 * output: [1,2,5], [7] 或 [1,7],[2,5]
 * 
 * eg2
 * input: [1,5,4]
 * output: [1,4], [5]
 * 
 * eg3
 * input: [1,7,3,5]
 * output: [1,7], [3,5]
 * 
 * eg4
 * input: [2,6,100, 8]
 * output: [2,6,8] [100]
 */

function solution(nums) {
  let sum1 = 0;
  const result1 = [];
  let sum2 = 0;
  const result2 = [];

  // 从大到小排序
  nums.sort((a, b) => b - a);

  let i = 0;
  while(i < nums.length) {
    if (sum1 > sum2) {
      sum2 += nums[i];
      result2.push(nums[i]);
    } else {
      sum1 += nums[i];
      result1.push(nums[i]);
    }
    i ++;
  }
  return [result1, result2];
}

console.log(solution([2,6,100, 8]));
console.log(solution([1,7,3,5]));
console.log(solution([1,5,4]));
console.log(solution([1,2,5,7]));