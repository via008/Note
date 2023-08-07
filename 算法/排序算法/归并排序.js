// 合并两个有序数组
function mergeTwoSortNums(nums, start, mid, end) {
    const temp = nums.slice(start, end + 1);
    // 左子数组的起点和终点
    let i = 0,
        j = mid - start;
    // 右子数组的起点和终点
    let m = mid - start + 1,
        n = end - start;
    // 记录 nums 中的位置
    let k = start;
    while(i <= j || m <= n) {
        if (i > j) {
            nums[k ++] = temp[m ++];
        } else if (m > n) {
            nums[k ++] = temp[i ++];
        } else if (temp[i] <= temp[m]) {
            nums[k ++] = temp[i ++];
        } else {
            nums[k ++] = temp[m ++];
        }
    }
}
// 归并排序
function mergeSort(nums, start, end) {
    if (start >= end) {
        return;
    }
    const mid = Math.floor((start + end) / 2);
    mergeSort(nums, start, mid);
    mergeSort(nums, mid + 1, end);
    mergeTwoSortNums(nums, start, mid, end);
}

const nums = [7, 3, 2, 6, 0, 1, 5, 4];
mergeSort(nums, 0, nums.length -1)
console.log(nums);

// 合并两个有序数组
function mergeTwoSortNums(nums1, nums2) {
    const num = [];
    let i = 0,
        j = 0;
    while(i < nums1.length || j < nums2.length) {
        if (i === nums1.length) {
            num.push(nums2[j ++]);
        } else if (j === nums2.length) {
            num.push(nums1[i ++]);
        } else if (nums1[i] <= nums2[j]) {
            num.push(nums1[i ++]);
        } else {
            num.push(nums2[j ++]);
        }
    }
    return num;
}
console.log(mergeTwoSortNums([0, 1, 4, 5, 9], [2, 3, 4, 6, 7]))
