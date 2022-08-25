/**
 * 《不重复的最长字符串》
 * 给一个字符串，从这个字符串中找到一个最长的不包含重复字符的子字符串，返回这个子字符串的长度
 *
 * eg1
 * input: 'abacd'
 * output: 4 // 最长的字符串为 'bacd'
 *
 * eg2
 * input: 'aaba'
 * output: 2 // 最长的字符串为 'ab' 或 'ba'
 *
 * eg3
 * input: 'abbcdb'
 * output: 3 // 最长的字符串为 'bcd' 或 'cdb'
 */
// 穷举法
 function solution(str) {
  // write code here
  const result = [];
  for(let i = 0; i < str.length; i ++) {
    result[i] = str[i];
    for(let j = i + 1; j < str.length; j ++) {
      if (result[i].indexOf(str[j]) === -1) {
        result[i] = result[i] + str[j];
      } else {
        break;
      }
    }
  }
  result.sort((a, b) => b.length - a.length);

  return result[0].length;
}

console.log(solution('abacd'));
console.log(solution('aaba'));
console.log(solution('abbcdb'));