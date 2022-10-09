function sortedSquares(nums) {
  // nums = nums.map((num) => num * num);
  // return nums.sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 1;
  let currentIndex = j;
  const result = [];

  while(i <= j) {
    const temp1 = nums[i] * nums[i];
    const temp2 = nums[j] * nums[j];

    if (temp1 > temp2) {
      result[currentIndex] = temp1;
      i ++;
    } else {
      result[currentIndex] = temp2;
      j --;
    }
    currentIndex --;
  }

  return result;
}

console.log(sortedSquares([-4,-1,0,3,10]));