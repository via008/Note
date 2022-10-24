/**
 * @param {string} s
 * @return {string}
 */
const reverseWord = (word) => {
  const arr = word.split('');
  let i = 0, j = arr.length - 1;
  while(i < j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i ++;
    j --;
  }
  return arr.join('');
}

var reverseWords = function(s) {
  // 一个一个反转字符串之后拼接
  // return s.split(' ').map((word) => reverseWord(word)).join(' ');

  // 整体反转
  return reverseWord(s.split(' ').reverse().join(' '));
};

console.log(reverseWords("Let's take LeetCode contest"))