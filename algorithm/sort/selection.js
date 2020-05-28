const Sort = require('./sort.js')

class Selection extends Sort {

  sort() {
    for (let i = 0; i < this.arrLen; i++) {
      let min = i
      for (let j = i+1; j < this.arrLen; j++) {
        this.less(j, min) && (min = j)
      }
      this.exch(i, min)
    }
  }
}

const selection = new Selection([4,1,6,2,7,5])
console.log(selection.main())

// 提高插入排序的速度，只需要在内循环中将较大的元素都向右移动而不总是交换两个元素(这样访问数组的次数就能减半)
// 练习 2.1.25