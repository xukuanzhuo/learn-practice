/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()
  const arrLen = nums.length
  let i = 0
  for (; i < arrLen; i++) {
    const ele = target - nums[i]
    if (map.has(ele)) {
      return [map.get(ele), i]
    }
    map.set(nums[i], i)
  }
};
// @lc code=end

