function solutions(arr) {
  const map = {};
  let max = Number.MIN_SAFE_INTEGER;
  let maxValue;

  for (const item of arr) {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }

    if (map[item] > max) {
      max = map[item];
      maxValue = item;
    }
  }

  return maxValue;
}
