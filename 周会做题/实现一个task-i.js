/**
 * 完成 Task 类实现如下功能
 * 其中 next 表示执行下一个方法
 * 一秒后打印 1,再过三秒后打印 2
 */
 class Task {
  constructor() {
    this.queue = [];
    this.running = false;
  }
  add(fn, context, ...args) {
    this.queue.push(fn.bind(context, ...args));
    console.log('====currentFun', this.queue)
    return this;
  }
  stop() {
    this.running = false;
  }
  run() {
    // this.running = true;
    // if(this.running) {
      const currentFun = this.queue.shift();
      if (currentFun) {
        new Promise((resolve, reject) => {
          currentFun(resolve);
        }).then(() => {
          this.run();
        });
      }
    // }
  }
}

let task1 = function (next) {
  setTimeout(() => {
    console.log(1);
    next();
  }, 1000);
};

let tast2 = function (next, num) {
  setTimeout(() => {
    console.log(3);
    nexta();
  }, 3000);
};

let task = new Task();
task.add(task1).add(tast2, null, 2);
task.run();