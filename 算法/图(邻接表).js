// 基于邻接表实现的无向图类
class GraphAdjMat {
  adjMat;
  constructor(edges) {
    this.adjMat = new Map();
    for(let edge of edges) {
      this.addVertex(edge[0]);
      this.addVertex(edge[1]);
      this.addEdge(edge[0], edge[1]);
    }
  }

  _size() {
    return this.adjMat.length;
  }

  // 添加边
  addEdge(v1, v2) {
    if (!this.adjMat.has(v1) || !this.adjMat.has(v2) || v1 === v2) {
      return '无效的边';
    }
    this.adjMat.get(v1).push(v2);
    this.adjMat.get(v2).push(v1);
  }

  // 删除边
  removeEdge(v1, v2) {
    if (!this.adjMat.has(v1) || !this.adjMat.has(v2) || v1 === v2) {
      return '无效的边';
    }
    this.adjMat.get(v1).splice(this.adjMat.get(v1).indexOf(v2), 1);
    this.adjMat.get(v2).splice(this.adjMat.get(v2).indexOf(v1), 1);
  }

  // 添加顶点
  addVertex(vertex) {
    if (this.adjMat.has(vertex)) {
      return;
    }
    this.adjMat.set(vertex, []);
  }

  // 删除顶点
  removeVertex(vertex) {
    if (!this.adjMat.has(vertex)) {
      throw '无此顶点';
    }
    this.adjMat.delete(vertex);
    for(let item of this.adjMat.values()) {
      const index = item.indexOf(vertex);
      if (index > -1) {
        item.splice(index, 1);
      }
    }
  }
}

// export default GraphAdjMat;

const edges = [[0, 1], [0, 3], [1, 2], [2, 3], [2, 4], [3, 4]];
const test1 = new GraphAdjMat(edges);
test1.addEdge(0, 2);
test1.removeEdge(0, 1);
test1.addVertex(6);
test1.removeVertex(1);
console.log(test1)

function graphBFS(graph, vertex) {
  const res = [];
  const visited = new Set();
  visited.add(vertex);
  const queue = [vertex];
  while(queue.length) {
    const v = queue.shift();
    res.push(v);
    for(const item of graph.adjMat.get(v)) {
      if (visited.has(item)) {
        continue;
      }
      visited.add(item);
      queue.push(item);
    }
  }
  return res;
}

console.log(graphBFS(test1, 0));
