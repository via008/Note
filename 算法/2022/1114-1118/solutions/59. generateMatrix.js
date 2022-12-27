/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  // 初始化 n x n 的数组
  const result = Array.from({length: n}).map(() => Array.from({length: n}).fill(0));
  let top = 0,
      right = n - 1,
      bottom = n - 1,
      left = 0;
  let value = 1;

  while(top <= bottom && left <= right) {
    for(let i = left; i <= right; i ++) {
      result[top][i] = value;
      value = value + 1;
    }
    for(let i = top + 1; i <= bottom; i ++) {
      result[i][right] = value;
      value = value + 1;
    }

    if (top < bottom && left < right) {
      for (let i = right - 1; i >= left; i --) {
        result[bottom][i] = value;
        value = value + 1;
      }
      for (let i = bottom - 1; i > top; i --) {
        result[i][left] = value;
        value = value + 1;
      }
    }

    top = top + 1;
    right = right - 1;
    bottom = bottom - 1;
    left = left + 1;
  }
  return result;
};

console.log(generateMatrix(1))