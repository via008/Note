function lib(n) {
  // // 保存一下已计算的结果
  // const map = {};
  // const innerLib = (num) => {
  //   if (map[num]) {
  //     return map[num];
  //   }

  //   if (num === 0) {
  //     return 0;
  //   }
  //   if (num === 1) {
  //     return 1;
  //   }

  //   let result = innerLib(num - 1) + innerLib(num - 2);
  //   map[num] = result;
  //   return result;
  // };
  // return innerLib(n);

  if (n < 2) {
    return n;
  }

  let result = 1,
    num1 = 0,
    num2 = 0;
  for (let i = 2; i <= n; i++) {
    num1 = num2;
    num2 = result;
    result = num1 + num2;
  }

  return result;
}
