function maximumProduct(nums) {
  // 迭代找出 最小的两个 和最大的三个
  let min1 = Number.MAX_SAFE_INTEGER,
    min2 = Number.MAX_SAFE_INTEGER,
    max1 = Number.MIN_SAFE_INTEGER,
    max2 = Number.MIN_SAFE_INTEGER,
    max3 = Number.MIN_SAFE_INTEGER;

  for (let num of nums) {
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }

    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }
  }

  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
}
