/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // 双指针
    let left = 0,
        right = 0;
    
    // 窗口和
    let sum = 0;

    // 结果
    let min = Number.MAX_VALUE;

    while(right < nums.length) {
        sum += nums[right];

        while(sum >= target) {
            min = Math.min(min, right - left + 1);
            sum -= nums[left];
            left ++;
        }

        right ++;
    }

    return min === Number.MAX_VALUE ? 0 : min;
};