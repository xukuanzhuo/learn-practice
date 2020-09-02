function sort(arr) {
  quickSort(arr, 0, arr.length - 1)
}

function quickSort(arr, low, high) {
  if (low >= high) {
    return
  }
  const p = partitionSort(arr, low, high)
  quickSort(arr, low, p - 1)
  quickSort(arr, p + 1, high)
}

function partitionSort(arr, low, high) {
  const pivot = arr[high]
  let i = low - 1
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++
      [arr[j], arr[i]] = [arr[i], arr[j]]
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
  return i + 1
}
