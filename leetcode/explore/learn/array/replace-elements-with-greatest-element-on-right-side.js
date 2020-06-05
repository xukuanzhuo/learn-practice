// Replace Elements with Greatest Element on Right Side
// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  for (let i = arr.length - 1, max = -1; i >= 0; i--) {
    let tmp = arr[i];
    arr[i] = max;
    max = Math.max(max, tmp);
  }
  return arr
};


const arr = [17, 18, 5, 4, 6, 1]
const ret = replaceElements(arr)
console.log(ret) // [18,6,6,6,1,-1]