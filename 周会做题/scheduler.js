/**
 * 完成 Scheduler 类，满足下面要求
 * 并行完成,同时并行的任务不能超过两个
 *
 * output: 2 3 1 4
 * 解释
 * 一开始，1、2 两个任务进入队列
 * 500ms 时，2 完成，输出 2，任务 3 进队
 * 800ms 时，3 完成，输出 3，任务 4 进队
 * 1000ms 时，1 完成，输出 1
 * 1200ms 时，4 完成，输出 4
 */
 class Scheduler {
    constructor() {
      this.list = [];
      this.temp = [];
    }

    add(fun) {
      this.list.push(fun);

      if(this.list.length > 2) {
        this.temp.push(this.list.shift(), this.list.shift());
        this.temp.map((f) => {
          f().then(() => {
            this.temp.push(this.list.shift());
          })
        })
      }
    }

    
 }
 
 const timeout = (time) =>
   new Promise((resolve) => {
     setTimeout(resolve, time);
   });
 const scheduler = new Scheduler();
 
 const addTask = (time, order) => {
   scheduler.add(() => timeout(time)).then(() => console.log(order));
 };

 addTask(1000, '1');
 addTask(500, '2');
 addTask(300, '3');
 addTask(400, '4');
 