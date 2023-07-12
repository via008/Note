// 基于邻接矩阵实现的无向图类
class GraphAdjMat {
  vertices;
  adjMat;
  constructor(vertices, edges) {
    this.vertices = [];
    this.adjMat = [];
    // 添加顶点
    for(const vertex of vertices) {
      this.addVertex(vertex);
    }
    // 添加边
    for(const edge of edges) {
      this.addEdge(edge[0], edge[1]);
    }
  }

  _size() {
    return this.vertices.length;
  }

  // 添加顶点
  addVertex(vertex) {
    const size = this._size();
    this.vertices.push(vertex);
    // 添加一行新的
    const row = [];
    for(let i = 0; i < size; i ++) {
      row.push(0);
    }
    this.adjMat.push(row);
    // 添加一列
    for(const item of this.adjMat) {
      item.push(0);
    }
  }

  // 删除顶点
  removeVertex(index) {
    if (index > this._size()) {
      throw '无该顶点';
    }
    this.vertices.splice(index, 1);
    this.adjMat.splice(index, 1);
    for(let row of this.adjMat) {
      row.splice(index, 1);
    }
  }

  // 添加边
  // i,j 为索引
  addEdge(i, j) {
    if (i < 0 || j < 0 || i > this._size() || j > this._size() || i === j) {
      throw '无效的边';
    }
    this.adjMat[i][j] = 1;
    this.adjMat[j][i] = 1;
  }

  // 删除边
  removeEdge(i, j) {
    if (i < 0 || j < 0 || i > this._size() || j > this._size() || i === j) {
      throw '无效的边';
    }
    this.adjMat[i][j] = 0;
    this.adjMat[j][i] = 0;
  }
}

const vertices = [1, 3, 2, 5, 4];
const edges = [[0, 1], [0, 3], [1, 2], [2, 3], [2, 4], [3, 4]];
const test1 = new GraphAdjMat(vertices, edges);
test1.addEdge(0, 2);
test1.removeEdge(0, 1);
test1.addVertex(6);
test1.removeVertex(1);
console.log(test1);
