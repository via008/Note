// 双指针解法：
// 1. 初始定义两个指针 i、j，i 指针指向目前数组中最小的值（初始为第一个），j 指针正常遍历数组（初始为第二个），定义一个 max 存储最大差值（初始为 0）
// 2. 遍历数组，将数组每一项与第 i 项相减，如果差值小于 0，就将 i 指向当前项，如果差值大于 0 且大于 max，就将 max 等于当前差值

function solution(prices) {
  if (prices.length < 2) {
    return 0;
  }

  let i = 0;
  let max = 0;
  for (let j = 1; j < prices.length; j++) {
    const price1 = prices[i];
    const price2 = prices[j];
    const diff = price2 - price1;

    if (diff > max && diff > 0) {
      max = diff;
    }
    if (diff < 0) {
      i = j;
    }
  }
  return max;
}
