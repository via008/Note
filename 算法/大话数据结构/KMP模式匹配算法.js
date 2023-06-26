const getNext = (T) => {
  const next = [];
  let i = 0;
  let k = -1;
  next[0] = -1;
  while(i < T.length) {
    if (k === -1 || T[i] === T[k]) {
      i ++;
      k ++;
      next[i] = k;
    } else {
      // 若字符不相同，则 k 值回溯
      k = next[k];
    }
  }
  return next;
}

console.log(getNext('ababa'))