// FIFO(first in, first out); LFU(least Frequently Used); LRU(Least Recently Use)
// LRU缓存淘汰算法

class LinkedList {
  constructor() {
    this.list = null
    this.length = 0
  }

  createNode(data, next) {
    return {
      data,
      next
    }
  }

  showLength() {

  }
}