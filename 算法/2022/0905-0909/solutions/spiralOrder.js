var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }

  // let top = 0,
  //     right = matrix[0].length - 1,
  //     bottom = matrix.length - 1,
  //     left = 0;
  // const result = [];

  // while(true) {
  //   // 从左到右
  //   for(let i = left; i <= right; i ++) {
  //     result.push(matrix[top][i]);
  //   }
  //   if (++top > bottom) {
  //     break;
  //   }

  //   // 从上到下
  //   for(let i = top; i <= bottom; i ++) {
  //     result.push(matrix[i][right]);
  //   }
  //   if (left > --right) {
  //     break;
  //   }

  //   // 从右到左
  //   for(let i = right; i >= left; i --) {
  //     result.push(matrix[bottom][i]);
  //   }
  //   if (top > --bottom) {
  //     break;
  //   }

  //   // 从下到上
  //   for(let i = bottom; i >= top; i --) {
  //     result.push(matrix[i][left]);
  //   }
  //   if (++left > right) {
  //     break;
  //   }
  // }

  // return result;

  let top = 0,
      right = matrix[0].length - 1,
      bottom = matrix.length - 1,
      left = 0;
  const result = [];

  while(top <= bottom && left <= right) {
    for (let i = left; i <= right ; i ++) {
      result.push(matrix[top][i]);
    }
    for(let i = top + 1; i <= bottom; i ++) {
      result.push(matrix[i][right]);
    }

    if (top < bottom && left < right) {
      for(let i = right - 1; i > left; i --) {
        result.push(matrix[bottom][i]);
      }
      for(let i = bottom; i > top; i --) {
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

// const r = [​[1,2,3],​[4,5,6],​[7,8,9]]
const r = [[1,2,3],[4,5,6],[7,8,9]]

console.log(spiralOrder(r))

