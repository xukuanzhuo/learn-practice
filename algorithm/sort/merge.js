/*
  归并排序把数组依次中间拆分，再合并排序两个有序数组
*/

// 自顶向下的归并排序
function mergeSort(arr) {
  const arrLen = arr.length

  if (arrLen < 2) {
    return arr
  }

  const mid = Math.floor(arrLen / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
  let sortedArr = []

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }

  while (leftArr.length) sortedArr.push(leftArr.shift())
  while (rightArr.length) sortedArr.push(rightArr.shift())

  return sortedArr
}

// 测试
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.time('归并排序耗时')
console.log('arr :', mergeSort(arr))
console.timeEnd('归并排序耗时')


// 自底向上的归并排序·
function sort(a) {
  let N = a.length
  for (let sz = 1; sz < N; sz = sz + sz) {
    for (let lo = 0; lo < N - sz; lo += sz + sz) {
      merge2(a, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, N - 1))
    }
  }

  return a
}

function merge2(a, lo, mid, hi) {
  let i = lo,
    j = mid + 1,
    aux = []
  for (let k = lo; k <= hi; k++) {
    aux[k] = a[k]
  }
  for (let k = lo; k <= hi; k++) {
    if (i > mid) a[k] = aux[j++]
    else if (j > hi) a[k] = aux[i++]
    else if (aux[j] < aux[i]) a[k] = aux[j++]
    else a[k] = aux[i++]
  }
}

// 测试
console.time('归并排序耗时')
console.log('arr :', sort(arr))
console.timeEnd('归并排序耗时')