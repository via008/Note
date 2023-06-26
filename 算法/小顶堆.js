class MinHeap {
  constructor() {
    this.minHeap = [];
    this.size = this.minHeap.length;
  }

  // 给定一个索引，找到该元素的父节点
  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  // 给定一个索引，找到该元素的左节点
  _left(i) {
    return 2 * i + 1;
  }

  // 给定一个索引，找到该元素的右节点
  _right(i) {
    return 2 * i + 2;
  }

  // 交换函数
  _swap(i, j) {
    const temp = this.minHeap[i];
    this.minHeap[i] = this.minHeap[j];
    this.minHeap[j] = temp;
  }

  /**
   * 入堆操作
   * 1. 先推入堆底
   * 2. 从底到顶堆化
   */
  push(val) {
    this.minHeap.push(val);
    this._siftUp(this.size - 1);
  }

  _siftUp(i) {
    while(true) {
      const parentIndex = this._parent(i);
      if (parentIndex < 0 || this.minHeap[parentIndex] <= this.minHeap[temp]) {
        break;
      }
      this._swap(parentIndex, i);
      i = parentIndex;
    }
  }

  /**
   * 堆顶元素出堆
   * 1. 先将堆顶元素与堆底元素交换
   * 2. 将堆底元素删除
   * 3. 从顶到底堆化
   */
  pop() {
    this._swap(0, this.size - 1);
    const val = this.minHeap.pop();
    this._siftDown(0);
    return val;
  }

  _siftDown(i) {
    
  }
}