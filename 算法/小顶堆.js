class MinHeap {
  constructor(nums) {
    this.minHeap = nums || [];
    for(let i = this._parent(this._size() - 1); i >= 0; i--) {
      this._siftDown(i);
    }
  }

  _size() {
    return this.minHeap.length;
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
    this._siftUp(this._size() - 1);
  }

  _siftUp(i) {
    while(true) {
      const parentIndex = this._parent(i);
      if (parentIndex < 0 || this.minHeap[parentIndex] <= this.minHeap[i]) {
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
    this._swap(0, this._size() - 1);
    const val = this.minHeap.pop();
    this._siftDown(0);
    return val;
  }

  _siftDown(i) {
    while(true) {
      const leftIndex = this._left(i);
      const rightIndex = this._right(i);
      let min = i;

      if (leftIndex < this._size() && this.minHeap[min] >= this.minHeap[leftIndex]) {
        min = leftIndex;
      }
      if (rightIndex < this._size() && this.minHeap[min] >= this.minHeap[rightIndex]) {
        min = rightIndex;
      }

      if (min === i) {
        break;
      }

      this._swap(i, min);
      i = min;
    }
  }
}

// const min1 = new MinHeap();
// min1.push(1)
// console.log(min1)
// min1.pop();
// console.log(min1)


// Top-K 问题
function topK(nums, k) {
  const minHeap = new MinHeap();
  // 将前k个元素入堆
  for(let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  for(let j = k; j < nums.length; j ++) {
    if (nums[j] > minHeap.minHeap[0]) {
      minHeap.pop();
      minHeap.push(nums[j]);
    }
  }

  return minHeap;
}

console.log(topK([9, 1, 4, 2, 6, 7, 8], 2))