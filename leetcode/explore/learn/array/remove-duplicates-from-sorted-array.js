// Remove Duplicates from Sorted Array
// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = right = 0, n = nums.length
  while (right < n - 1) {
    const item = nums[right]
    right++

    if (item !== nums[right]) {
      left++
      nums[left] = nums[right]
    }
  }
  return left + 1
};

const nums = [0,0,1,1,1,2,2,3,3,4,4]
removeDuplicates(nums)
console.log(nums)