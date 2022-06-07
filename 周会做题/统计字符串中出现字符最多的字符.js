/**
 * 统计一个字符串中出现次数最多的字符，并且统计出现的次数
 * input: 'abbbccbcccda'
 * output: ['c', 5]
 *
 * input: 'aabbc'
 * output: ['a', '2]
 */

function solution(str) {
  const map = {};
  let max = 0;
  let maxStr = '';

  for(let i = 0; i < str.length; i ++) {
    const s = str[i];
    if (!map[s]) {
      map[s] = 1;
    } else {
      map[s] ++;
    }
    if (map[s] > max) {
      max = map[s];
      maxStr = s;
    }
  }

  return [maxStr, max];
}

console.log(solution('abbbccbcccda'))
console.log(solution('aabbc'))
