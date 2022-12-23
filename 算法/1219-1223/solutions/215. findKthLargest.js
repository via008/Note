/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  if (k > nums.length) {
    return undefined;
  }

  const sortNums = quickSort(nums);
  return sortNums[sortNums.length - k];
};

// const quickSort = (array) => {
//   const sort = (arr, left = 0, right = arr.length - 1) => {
//     //如果左边的索引大于等于右边的索引说明整理完毕
//     if (left >= right) {
//       return;
//     }
//     let i = left;
//     let j = right;
//     // 取无序数组最后一个数为基准值
//     const baseVal = arr[j];
//     // 把所有比基准值小的数放在左边，大的数放在右边
//     while (i < j) {
//       // 找到一个比基准值大的数交换
//       while (i < j && arr[i] <= baseVal) {
//         i ++;
//       }
//       // 将较大的值放在右边，如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
//       arr[j] = arr[i];
//       // 找到一个比基准值小的数交换
//       while (i < j && arr[j] >= baseVal) {
//         j --;
//       }
//       // 将较小的值放在左边，如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
//       arr[i] = arr[j];
//     }
//     // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
//     arr[j] = baseVal;
//     // 将左边的无序数组重复上面的操作
//     sort(arr, left, j - 1);
//     // 将右边的无序数组重复上面的操作
//     sort(arr, j + 1, right);
//   }

//   // 为了保证这个函数是纯函数拷贝一次数组
//   const newArr = array.concat();
//   sort(newArr);
//   return newArr;
// }

console.log(findKthLargest([3,2,1,5,6,4], 2))

const _quickSort = (left, right, nums) => {
  const swap = (left, right, nums) => {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  }
  if (left <= right) {
    const val = nums[left];
    let [i, j] = [left, right];
 
    while (i < j) {
      while (i < j && nums[j] > val) {
        j--;
      }
      while (i < j && nums[i] < val) {
        i++;
      }
      if (i < j) {
        swap(i, j, nums);
      }
    }
    nums[i] = val;
    _quickSort(left, i - 1, nums);
    _quickSort(i + 1, right, nums);
  }
}
 
const quickSort = (...numbers) => {
  _quickSort(0, numbers.length - 1, numbers)
  return numbers
}