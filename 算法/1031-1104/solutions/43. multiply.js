/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  let decade = '', result = '';
  for(let i = num2.length - 1; i >= 0; i --) {
    let carry = 0, add = [];
    for(let j = num1.length - 1; j >= 0; j --) {
      const temp = num1[j] * num2[i] + carry;
      carry = Math.floor(temp / 10);
      add.push(temp % 10);
    }

    const tempAdd = add.reverse().join('') + decade;
    console.log('=====result', result)
    console.log('=====tempAdd', tempAdd)

    let car = 0, arr = [], m = result.length - 1, n = tempAdd.length - 1;
    while(m >= 0 || n >= 0) {
      if (m < 0) {
        arr.push(tempAdd[n]);
        n --;
      }
      if (n < 0) {
        arr.push(result[m]);
        m --;
      }
      const temp = (result[m] - '0') + (tempAdd[n] - '0') + car;

      car = Math.floor(temp / 10);
      arr.push(temp % 10);
      m --;
      n --;
    }
    result = arr.reverse().join('');
    decade += '0';
  }

  return result;
};

console.log(multiply('123', '456'));