// Given an array of integers A sorted in non-decreasing order, 
// return an array of the squares of each number, also in sorted non - decreasing order.
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let splitIndex = 0
  for (let i = 0; i < A.length; i++) {
    if (i - 1 < 0) { continue }
    if (A[i - 1] < 0 && A[i] >= 0) {
      splitIndex = i
      break
    }
  }

  const negativeNums = A.slice(0, splitIndex)
  const positiveNums = A.slice(splitIndex, A.length)
  const squares = []
  while (negativeNums.length > 0 && positiveNums.length > 0) {
    const negaAbsNum = Math.abs(negativeNums[negativeNums.length - 1])
    if (negaAbsNum < positiveNums[0]) {
      squares.push(Math.pow(negaAbsNum, 2))
      negativeNums.pop()
    } else {
      squares.push(Math.pow(positiveNums[0], 2))
      positiveNums.shift()
    }
  }
  while (negativeNums.length > 0) {
    const negaAbsNum = Math.abs(negativeNums[negativeNums.length - 1])
    squares.push(Math.pow(negaAbsNum, 2))
    negativeNums.pop()
  }
  while (positiveNums.length > 0) {
    squares.push(Math.pow(positiveNums[0], 2))
    positiveNums.shift()
  }
  return squares
};

const squares = sortedSquares([-4, -1, 0, 3, 10])
console.log(squares)