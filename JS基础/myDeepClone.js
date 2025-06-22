/**
 * 思路：
 * 1. 基本类型直接返回
 * 2. 对象或者数组，继续递归处理
 * 3. 使用 Map 缓存已经访问过的对象，解决循环引用
 * 4. 针对数组和对象创建新实例
 */
function deepClone(value, cache = new WeakMap()) {
    if (value === null || typeof value !== 'object') {
        return value;
    }

    if (cache.has(value)) {
        return cache.get(value);
    }

    const result = Array.isArray(value) ? [] : {};

    cache.set(value, result);

    for(let key in value) {
        if (value.hasOwnProperty(key)) {
            result[key] = deepClone(value[key], cache);
        } 
    }

    return result;
}