/**
 * 《衣服搭配2》
 * 小花是个卖衣服的老板，他有一堆上衣和一堆裤子和一堆T-恤要售卖，上衣裤子T-恤尺码均是以身高作为尺码（160,165,175的），
 * 现在他想把同尺码的上衣、裤子、T-恤搭配成一套来售卖，请帮他从衣服堆中全部找出成套的衣服吧
 *
 * eg1
 * input: [175, 160, 165, 160], [170, 160, 160, 165], [160, 190, 160]
 * output: [160, 160]
 *
 * eg2
 * input: [4,9,7], [9,4,9,8,4]，[3,4]
 * output: [4]
 */
// 暴力三循环
function solution(a, b, c) {
  const result = [];
  for(let i = 0; i < a.length; i ++) {
    for(let j = 0; j < b.length; j ++) {
      for(let k = 0; k < c.length; k ++) {
        if(a[i] === b[j] && b[j] === c[k]) {
          result.push(a[i]);
          b.splice(j, 1);
          c.splice(k, 1);
        }
      }
    }
  }
  return result;
}

// 两两找
function findTwo(arr1, arr2) {
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
      result.push(arr1[i]);
      i ++;
      j ++;
    }
  }

  return result;
}

function solution(a, b, c) {
  const arr = [a, b, c];

  return arr.reduce((pre, cur) => findTwo(pre, cur));
}

// 三指针
function solution(a, b, c) {
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  c.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let k = 0;
  const result = [];
  
  while(i < a.length && j < b.length && k < c.length) {
    if(a[i] === b[j] && b[j] === c[k]) {
      result.push(a[i]);
      i ++;
      j ++;
      k ++;
    } else {
      const min = Math.min(a[i], b[j], c[k]);
      if(min === a[i]) i ++;
      if(min === b[j]) j ++;
      if(min === c[k]) k ++;
    }
  }

  return result;
}

console.log(solution([175, 160, 165, 160], [170, 160, 160, 165], [160, 190, 160]));