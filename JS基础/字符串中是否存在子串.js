// 借助已有方法
// function subStrIndex(mainStr, subStr) {
//   const mLength = mainStr.length;
//   const sLength = subStr.length;
//   let i = 0;
//   while(i <= mLength - sLength) {
//     if (mainStr.substring(i, sLength + i) === subStr) {
//       return i;
//     }
//     i ++;
//   }
//   return -1;
// }

subStrIndex('qwer', 'we')

// 不借助字符串方法
function subStrIndex(mainStr, subStr) {
  const mLength = mainStr.length;
  const sLength = subStr.length;
  let i = 0, j = 0;
  while(i < mLength && j < sLength) {
    if (mainStr[i] === subStr[j]) {
      i ++;
      j ++;
    } else {
      i = i - j + 1;
      j = 0;
    }
  }
  if (j >= sLength) {
    return i - j;
  }
  return -1;
}