// 并发任务
// 递归的实现方式
function concurrentRequest(tasks, concurrency, callback) {
    const len = tasks.length;
    const result = Array.from({ length: len });
    // 当前要执行的索引
    let index = 0;
    // 当前正在运行的任务数
    let activeCount = 0;

    function runNext() {
        if (index >= len && activeCount === 0) {
            callback(result);
            return;
        }

        while(activeCount < concurrency && index < len) {
            const curIndex = index ++;
            const task = tasks[curIndex];

            activeCount ++;

            task()
                .then((res) => {
                    result[curIndex] = res;
                })
                .catch((err) => {
                    result[curIndex] = err;
                })
                .finally(() => {
                    activeCount --;
                    runNext();
                })
        }
    }

    runNext();
}

// for...of + await 的方式
// 结合 Promise.all() 和一个任务池的思路
function withStatus(promise) {
    promise.status = 'pending';
    promise.then(
        () => promise.status = 'fulfilled',
        () => promise.status = 'rejected'
    );
    return promise;
}
async function concurrentRequest1(tasks, concurrency, callback) {
    const result = [];
    const executing = [];

    for(let [index, task] of tasks.entries()) {
        const p = withStatus(
            task().then((res) => {
                result[index] = res;
            }).catch((err) => {
                result[index] = err;
            })
        );

        executing.push(p);

        if (executing.length >= concurrency) {
            await Promise.race(executing);
            // 移除已经完成的 Promise
            for(let i = executing.length - 1; i >= 0; i --) {
                if (executing[i].status !== 'pending') {
                    executing.splice(i, 1);
                }
            }
        }
    }

    await Promise.allSettled(executing);
    callback(result);
}




// 测试case
function asyncTask(id, delay) {
    return () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Task ${id} completed`);
          resolve(id);
        }, delay);
      });
    };
  }
  
  const tasks = [
    asyncTask(1, 1000),
    asyncTask(2, 2000),
    asyncTask(3, 1500),
    asyncTask(4, 500),
    asyncTask(5, 2500)
  ];
  
  const concurrency = 2;
  
  function callback(results) {
    console.log('All tasks completed:', results);
  }
  
  concurrentRequest1(tasks, concurrency, callback);
