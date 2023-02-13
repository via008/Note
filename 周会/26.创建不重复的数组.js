function randomRange(min, max) {
  // 返回大于等于min，小于等于 max 的随机数
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function solution() {
  const arr = [];
  while (arr.length < 6) {
    const rand = randomRange(2, 32);
    if (!arr.includes(rand)) {
      arr.push(rand);
    }
  }
}

/**
 * 0-1 Math.random()
 * 1-10 Math.floor(Math.random() * 10) + 1 10-1+1
 * 2-9 Math.floor(Math.random()*8) + 1 9-2+1
 */