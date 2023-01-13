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
    // 拿到一个节点的所有父级
    const getParents = (root, node) => {
      if (root !== null) {
        if (root === node) {
          return [node];
        }
        const l = getParents(root.left, node);
        const r = getParents(root.right, node);
        if (l) {
          return [...l].concat(root);
        }
        if (r) {
          return [...r].concat(root);
        }
      }
    }

    const pParents = getParents(root, p);
    const qParents = getParents(root, q);

    for(let i = 0; i < pParents?.length; i ++) {
      for(let j = 0; j < qParents?.length; j ++) {
        if (pParents[i] === qParents[j]) {
          return pParents[i];
        }
      }
    }
};