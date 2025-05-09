/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 查找左右边界的方法
const getLeftBorder = (nums, target) => {
    // 闭区间
    let left = 0,
        right = nums.length - 1;
    
    while(left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

const getRightBorder = (nums, target) => {
    // 闭区间
    let left = 0,
        right = nums.length - 1;
    
    while(left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return right;
}

const searchRange = (nums, target) => {
    const start = getLeftBorder(nums, target);
    const end = getRightBorder(nums, target);

    if (start === nums.length || nums[start] !== target) {
        return [-1, -1];
    }

    return [start, end];
}

