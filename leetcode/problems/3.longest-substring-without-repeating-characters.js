/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0, right = 0, subStrLen = 0
  const isUnique = (str) => Array.from(new Set(str)).length === str.length
  while (right < s.length) {
    right++
    while (!isUnique(s.slice(left, right))) {
      left++
    }
    subStrLen = Math.max(subStrLen, right - left)
  }
  return subStrLen
};
// @lc code=end

