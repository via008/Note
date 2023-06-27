class maxHeap {
  constructor(nums) {
    this.maxHeap = nums || [];
    for(let i = this._parent(this._size() - 1); i >= 0; i --) {
      this._siftDown(i);
    }
  }

  _swap(i, j) {
    const temp = this.maxHeap[i];
    this.maxHeap[i] = this.maxHeap[j];
    this.maxHeap[j] = temp;
  }

  _size() {
    return this.maxHeap.length;
  }

  // 父节点
  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  // 左子节点
  _left(i) {
    return 2 * i + 1;
  }

  // 右子节点
  _right(i) {
    return 2 * i + 2;
  }

  // 从顶至底堆化
  _siftDown(i) {
    while(true) {
      const leftIndex = this._left(i);
      const rightIndex = this._right(i);
      let max = i;

      if (leftIndex < this._size() && this.maxHeap[i] <= this.maxHeap[leftIndex]) {
        max = leftIndex;
      }
      if (rightIndex < this._size() && this.maxHeap[i] <= this.maxHeap[rightIndex]) {
        max = rightIndex;
      }

      if (max === i) {
        return;
      }
      this._swap(max, i);
      i = max;
    }
  }

  // 从底至顶堆化
  _siftUp(i) {
    while(true) {
      const parentIndex = this._parent(i);
      if (parentIndex < 0 || this.maxHeap[i] <= this.maxHeap[parentIndex]) {
        break;
      }
      this._swap(i, parentIndex);
      i = parentIndex;
    }
  }

  // 入堆
  _push(val) {
    this.maxHeap.push(val);
    this._siftUp(this_size() - 1);
  }

  // 堆顶出堆
  _pop() {
    this._swap(0, this._size() - 1);
    const val = this.maxHeap.pop();
    this._siftDown(0);
    return val;
  }
}