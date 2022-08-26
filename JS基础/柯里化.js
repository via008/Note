/**
 * 比较多次接收的参数总数与函数定义时的入参数量，
 * 当接收的参数大于或等于被 currying 函数的传入参数数量时，返回计算结果
 * 否则返回一个函数继续接收参数的函数
 * 
 * 要点：
 * 1. 只传递给函数的一部分参数来调用它，让它返回一个函数去处理剩下的参数
 * 2. 使用场景：参数复用、延迟执行（同样的还有bind和箭头函数）
 * 
 * @param {Function} fn 需要 currying 的函数
 * @param  {...any} args 接受的参数
 * @returns
 */
function trueCurrying(fn, ...args) {
  // fn.length 指明函数的参数
  if (args.length >= fn.length) {
    return fn(...args)
  }

  return function (...args2) {
    return trueCurrying(fn, ...args, ...args2)
  }
}

let abc = function(a, b, c) {
  return [a, b, c];
};
 
let curried = trueCurrying(abc);

console.log(curried(1)(2, 3, 5));
