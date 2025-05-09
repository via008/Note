/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 0) {
        return true;
    }

    let left = 1,
        right = num;

    while(i <= j) {
        const mid = Math.floor(left + (right - left) / 2);
        const val = mid * mid;

        if (val === num) {
            return true;
        }

        if(val > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};