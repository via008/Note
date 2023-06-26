/**
 * Definition for a binary tree node.
 * function TreeNode(val, parent, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.parent = (parent===undefined ? null : parent)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// ----- 搜索 ------
/**
 * 在二叉搜索树中搜索特定的值
 * @param {TreeNode} root 
 * @param {Node} val 
 */
const search = (root, val) => {
  // 迭代，对于大多数计算机，迭代版本效率高得多
  if (root === null || root.val === val) {
    return root;
  }
  // 保持输入的不变性
  let r = root;
  while(r !== null) {
    r = r.val > val ? r.left : r.right;
  }
  return r;

  // 递归
  // if (root === null || root.val === val) {
  //   return root;
  // }
  // if (val > root.val) {
  //   return search(root.right, val);
  // }
  // return search(root.left, val);
}

// ----- 最大关键字 -----
const maximum = (root) => {
  // 迭代
  if (root === null) {
    return root;
  }
  let r = root;
  while(r.right !== null) {
    r = r.right;
  }
  return r;
  
  // 递归
  // if (root === null || root.right === null) {
  //   return root;
  // }
  // return maximum(root.right);
}

// ----- 最小关键字 -----
const minimum = (root) => {
  // 迭代
  if (root === null || root.left === null) {
    return root;
  }
  let r = root;
  while(r.left !== null) {
    r = r.left;
  }
  return r;

  // 递归
  // if (root === null || root.left === null) {
  //   return root;
  // }
  // return minimum(root.left);
}

// ----- 后继节点 -----
const successor = (node) => {
  /**
   * 两种情况：
   * 1. node 有右子树的情况：直接找到右子树中的最小关键字即可
   * 2. node 无右子树的情况下，需要向上父级查找，直到找到一个 不为 null 且 当前节点不是父节点的右孩子 的值
   */
  if (node.right) {
    return minimum(node.right);
  }
  let p = node.parent;
  // 循环必须 node 是右孩子的情况，如果是左孩子，直接返回 p 即可
  while (p !== null && node === p.right) {
    node = p;
    p = p.parent;
  }
  return p;
}

// ----- 前驱节点 -----
const predecessor = (node) => {
  /**
   * 两种情况：
   * 1. node 有左子树的情况下：找到左子树的最大关键字
   * 2. node 无左子树的情况下：向父级查找，直到找到一个 不为null 且 当前节点不是父节点的左孩子 的值
   */
  if (node.left) {
    return maximum(node.left);
  }
  let p = node.parent;
  while(p !== null && node === p.left) {
    node = p;
    p = p.parent;
  }
  return p;
}

// ----- 插入 -----
const insert = (root, node) => {
  /**
   * 两步：
   * 1. 找到插入的位置
   * 2. 修改插入位置的节点指向
   */
  if (root === null) {
    return node;
  }
  let r = root;
  // 存下最后找到位置的父级，需要将该节点作为插入节点的父级
  let p = r;
  while(r !== null) {
    p = r;
    r = root.val > node.val ? root.left : root.right;
  }

  // 设置 node 的父级
  node.parent = p;
  // 根据大小设置为父级节点的孩子节点
  if (node.val > p.val) {
    p.right = node;
  } else {
    p.left = node;
  }
}

// ----- 移动子树 -----
// 用 newChild 替换 oldChild
const transplant = (root, oldChild, newChild) => {
  // 处理 oldChild 是树根的情况
  if (root === oldChild) {
    root = newChild;
  } else if (oldChild.parent.left === oldChild) {
    oldChild.parent.left = newChild;
  } else if (oldChild.parent.right === oldChild) {
    oldChild.parent.right = newChild;
  }

  if (newChild !== null) {
    newChild.parent = oldChild.parent;
  }
}

// ----- 删除 -----
const deleteNode = (root, node) => {
  /**
   * 三种情况：
   * 1. 删除的节点没有孩子节点时：直接删除，设置其父级的孩子节点，用 null 替换
   * 2. 有一个孩子节点的情况：直接删除，用其孩子节点替换自身，并修改父级节点的的指向
   * 3. 有两个孩子节点的情况，找到该节点的后继节点（后继节点位于删除节点的右子树中，且没有左孩子），并让后继节点占据删除节点的位置，对后继节点是否删除节点的右孩子进行情况讨论：
   *   3.1 如果后继节点是删除节点的右孩子，则用后继节点直接替换删除节点，并仅留下后继节点的右孩子
   *   3.2 如果不是，则先用后继节点的右孩子替换后继节点，再用后继节点替换删除节点
   */

 if (node.left === null) {
  // 处理没有左孩子的情况
  transplant(root, node, node.right);
 } else if (node.right === null) {
  // 处理有一个左孩子但没有右孩子的情况
  transplant(root, node, node.left);
 } else {
  // 因为 node 必有右子树，所以后继节点是右子树中最小的值
  const successorNode = minimum(node.right);
  if (successorNode !== node.right) {
    transplant(root, successorNode, successorNode.right);
    successorNode.right = node.right;
    successorNode.right.parent = successorNode;
  }
  transplant(root, node, successorNode);
  successorNode.left = node.left;
  node.left.parent = successorNode;
 }
}

// ----- 中序遍历 ------
// 二叉搜索树「中序遍历」是按照键「增加」的顺序进行的
const inorderTree = (root) => {
  const result = [];
  const innerFun = (r) => {
    if (r !== null) {
      innerFun(r.left);
      result.push(r);
      innerFun(r.right);
    }
  }
  innerFun(root);
  return result;
}

// ----- 前序遍历 ------
const preorderTree = (root) => {
  const result = [];
  const innerFun = (r) => {
    if (r !== null) {
      result.push(r);
      innerFun(r.left);
      innerFun(r.right);
    }
  }
  innerFun(root);
  return result;
}

// ----- 后序遍历 ------
const postorderTree = (root) => {
  const result = [];
  const innerFun = (r) => {
    if (r !== null) {
      innerFun(r.left);
      innerFun(r.right);
      result.push(r);
    }
  }
  innerFun(root);
  return result;
}


// 二叉搜索树删除特定节点
function removeNode(root, num) {
  if (root === null) {
    return;
  }
  // 找到需要删除的节点
  let cur = root;
  let pre = null;
  while(cur) {
    if (cur.val === num) {
      break;
    }
    pre = cur;
    if (cur.val > num) {
      cur = cur.left;
    } else {
      cur = cur.right;
    }
  }

  // 判断需要删除的节点是否存在、是否为叶子节点、有几个子节点
  // 如果没有找到值为 num 的节点
  if (!cur) {
    return root;
  }
  // 无子节点或者有一个子节点
  if (!cur.left || !cur.right) {
    const node = cur.left || cur.right;
    if (cur === root) {
      root = node;
    } else {
      if (pre.left === cur) {
        pre.left = node;
      } else {
        pre.right = node;
      }
    }
    
  } else {
    // 有两个子节点
    let temp = cur.right;
    // 找到后驱节点
    while(temp.left) {
      temp = temp.left;
    }
    // 递归删除后驱节点
    removeNode(temp.val);
    // 让要删除的节点等于后驱节点
    cur.val = temp.val;
  }
}