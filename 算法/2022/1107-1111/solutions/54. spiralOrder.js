/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }

  const result = [];
  let top = 0,
      right = matrix[0].length - 1,
      bottom = matrix.length - 1,
      left = 0;

  while(top <= bottom && left <= right) {
    for (let i = left; i <= right; i ++) {
      result.push(matrix[top][i]);
    }
    for (let i = top + 1; i <= bottom; i ++) {
      result.push(matrix[i][right]);
    }
    if (top < bottom && left < right) {
      for(let i = right - 1; i >= left; i --) {
        result.push(matrix[bottom][i]);
      }
      for (let i = bottom - 1; i > top; i --) {
        result.push(matrix[i][left]);
      }
    }
    top = top + 1;
    right = right - 1;
    bottom = bottom - 1;
    left = left + 1;
  }

  return result;
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));