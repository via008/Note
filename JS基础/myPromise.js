/**
 * Promise 静态方法
 * - all 返回所有被兑现的值，任何一个被拒绝则被拒绝
 * - allSettled 返回所有已敲定的值
 * - any 返回第一个兑现的值，如果都拒绝，返回包含拒绝原因的数组
 * - race 返回第一个敲定的值
 * - reject 返回一个已拒绝的 Promise
 * - resolve 以给定值解决一个 Promise
 * - try 接受一个任意类型的回调函数，并将其结果封装成一个 Promise
 * - withResolver 返回一个对象，包含一个新的 Promise 对象和两个函数，用于解决或者拒绝他
 */

class MyPromise {
    constructor(executor) {
        this.value = '';
        this.state = 'pending';
        this.callbackList = [];

        const resolve = (val) => {
            if (this.state === 'pending') {
                queueMicrotask(() => {
                    this.state = 'fulfilled';
                    this.value = val;
                    this.callbackList.forEach((cb) => cb.onFulfilled(val));
                })
            }
        }

        const reject = (err) => {
            if (this.state === 'pengding') {
                queueMicrotask(() => {
                    this.state = 'rejected';
                    this.value = err;
                    this.callbackList.forEach((cb) => cb.onRejected(err));
                })
            }
        }

        try {
            // 立即执行 executor
            executor(resolve, reject);
        } catch(err) {
            reject(err);
        }
        
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
        onRejected = typeof onRejected === 'function' ? onRejected : (reason) => { throw reason };

        return new MyPromise((resolve, reject) => {
            const handle = (fn) => {
                try {
                    const result = fn(this.value);
                    resolve(result);
                } catch(err) {
                    reject(err);
                }
            }

            if (this.state === 'fulfilled') {
                queueMicrotask(() => {
                    handle(onFulfilled);
                })
            } else if (this.state === 'rejected') {
                queueMicrotask(() => {
                    handle(onRejected);
                })
            } else {
                this.callbackList.push({
                    onFulfilled: () => {
                        handle(onFulfilled);
                    },
                    onRejected: () => {
                        handle(onRejected);
                    }
                })
            }
        })
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(value) {
        return new MyPromise((resolve) => resolve(value));
    }

    static reject(reason) {
        return new MyPromise((_, reject) => reject(reason));
    }
}