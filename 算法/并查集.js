/**
 * 并查集基本概念：
 * 1. 并查集是一种树型的数据结构，用于处理一些不相交集合的合并和查询问题
 * 2. 并（Union）代表合并；查（Find）代表查找；集（Set）代表这是一个以字典为基础的数据结构，它的基本功能是合并集合中的元素，查找集合中的元素
 * 
 * 数据结构：跟树类似，不过跟树是相反的。在树的数据结构里，每个节点会记录它的子节点；在并查集里，每个节点会记录它的父节点。
 */

class UnionFind {
  constructor() {
    this.father = {};
  }

  // 添加
  add(x) {
    if (!this.father[x]) {
      this.father[x] = null;
    }
  }

  // 合并
  merge(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);

    if (rootA !== rootB) {
      this.father[rootA] = rootB;
    }
  }

  // 查找
  find(x) {
    let temp = x;
    while(this.father[temp] !== null) {
      temp = this.father[temp];
    }

    // 路径查找优化(把路径上所有的节点都指向根节点)
    while (x !== temp) {
      const originFather = this.father[x];
      this.father[x] = temp;
      x = originFather;
    }
    
    return temp;
  }

  // 两节点是否联通
  isConnected(a, b) {
    return this.find(a) === this.find(b);
  }
}