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
function solution(treeList) {
  
}