### DFS

深度优先搜索(depth first search)，从根节点开始，沿树的**深度**进行搜索，尽可能深的搜索分支。当节点所在的边都搜索完毕，则**回溯**到上一个节点，再搜索其余的边。

深度优先搜索使用栈结构，后进先出。

`javascript` 相关的数组方法：

- `shift`：从数组删除**第一个**元素，并返回该元素的值。该方法更改数组的长度
- `unshift`：将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度**

### BFS

广度优先搜索(breadth first search)，从根节点开始，沿树的**宽度**进行搜索，如果所有的节点都被访问，则算法终止。

广度优先搜索使用队列的形式，先进先出。

`javascript` 相关的数组方法：

- `shift`
- `push`

```javascript
const bfs = (root) => {
  // 定义队列
  const queue = [root];
  // 定义结果集
  const res = [];
  while (queue.length) {
    const node = queue.shift();
    res.push(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return res;
};
```
