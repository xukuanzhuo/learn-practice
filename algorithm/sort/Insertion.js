const Sort = require('./sort.js')

class Insertion extends Sort {

  sort () {
    for (let i = 1; i < this.arrLen; i++) {
      for (let j = i; j > 0 ; j--) {
        this.less(j, j-1) && this.exch(j, j-1)
      }
    }
  }
}

const insertion = new Insertion([4,1,2,5,7])
console.log(insertion.main())