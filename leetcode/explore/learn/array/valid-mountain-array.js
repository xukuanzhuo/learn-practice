// Valid Mountain Array
// Given an array A of integers, return true if and only if it is a valid mountain array.
// Recall that A is a mountain array if and only if:
// ```
// A.length >= 3
// There exists some i with 0 < i < A.length - 1 such that:
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[A.length - 1]
// ```
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  let n = A.length, i = 0, j = n - 1;
  while (i + 1 < n && A[i] < A[i + 1]) i++;
  while (j > 0 && A[j - 1] > A[j]) j--;
  return i > 0 && i == j && j < n - 1;
};

const arr = [1,2,3,1]
const valid = validMountainArray(arr)
console.log(valid)