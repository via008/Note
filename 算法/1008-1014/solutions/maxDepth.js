/**
 * Definition for a binary tree node.
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  // DFS（深度优先搜索）
  // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;

  // BFS（广度优先搜索）
  const queue = [root];
  let result = 0;
  while(queue.length) {
    let size = queue.length;
    while(size > 0) {
      const ele = queue.shift();
      if (ele.left) {
        queue.push(ele.left);
      }
      if (ele.right) {
        queue.push(ele.right);
      }
      size --;
    }
    result ++;
  }

  return result;
};