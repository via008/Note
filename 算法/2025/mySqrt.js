/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }

    let left = 1,
        right = x - 1;
    
    while(left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        const val = mid * mid;

        if (val > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return right;
};

console.log(mySqrt(9))