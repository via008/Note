/**
 * 《种一颗树 1》
 * 将一个二维数组转成树结构，二维数组的每一行相当于树从根节点到子节点的一条线路
 *
 * eg1
 * input:
 * [
 * [1,2],
 * [1,3,4]
 * ]
 *
 * output:
 *     1
 *    / \
 *   2   3
 *        \
 *         4
 *
 * rawOutput:
 * {
 * val: 1,
 * children: [
 *   {
 *     val: 2,
 *     children: [],
 *   },
 *   {
 *     val: 3,
 *     children: [
 *       {
 *         val: 4,
 *         children: [],
 *       },
 *     ],
 *   },
 * ],
 * };
 *
 *
 * input:
 * [
 * [4,3],
 * [4,2,7],
 * [4,8,5]
 * ]
 * output:
 *        4
 *      / | \
 *     3  2  8
 *        |   \
 *        7    5
 *
 * input:
 * [
 * [1,2,3,7],
 * [1,4,5],
 * [2,4,8,6]
 * ]
 * output:
 *             0
 *           /   \
 *         1      2
 *        / \      \
 *       2   4      4
 *      /    \      /
 *     3     5     8
 *    /            \
 *   7              6
 */

 function Node(val) {
  this.val = val;
  this.children = [];
}

function solution(list) {
  let root = new Node(0);
  for(let i = 0; i < list.length; i ++) {
    let parent = root;
    for(let j = 0; j < list[i].length; j ++) {
      const item = list[i][j];
      const findNode = parent.children.find((child) => child.val === item);
      if (findNode) {
        parent = findNode;
      } else {
        const node = new Node(item);
        parent.children.push(node);
        parent = node;
      }
    }
  }

  if (root.children.length === 1) {
    return root.children[0];
  }

  return root;
}

const test1 = [
  [1,2],
  [1,3,4]
]

console.log(solution(test1));

const test2 = [
  [4,3],
  [4,2,7],
  [4,8,5]
]
const test3 = [
  [1,2,3,7],
  [1,4,5],
  [1,2,6],
  [2,4,8,6]
]
