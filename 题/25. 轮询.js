/**
 * 轮询
 * 实现一个方法，可以进行短轮询，支持定义轮询间隔
 */

function polling(getProgress, time) {
  // write code here...
  return new Promise((resolve, reject) => {
    const fun = async () => {
      const result = await getProgress();
      console.log(result);
      if (result) {
        resolve(result);
      } else {
        setTimeout(() => { fun() }, time);
      }
    }
    fun();
  })
}
// 辅助方法，参考
const getProgress = async () => {
   const isComplete  = await fetch('http://mock.xiaojukeji.com/mock/2113/api/getProgress').then(res => res.json()); // true 轮询可以结束， false 轮询不能结束
   return isComplete;
}
// 调用方式 如
// doSomething...
(async () => {
  console.log('loading start');
  await polling(getProgress, 1000);
  console.log('loading end');
})();
