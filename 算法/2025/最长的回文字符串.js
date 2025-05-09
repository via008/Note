function getMaxLen(str, m, n) {
    while(m >= 0 && n < str.length) {
        if (str[m] === str[n]) {
            m --;
            n ++;
        } else {
            break;
        }
    }

    return n - m - 1;
}

function getStr(str) {
    let maxLen = 0;

    for(let i = 0; i < str.length; i ++) {
        // 奇数长度
        maxLen = Math.max(maxLen, getMaxLen(str, i - 1, i + 1));
        // 偶数长度
        maxLen = Math.max(maxLen, getMaxLen(str, i, i + 1));
    }

    return maxLen;
}
