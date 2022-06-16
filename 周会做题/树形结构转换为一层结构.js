/**
 * 将树形结构转换为一层的数组结构
 * @param {Array} treeList
 * @return {Array}
 * // 示例 1
const input1 = [
  {
    id: 0,
    children: [
      {
        id: 1,
        parentId: 0,
      },
      {
        id: 2,
        parentId: 0,
      },
    ],
  },
];
const output1 = [
  { id: 0 },
  { id: 1, parentId: 0 },
  { id: 2, parentId: 0 },
];

// 示例 2
const input2 = [
  {
    id: 0,
    children: [
      {
        id: 1,
        parentId: 0,
      },
    ],
  },
  {
    id: 10,
    children: [
      {
        id: 6,
        parentId: 10,
      },
    ],
  },
];
const output2 = [
  { id: 0 },
  { id: 10 },
  { id: 1, parentId: 0 },
  { id: 6, parentId: 10 },
];
*/
// 递归
function recursive(list, result) {
  list.forEach((item) => {
    const obj = {};
    if (item.children) {
      obj.id = item.id;
      result.push(obj);
      recursive(item.children, result);
    } else {
      result.push(item);
    }
  })
}
function solution(treeList) {
  const result = [];
  recursive(treeList, result);
  return result;
}

/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n * n) = O(n^2)
 */

// 广度优先、循环遍历
function solution(treeList) {
  const result = [];
  const queue = treeList;

  while(queue.length) {
    const item = queue.shift();
    const { children = [], ...rest } = item;
    result.push(rest);

    children.forEach((child) => {
      queue.push(child);
    })
  }

  return result;
}

/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n)
 */

console.log(solution([
  {
    id: 0,
    children: [
      {
        id: 1,
        parentId: 0,
      },
      {
        id: 2,
        parentId: 0,
      },
    ],
  },
]))

console.log(solution([
  {
    id: 0,
    children: [
      {
        id: 1,
        parentId: 0,
      },
    ],
  },
  {
    id: 10,
    children: [
      {
        id: 6,
        parentId: 10,
      },
    ],
  },
]))