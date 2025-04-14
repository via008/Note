/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }

    let max = 0;
    let left = 0,
        right = 0;
    const charMap = new Map();
    
    while(right < s.length) {
        const char = s[right];
        if (charMap.has(char) && charMap.get(char) >= left) {
            left = map[char] + 1;
        } else {
            max = Math.max(max, right - left + 1);
        }
        mapChar.set(char, right);
        right ++;
    }

    return max;
};