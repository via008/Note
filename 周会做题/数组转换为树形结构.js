/**
 * 将一个数组转换为树形结构
 */
const test = [
  { id: 1, parentId: 0 },
  { id: 0, },
  { id: 5, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 7, parentId: 5 },
  { id: 9, parentId: 5 },
  { id: 10, },
  { id: 6,  parentId: 10 },
];

function solution(arr) {
  arr.forEach((item) => {
    const target = arr.filter((t) => t.parentId === item.id);
    if (target.length) {
      item.children = (item.children || []).concat(target);
    }
  });
  return arr.filter((item) => item.parentId === undefined);
}
console.log(solution(test));