/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const operator = ['+', '-'];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  let index = 0;
  // 判断前置空格是否结束
  let isNumberBedforeBlank = true;
  // 判断前置符号位
  let isNumberBedforeOperator = true;

  while (true) {
    const char = s.charAt(index);

    if (isNumberBedforeBlank && char === ' ') {
      index ++;
      continue;
    }
  
    if (isNumberBedforeOperator && operator.includes(char)) {
      isNumberBedforeBlank = false;
      result += char;
      index ++;
      continue;
    }

    if (nums.includes(char) && index < s.length) {
      isNumberBedforeBlank = false;
      isNumberBedforeOperator = false;
      result += char;
      index ++;
    } else {
      break;
    }
  }

  // 空字符串或者只有 + -
  if (!Number(result)) {
    return 0;
  }

  if (Number(result) > Math.pow(2, 31) - 1) {
    return  Math.pow(2, 31) - 1;
  }

  if (Number(result) < -Math.pow(2, 31)) {
    return  -Math.pow(2, 31);
  }

  return Number(result);
};

console.log(myAtoi("0  123"));