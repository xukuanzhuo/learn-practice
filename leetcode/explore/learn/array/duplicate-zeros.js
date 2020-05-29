// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written.
// Do the above modifications to the input array in place, do not return anything from your function.
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const arrLen = arr.length
  for (let i = 0; i < arrLen - 1; ) {
    if (arr[i] === 0) {
      insertByIndex(arr, i, 0)
      i += 2
    } else {
      i++
    }
  }
};

function insertByIndex(arr, index, item) {
  const endPointer = arr.length - 2
  for (let i = endPointer; i >= index; i--) {
    arr[i + 1] = arr[i]
  }
  arr[index] = item
}

// time O(n), space O(1)
var duplicateZeros = function(a) {
  let i = 0, sh = 0;
  for (i = 0; sh + i < a.length; ++i) sh += a[i] == 0 ? 1 : 0;
  for (i = i - 1; sh > 0; --i) {
    if (i + sh < a.length) a[i + sh] = a[i];
    if (a[i] == 0) a[i + --sh] = a[i];
  }
}
var a = [1, 0, 2, 3, 0, 4, 5, 0]
duplicateZeros(a)
console.log(a)