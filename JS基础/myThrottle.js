// 事件触发一段时间后，再实际触发
function throttle(fn, interval) {
    const lastTime = 0;
    return (...args) => {
        const now = Date.now();

        if (now - lastTime >= interval) {
            fn.apply(this, ...args);
            lastTime = now;
        }
    }
}