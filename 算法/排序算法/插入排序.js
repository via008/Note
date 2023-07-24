function insertionSort(nums) {
  for(let i = 1; i < nums.length; i ++) {
    const base = nums[i];
    let j = i - 1;
    while(j >= 0 && nums[j] > base) {
      nums[j + 1] = nums[j];
      j --;
    }
    nums[j + 1] = base;
  }
}

const nums = [1, 3, 1, 4, 2, 5]
insertionSort(nums);
console.log(nums)