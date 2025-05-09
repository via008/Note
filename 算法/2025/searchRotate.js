/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 找到旋转的下标 -> 得到两个升序数组 -> 二分法找目标值
    const index = getIndex(nums);
    console.log('====index', index)
    
    const leftIndex = getTargetIndex(nums, 0, index, target);

    if (leftIndex > -1) {
        return leftIndex;
    }

    const rightIndex = getTargetIndex(nums, index + 1, nums.length - 1, target);

    if (rightIndex > -1) {
        return rightIndex;
    }

    return -1;
};

const getTargetIndex = (nums, left, right, target) => { 
    while(left <= right) {
        const mid = left + Math.floor((right - left + 1) / 2);

        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}

const getIndex = (nums, left = 0, right = nums.length - 1) => {
    if (left > right) {
        return -1;
    }

    const mid = Math.floor((right - left + 1) / 2) + left;

    if (nums[mid + 1] !== undefined && nums[mid] > nums[mid + 1]) {
        return mid;
    }

    const leftIndex = getIndex(nums, left, mid - 1);

    if (leftIndex !== -1) {
        return leftIndex;
    }

    const rightIndex = getIndex(nums, mid + 1, right);

    if (rightIndex !== -1) {
        return rightIndex;
    }

    return -1;
}

console.log(search([4,5,6,7,8,9,1,2,3]));