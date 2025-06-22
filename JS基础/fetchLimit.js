function fetchLimit(urls, num) {
    return new Promise((resolve, reject) => {
        const result = Array.from({ length: urls.length });
        let completed = 0;
        let current = 0; // 当前执行的索引

        const startNext = () => {
            if (completed === urls.length) {
                resolve(result);
                return;
            }

            if (current < urls.length) {
                const index = current ++;
                urls[index]()
                    .then((res) => {
                        result[index] = res;
                    })
                    .catch((err) => {
                        result[index] = err;
                    })
                    .finally(() => {
                        completed ++;
                        startNext();
                    })
            }
        }

        for(let i = 0; i < Max.min(urls.length, num); i ++) {
            startNext();
        }
    })
}