/**
 * 《凑发票》
 * 有若干张发票 bills，每张发票金额不等，给一个金额 amount，
 * 计算可以凑成这个金额的最少发票数量，如果凑不成这个金额，返回 -1
 *
 * eg1
 * input: [1, 2, 5], 11
 * output: -1
 * f(n) = min(f(n - i) + 1)
 * 
 * eg2
 * input: [1, 2, 5], 7
 * output: 2
 *
 * eg3
 * input: [1,2,5], 5
 * output: 1
 *
 * eg4
 * input: [1, 1, 1, 3, 2, 4, 6], 11
 * output: 3
 *
 * eg5
 * input: [1, 1, 3, 2, 4, 6], 9
 * output: 2
 *
 * eg6
 * input: [1, 1, 3, 2, 4, 6], 8
 * output: 2
 * 
 * eg7
 * input: [1, 1, 1, 1, 11, 5, 5, 5], 15
 * output: 3
 */
function solution(bills, amount) {
  /**
   * 1. 状态转移方程：f(n) = min(f(n - bills[i]) + 1)（最优子结构）
   * 2. 备忘录存下已经计算过的子问题（重叠子问题）
   */
  const cache = [];

  function fun(m, start = 0) {
    if (cache[m]) {
      return cache[m];
    }

    if (m === 0) {
      return 0;
    }
    
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = start; i < bills.length; i ++) {
      if (m >= bills[i]) {
        min = Math.min(fun(m - bills[i], i + 1) + 1, min);
      } else {
        continue;
      }
    }
    return cache[m] = min;
  }
  
  return fun(amount) === Number.MAX_SAFE_INTEGER ? -1 : fun(amount);
}

console.log(solution([1, 1, 1, 3, 2, 4, 6], 11))
