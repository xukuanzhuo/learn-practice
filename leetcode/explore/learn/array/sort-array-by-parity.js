// Sort Array by Parity
// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
// You may return any answer array that satisfies this condition.

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let evenPoint = 0, len = A.length
  for (let i = 0; i < len; i++) {
    if (A[i] % 2 === 0) {
      const tmp = A[i]
      A[i] = A[evenPoint]
      A[evenPoint] = tmp
      evenPoint++
    }
  }
  return A
};
