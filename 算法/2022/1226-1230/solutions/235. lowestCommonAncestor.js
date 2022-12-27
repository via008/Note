/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    /**
     * 二叉搜索树特点：左子树的所有节点小于当前节点，右子树的所有节点大于当前节点，并且每棵子树都有这个特点
     * 解题要点：
     * 1. 如果 p、q 都小于当前节点，则在左子树上面继续找
     * 2. 如果 p、q 都大于当前节点，则在右子树上面继续找
     * 3. 如果 p、q 一个大于当前节点，一个小于当前节点，则当前节点为 p、q 的公共祖先
     */
    if (p.val < root.val && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
      return lowestCommonAncestor(root.right, p, q);
    } else {
      return root;
    }
};