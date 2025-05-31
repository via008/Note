/*
 * 在某段时间内只执行最后一次函数调用（事件触发停止一段时间后执行）
 * 场景：搜索输入框
*/

function debounce(fn, wait, options = {}) {
    let timer = null;
    let result = null;
    const { immediate = false, trailing = true } = options;

    function debounced(...args) {
        const context = this;

        if (timer) {
            clearTimeout(timer);
        }

        // 立即执行一次
        if (immediate && !timer) {
            result = fn.apply(context, args);
            timer = setTimeout(() => {
                timer = null;
            }, wait);
        } else {
            timer = setTimeout(() => {
                timer = null;

                // 尾调用
                if (trailing) {
                    result = fn.apply(context, args);
                }
            }, wait);
        }

        return result;
    }

    debounced.cancel = function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    return debounced;
}