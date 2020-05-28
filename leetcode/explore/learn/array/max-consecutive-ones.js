/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let right = 0, num = 0, total = 0
  let pre = nums[0]
  while (right < nums.length) {
    const item = nums[right]

    num = item === 1 ? pre === item ? ++num : 1 : 0
    total = Math.max(total, num)

    pre = item
    right++
  }
  return total
};
