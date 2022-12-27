/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let i = 0, j = height.length - 1;
  while (i < j) {
    const minHeight = height[i] > height[j] ? height[j] : height[i];
    const area = (j - i) * minHeight;
    max = Math.max(max, area);

    if (height[i] > height[j]) {
      j --;
    } else {
      i ++;
    }
  }
  return max;
};
