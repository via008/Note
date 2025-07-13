function bigNumberAdd(str1, str2) {
    const [int1, dec1 = ''] = str1.split('.');
    const [int2, dec2 = ''] = str2.split('.');

    // 补齐小数部分
    const maxLen = Math.max(dec1.length, dec2.length);
    const dec1Full = dec1.padEnd(maxLen, '0');
    const dec2Full = dec2.padEnd(maxLen, '0');

    // 计算小数部分
    let decResult = bigIntAdd(dec1Full, dec2Full);
    let decCarry = 0;
    if (decResult.length > maxLen) {
        decCarry = 1;
        decResult = decResult.slice(1);
    }

    // 计算整数部分
    let intResult = bigIntAdd(int1, int2);
    if (decCarry > 0) {
        intResult = bigIntAdd(intResult, '1');
    }

    if (decResult) {
        return `${intResult}.${decResult}`;
    }
    return intResult;
}

function bigIntAdd(str1, str2) {
    const index1 = str1.length - 1;
    const index2 = str2.length - 1;

    let carry = 0;
    let result = '';

    while(index1 >= 0 || index2 >= 0) {
        const num1 = index1 >= 0 ? Number(str1[index1 --]) : 0;
        const num2 = index2 >= 0 ? Number(str2[index2 --]) : 0;

        const sum = num1 + num2 + carry;

        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }

    if (carry !== 0) {
        result = carry + result;
    }

    return result;
}