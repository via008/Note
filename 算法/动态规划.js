// 1、5、11
// 凑出 15，需要的最小的数值
function solutions(n) {
  const cache = [];

  function fn(n) {
    if (cache[n]) {
      return cache[n];
    }

    if (n === 0) {
      return 0;
    }

    let min = Number.MAX_SAFE_INTEGER;
    if (n >= 11) {
      min = Math.min(min, fn(n - 11) + 1);
    }
    if (n >= 5) {
      min = Math.min(min, fn(n - 5) + 1);
    }
    if (n >= 1) {
      min = Math.min(min, fn(n - 1) + 1);
    }

    return cache[n] = min;
  }

  return fn(n);
}

console.log(solutions(700000))


/**
 * f(0) = 0
 * min = Math.min(f(n-c)+1);
 */

let result = Number.MAX_SAFE_INTEGER;
function solutions1(coins, mount) {
  for(let i = 1; i < mount; i++) {
    for(let c = 0; c < coins.length; c ++) {
      if (c <= i) {
        result = Math.min(solutions1(mount - coins[c]) + 1);
      }
    }
  }
}
