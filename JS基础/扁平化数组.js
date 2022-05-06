/**
 * 初级：扁平化一个 n 维数组
 * input: [1, 2, [3, 4], [9, [2, 3]]]
 * output: [1, 2, 3, 4, 9, 2, 3]
 */
// 1. 递归1
function flatArr(arr) {
  const result = [];
  function flatItem(array) {
    array.forEach(item => {
      if(Array.isArray(item)) {
        flatItem(item);
      } else {
        result.push(item);
      }
    })
  }
  flatItem(arr);
  return result;
}
console.log(flatArr([1, 2, [3, 4], [9, [2, 3]]]));

// 2. 递归2
function flatArr(arr) {
  let result = [];
  arr.forEach(item => {
    if(Array.isArray(item)) {
      // result.push(...flatArr(item));
      result = result.concat(flatArr(item));
    } else {
      result.push(item);
    }
  })
  return result;
}
console.log(flatArr([1, 2, [3, 4], [9, [2, 3]]]));

// 3. reduce
function flatArr(arr) {
  return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatArr(cur) : cur), [])
}
console.log(flatArr([1, 2, [3, 4], [9, [2, 3]]]));

// 4. while
function flatArr(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(flatArr([1, 2, [3, 4], [9, [2, 3]]]));

// 5. 利用数组的 join，split
function flatArr(arr) {
  return arr.join().split(',');
}
console.log(flatArr([1, 2, [3, 4], [9, [2, 3]]]));

// 6. 利用数组的 toString，split
function flatArr(arr) {
  return arr.toString().split(',');
}
console.log(flatArr([1, 2, [3, 4], [9, [2, 3]]]));

// 7. 使用堆栈
function flatArr(arr) {
  const stack = [...arr];
  const result = [];
  while(stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  return result.reverse();
}
console.log(flatArr([1, 2, [3, 4], [9, [2, 3]]]));

/**
 * 中级：扁平化一个 n 维数组，并且可以输入一个参数确定扁平化的级数
 * input: [1, 2, [3, 4, [5]], [9, [2, 3]]], 1
 * output: [1, 2, 3, 4, [5], 9, [2, 3]]
 */
// 递归
function flatArr(arr, n) {
  const result = [];
  arr.forEach(item => {
    if(Array.isArray(item) && n > 0) {
      result.push(...flatArr(item, n - 1));
    } else {
      result.push(item);
    }
  })
  return result;
}
console.log(flatArr([1, 2, [3, 4, [5, [0]]], [9, [2, 3, [0, 1, 2]]]], 1));

// reduce 递归
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]], [1, [2]]];
function flatDeep(arr, d = 1) {
  return d > 0 
    ? arr.reduce((acc, val) => acc.concat(
      Array.isArray(val)
        ? flatDeep(val, d - 1) 
        : val), []
    )
    : arr.slice();
};
console.log(flatDeep(arr1, 1));
