/**
 * 实现 createFlow 方法,需要按照 a, b, 延迟1 秒, c, 延迟1,秒, d, e, done, 的顺序打印
 */

 /**
 const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

 const subFlow = createFlow([() => delay(1000).then(() => console.log('c'))]);
 
 createFlow([
   () => console.log('a'),
   () => console.log('b'),
   subFlow,
   [() => delay(1000).then(() => console.log('d')), () => console.log('e')],
 ]).run(() => {
   console.log('done');
 });
 **/

 class Flow {
  constructor() {
    this.pendingQueue = [];
  }

  async _run() {
    for (let i = 0; i < this.pendingQueue.length; i++) {
      const fn = this.pendingQueue[i];
      await fn();
    }
    // 所有任务跑完之后清空队列
    this.pendingQueue = [];
  }

  createSubFlow(fns) {
    return fns;
  }

  createFlow(fns) {
    const flatFns = fns.flat();

    const curQueue = [];
    flatFns.forEach((fn) => {
      if (typeof fn === 'function') {
        curQueue.push(fn);
      } else if (fn instanceof Flow) {
        this.pendingQueue.forEach((item) => curQueue.push(item));
      }
    });
    this.pendingQueue = curQueue;

    return this;
  }

  run(fn) {
    this.pendingQueue.push(fn);
    this._run();
  }
}

const flow = new Flow();
const createFlow = flow.createFlow.bind(flow);
const createSubFlow = flow.createSubFlow.bind(flow);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const subFlow = createSubFlow([() => delay(1000).then(() => console.log('c'))]);
const subFlow1 = createSubFlow([() => delay(1000).then(() => console.log('6')), () => delay(1000).then(() => console.log('7'))]);

createFlow([
  () => console.log('a'),
  () => console.log('b'),
  subFlow,
  subFlow1,
  [() => delay(1000).then(() => console.log('d')), () => console.log('e')],
]).run(() => {
  console.log('done');
});

