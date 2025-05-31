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