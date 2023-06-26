// 前序遍历
const preOrder = (root) => {
  const res = [];
  const stack = [root]
  while(stack.length) {
      const node = stack.pop();
      res.push(node.val);
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
  }
  return res;
}

// 中序遍历
const inOrder = (root) => {
  const res = [];
  const stack = [];
  let cur = root;
  while(stack.length || cur) {
    while(cur) {
      stack.push(cur);
      cur = cur.left;
    }
    const node = stack.pop();
    res.push(node.val);
    if (node.right) {
      cur = node.right;
    }
  }
  return res;
}

// 后序遍历
const postOrder = (root) => {
  const res = [];
  const stack = [root];
  while(stack.length) {
    const node = stack.pop();
    res.unshift(node.val);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
}