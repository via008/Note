// 将字符串 aaaaabbbbbbcccc 转换为 abc
function replaceStr(originalStr) {
    return originalStr.replace(/(.)\1*/, '$1');
}