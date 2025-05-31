/* 
 * 控制某个函数在指定时间内只能执行一次（每隔一段时间就执行一次）
 * 场景：
 * 1. 浏览器窗口调整
 * 2. 页面滚动
 * 3. 鼠标移动
*/
function throttle(fn, interval, options = {}) {
    let lastCallTime = 0;
    let timer = null;
    const { leading = false, trailing = false } = options;

    function throttled (...args) {
        const now = Date.now();
        const context = this;

        // 第一次要执行
        if (leading && lastCallTime === 0) {
            fn.apply(context, args);
            lastCallTime = now;
            return;
        }

        const restTime = interval - (now - lastCallTime);
        if (restTime <= 0) {
            fn.apply(context, args);
            lastCallTime = now;
        } else {
            // 确保最后一次要执行
            clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                if (trailing) {
                    lastCallTime = Date.now();
                    fn.apply(context, args);
                }
            }, restTime);
        }
    }

    throttled.cancel = function () {
        lastCallTime = 0;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    return throttled;
}