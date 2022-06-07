/**
 * 《交错合并》
 * 有两个字符串，word1， word2。现在从 word1 开始，通过交替添加字母来合并字符串，
 * 如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后的字符串。
 *
 * eg1
 * input: 'abc', 'def'
 * output: 'adbecf'
 *
 * eg2
 * input: 'https', 'css'
 * output: 'hctstsps'
 *
 * eg3
 * input: '13' , '246'
 * output: '12346'
 */
 function solution(word1, word2) {
   let result = '';
   let i = 0;
   let j = 0;
  while(i < word1.length || j < word2.length) {
    if (i < word1.length) {
      result += word1[i];
      i ++;
    }
    if (j < word2.length) {
      result += word2[j];
      j ++;
    }
  }
  return result;
}

console.log(solution('abc', 'def'));
console.log(solution('https', 'css'));
console.log(solution('13' , '246'));