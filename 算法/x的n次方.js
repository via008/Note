/**
 * 求 x 的 n 次方
 */

// 普通迭代
function power(x, n) {
  let result = 1;
  for(let i = 0; i < n; i ++) {
    result = result * x;
  }
  return result;
}
console.log(power(3, 4))
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

// 递归
function power1(x, n) {
  if(n === 0) {
    return 1;
  }
  return power1(x, n - 1) * x;
}
console.log(power1(3, 4))
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

// 递归
function power2(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }
  if (n % 2 === 1) {
    return power2(x, n / 2) * power2(x, n / 2) * x;
  }
  return power2(x, n / 2) * power2(x, n / 2);
}
console.log(power2(3, 4))
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

// 递归
function power3(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }
  const result = power3(x, n / 2);
  if(n % 2 === 1) {
    return result * result * x;
  }
  return result * result;
}
console.log(power3(3, 4))
/**
 * 时间复杂度：O(log2n)
 * 空间复杂度：O(log2n)
 */
