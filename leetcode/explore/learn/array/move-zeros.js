// Move Zeros
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let writePoint = 0, readPoint = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const tmp = nums[i]
      nums[i] = nums[writePoint]
      nums[writePoint] = tmp
      writePoint++
    }
  }
};

const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums)