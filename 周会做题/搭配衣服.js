/**
 * 《衣服搭配》
 * 小明是个卖衣服的老板，他有一堆上衣和一堆裤子要售卖，上衣裤子尺码均是以身高作为尺码（160,165,175。。），
 * 现在他想把同尺码的上衣和裤子搭配成一套来售卖，请帮他从衣服堆中全部找出成套的衣服吧
 *
 * eg1
 * input: [175, 160, 165], [155, 180, 175]
 * output: [175]
 *
 * eg2
 * input: [175, 160, 165, 160], [155, 160, 180]
 * output: [160]
 *
 * eg3
 * input: [175, 160, 165, 160], [170, 160, 160, 165]
 * output: [160, 160, 165]
 *
 * eg4
 * input: [4, 9, 7], [9, 4, 9, 8, 4]
 * output: [4, 9]
 */

function solution(arr1, arr2) {
  const result = [];
  for(let i = 0; i < arr1.length; i ++) {
    for(let j = 0; j < arr2.length; j ++) {
      if(arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        arr2.splice(j, 1);
        break;
      }
    }
  }
  return result;
}
/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */

function solution1(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  const result = [];
  
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      i ++;
    } else if(arr1[i] > arr2[j]) {
      j ++;
    } else {
      result.push()
    }
  }

  return result;
}

/**
 * 时间复杂度：O(3n)
 * 空间复杂度：O(1)
 */

console.log(solution([175, 160, 165, 160], [170, 160, 160, 165]));
console.log(solution([4, 9, 7], [9, 4, 9, 8, 4]));
console.log(solution([175, 160, 165, 160], [155, 160, 180]));
