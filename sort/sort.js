class Sort {
  constructor(arr) {
    this.arr = arr
    this.arrLen = arr.length
  }

  sort() {}

  less(a, b) {
    return this.arr[a] < this.arr[b]
  }

  exch(i, j) {
    const temp = this.arr[i]
    this.arr[i] = this.arr[j]
    this.arr[j] = temp
  }

  show() {
    console.log(this.arr.join(','))
  }

  main() {
    this.sort()
    this.show()
  }
}

module.exports = Sort