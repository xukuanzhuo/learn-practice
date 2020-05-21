const Sort = require('./sort.js')

class Shell extends Sort {

  sort () {
    let h = 1
    while (h < this.arrLen/3) h = h*3 + 1;
    while (h >= 1) {
      for (let i = h; i < this.arrLen; i++) {
        for (let j = i; j >= h; j -= h) {
          if (this.less(j, j-h)) this.exch(j, j-h);
        }
      }
      h = h / 3
    }
  }
}

const shell = new Shell([4,56,2,1,67,8,2,7])
console.log(shell.main())