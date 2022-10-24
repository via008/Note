/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result;
  for(let num of nums) {
    result ^= num;
  }
  return result;
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))