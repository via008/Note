/**
 * 《买苹果》
 * 小明去苹果摊买苹果，每个苹果有不同的重量
 * 小明想从苹果堆中挑出两个合适的苹果，使这两个苹果的重量和最接近指定重量
 *
 * eg1
 * input: [2, 7, 5, 6, 7], 10
 * output: [2, 7] 或 [5，6]
 *
 * eg2
 * input: [3, 8, 4, 1] 7
 * output: [3, 4]
 *
 * eg3
 * input: [4, 9, 5, 2] 5
 * output: [4, 2]
 */

 function solution(nums,target) {
  const map = [];

  for(let i = 0; i < nums.length; i ++) {
    for(let j = i + 1; j < nums.length; j ++) {
      const sum = nums[i] + nums[j];
      if(sum === target) {
        return [nums[i], nums[j]];
      } else {
        const diff = Math.abs(sum - target);
        map[diff] = [nums[i], nums[j]];
      }
    }
  }

  return map.find(item => item);
}

console.log(solution([4, 9, 5, 2], 5));