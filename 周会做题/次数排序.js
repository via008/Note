/**
 * 《次数排序》
 * 根据数组中数字重复出现的次数从小到大排序
 *
 * eg1
 * input: [1,3,4,4,1,1]
 * output: [3,4,4,1,1,1]
 *
 * eg2
 * input: [4, 4, 1, 1, 3, 1, 5, 5, 5, 2, 2, 5, 2, 2]
 * output: [3, 4, 4, 1, 1, 1, 2, 2, 2, 2, 5, 5, 5, 5]
 */


function solution(arr) {
  const map = {};
  arr.forEach((item) => map[item] ? map[item] ++ : map[item] = 1)

  const tempArr = Object.entries(map).sort((a, b) => a[1] - b[1]);

  let result = [];
  for(let j = 0; j < tempArr.length; j ++) {
    result = [...result, ...Array(tempArr[j][1]).fill(tempArr[j][0])];
  }

  return result;
}

console.log(solution([1,3,4,4,1,1]));
console.log(solution([4, 4, 1, 1, 3, 1, 5, 5, 5, 2, 2, 5, 2, 2]));