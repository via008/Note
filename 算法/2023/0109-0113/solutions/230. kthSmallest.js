/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  // 二叉搜索树中序遍历是按照键增加的顺序进行的
  const inorder = [];
  const inorderTree = (root) => {
    if (root !== null) {
      inorderTree(root.left);
      inorder.push(root.val);
      inorderTree(root.right);
    }
  }
  inorderTree(root);
  return inorder[k - 1];
};