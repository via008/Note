Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject('参数必须是数组');
        }

        const len = promises.length;
        const results = Array.from({ length: len });
        let count = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((res) => {
                    results[index] = res;
                    count ++;

                    if (count === len) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    reject(err);
                })
        })
    })
}