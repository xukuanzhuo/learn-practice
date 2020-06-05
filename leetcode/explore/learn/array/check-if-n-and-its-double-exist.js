// Check If N and Its Double Exist
// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
// More formally check if there exists two indices i and j such that:
// ```
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
// ```
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let map = new Map(), exist = false
  for (let i = 0; i < arr.length; i++) {
    let duplicateNum = 1
    if (map.has(arr[i])) {
      map.set(arr[i], ++duplicateNum)
    } else {
      duplicateNum = 1
      map.set(arr[i], duplicateNum)
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0 && map.has(arr[i] * 2)) {
      return true
    } else if (arr[i] === 0 && map.get(arr[i]) >= 2) {
      return true
    }
  }

  return exist
};

const arr = [-2, 0, 10, -19, 4, 6, -8]
const isExist = checkIfExist(arr)
console.log(isExist)