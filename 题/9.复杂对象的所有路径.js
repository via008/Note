const test1 = {
  a: 1,
  b: { c: 2},
  d: [3, { e: 4 }],
};
//  [ 'a', 'b.c', 'd.0', 'd.1.e' ]
const test2 = {
  a: 1,
  b: 2,
  c: [
    { d: 3 },
    {
      e: [{ k: 8 }],
      h: { i: 0},
    },
  ],
  f: { g: 5},
  m: {},
  n: []
};
// [ 'a', 'b', 'c.0.d', 'c.1.e.0.k', 'c.1.h.i', 'f.g']

function solution(obj) {
  const result = [];

  const recursion = (param, path) => {
    const keys = Object.keys(param);
    for(let key of keys) {
      const temp = `${path}.${key}`;
      if (typeof param[key] !== 'object' || JSON.stringify(param[key]) === '{}' || JSON.stringify(param[key]) === '[]') {
        result.push(temp.slice(1));
        continue;
      } else {
        recursion(param[key], temp);
      }
    }
  }
  recursion(obj,'');
  return result;
}

console.log(solution(test2));