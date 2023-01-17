/**
 * 《最近的公共祖先》
 *
 *         1
 *     /   |    \
 *     2   3     4
 *     |         /\
 *     5         6 7
 *   / | \
 *  8 9 10
 *      |
 *      11
 *      |
 *      12
 *
 * eg1
 * input: test, 10, 9
 * output: 5
 *
 * eg2
 * input: test, 10, 11
 * output: 10
 *
 * eg3
 * input: test, 10, 7
 * output: 1
 */
const test = {
  id: 1,
  name: 'a',
  children: [
    {
      id: 2,
      name: 'b',
      children: [
        {
          id: 5,
          name: 'e',
          children: [
            { id: 8, name: 'h' },
            { id: 9, name: 'i' },
            { id: 10, name: 'j', children: [{ id: 11, name: 'k', children: [{ id: 12, name: 'l' }] }] },
          ],
        },
      ],
    },
    { id: 3, name: 'c' },
    {
      id: 4,
      name: 'd',
      children: [
        { id: 6, name: 'f' },
        { id: 7, name: 'g' },
      ],
    },
  ],
};

function solution(tree, a, b) {
  // write code here...
  // 找到给定节点的所有父级路径
  const getParentPath = (treeArr, nodeId) => {
    for (let item of treeArr) {
      if (item.id === nodeId) {
        return [nodeId];
      }
      if (item.children) {
        const id = getParentPath(item.children, nodeId);
        if (id) {
          // 确保最近的公共祖先在前面，可以先被遍历到
          return id.concat(item.id);
        }
      }
    }
  }

  const parentPathA = getParentPath([tree], a);
  const parentPathB = getParentPath([tree], b);

  for(let i = 0;  i < parentPathA.length; i ++) {
    for(let j = 0; j < parentPathB.length; j ++) {
      if (parentPathA[i] === parentPathB[j]) {
        return parentPathA[i];
      }
    }
  }
}

console.log(solution(test, 10, 11))