function arrange(text) {
    const initText = text;
    const tasks = [];
    let isWaitFirst = false;

    return {
        wait(seconds) {
            tasks.push({ type: 'wait', seconds });
            return this;
        },

        waitFirst(seconds) {
            isWaitFirst = true;
            tasks.push({ type: 'firstWait', seconds });
            return this;
        },

        do(action) {
            const getTotalTime = (type) => {
                let totalTime = 0;
                tasks.forEach((task) => {
                    if (task.type === type) {
                        totalTime += task.seconds;
                    }
                })
                return totalTime;
            }

            const execute = () => {
                if (isWaitFirst) {
                    const totalTime = getTotalTime('firstWait');
                    setTimeout(() => {
                        console.log(initText);
                        console.log(action);
                    }, totalTime * 1000);
                } else {
                    console.log(initText);

                    const totalTime = getTotalTime('wait');
                    setTimeout(() => {
                        console.log(action);
                    }, totalTime * 1000);
                }
            }

            execute();

            return this;
        }
    }
}

// arrange('test').wait(3).do('push');

arrange('test').waitFirst(2).do('push');

class Arrange {
    constructor(text) {
        this.initText = text;
        this.tasks = [];
        this.mode = '';
    }

    wait(seconds) {
        this.mode = 'wait';
        this.tasks.push({  })
    }
}