/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let min = Number.MAX_VALUE;
    let start = 0;
    let sum = 0;

    for(let i = 0; i < nums.length; i ++) {
        sum += nums[i];

        if (sum >= target) {
            min = Math.min(min, i - start + 1);
            start ++;
        }
    }

    return min;
};