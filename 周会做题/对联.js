/**
 * 《对联》
 * 给两个字符串 str1, str2，判断他们能否成为一个对联
 * 对联讲究一一对应关系，两句话都有相同的格式(str1 中的字符可以按某种映射关系替换得到 str2 )，比如 AABC 对 DDFE
 *
 * eg1
 * input：str1 = '举头望明月',str2 = '低头思故乡'
 * output: true
 *
 * eg2
 * input: str1 = '山外有山'，str2 = '人外有人'
 * output: true
 *
 * eg3
 * input: str1 = 'paper', str2 = 'title'
 * output: true
 *
 * eg4
 * input: str1 = 'dad', str2 = 'sad' eye
 * output: false
 *
 * eg5
 * input: str1 = 'run', str2 = 'son'
 * output: true
 *
 * eg6
 * input: str1 = 'off', str2 = 'age' add
 * output: false
 */

function solution(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map1 = {};
  const map2 = {};
  let i = 0;
  // let j = 0;

  while(i < str1.length) {
    if (map1[str1[i]] && map1[str1[i]] !== str2[i]) {
      return false;
    }
    if (map2[str2[i]] && map2[str2[i]] !== str1[i]) {
      return false;
    }

    map1[str1[i]] = str2[i];
    map2[str2[i]] = str1[i];
    i ++;
  }

  return true;
}

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

console.log(solution('举头望明月', '低头思故乡'));
console.log(solution('山外有山', '人外有人'));
console.log(solution('paper', 'title'));
console.log(solution('title', 'paper'));
console.log(solution('dad', 'sad'));
console.log(solution('run', 'son'));
console.log(solution('off', 'age'));
console.log(solution('oftf', 'aggg'));
