var climbStairs = function(n) {
  // const map = {};
  // const inner = (m) => {
  //   if (m === 1) {
  //     return 1;
  //   } 
  //   if (m === 2) {
  //     return 2;
  //   }
  //   if (map[m]) {
  //     return map[m];
  //   }
  //   const result = inner(m - 1) + inner(m - 2);
  //   map[m] = result;
  //   return result;
  // }
  // return inner(n);

  let pre1 = 1, pre2 = 0, cur = 0, i = 1;
  while(i <= n) {
    cur = pre1 + pre2;
    pre2 = pre1;
    pre1 = cur;
    i++;
  }

  return cur;

};

console.log(climbStairs(45));