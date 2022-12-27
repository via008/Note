/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);

  // 转成字符串法
  // const reverseNumAbs = Number(Math.abs(x).toString().split('').reverse().join(''));
  // const result = x > 0 ? reverseNumAbs : -reverseNumAbs;
  // if (result > max || result < min) {
  //   return 0;
  // }
  // return result;

  // 不转成字符串
  // let result = 0;
  // while(x !== 0) {
  //   result = result * 10 + x % 10;
  //   x = Math.trunc(x / 10);
  // }
  // if (result > max || result < min) {
  //   return 0;
  // }
  // return result;

  // 不转成字符串且不能存储32位整数的数
  let result = 0;
  while(x !== 0) {
    if (result > Math.trunc(max / 10) || result < Math.trunc(min / 10)) {
      return 0;
    }

    result = result * 10 + x % 10;
    x = Math.trunc(x / 10);
  }

  return result;
};

console.log(reverse(-12));
