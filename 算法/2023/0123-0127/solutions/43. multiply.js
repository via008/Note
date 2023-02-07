/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// TODO:不能直接转为数字的相乘，会有溢出的情况
function multiply(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  // 保存当前位（个位 1，十位 10，百位 100...）
  let curCarry = 1;
  let result = 0;
  // 遍历 num2 的每一位与 num1 相乘
  for(let i = num2.length - 1; i >= 0; i--) {
    // 保存相乘的结果
    let temp = 0;
    // 当前位（个位 1，十位 10，百位 100...）
    let curCarryTemp = 1;
    // 保存相乘的进位
    let carryTemp = 0;
    for(let j = num1.length - 1; j >= 0; j --) {
      let innerMul = num1[j] * num2[i] + carryTemp;
      carryTemp = Math.floor(innerMul / 10);
      temp += (innerMul % 10) * curCarryTemp;
      curCarryTemp *= 10;
    }

    // 结束之后如果还有进位，则加上
    if (carryTemp !== 0) {
      temp += carryTemp * curCarryTemp;
    }

    result += temp * curCarry;
    curCarry *= 10;
  }

  return result.toString();
}

console.log(123456789*987654321);
console.log(multiply('123456789', '987654321'));