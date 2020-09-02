/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let res = [], curIndex = 0, len = intervals.length
  if (len === 0) {
    res.push(newInterval)
    return res
  }
  for (; curIndex < len && intervals[curIndex][1] < newInterval[0];curIndex++) {
    res.push(intervals[curIndex])
  }
  for (; curIndex < len && intervals[curIndex][0] <= newInterval[1];curIndex++) {
    newInterval = [
      Math.min(newInterval[0], intervals[curIndex][0]),
      Math.max(newInterval[1], intervals[curIndex][1])
    ]
  }
  res.push(newInterval)
  for (; curIndex < len;curIndex++) {
    res.push(intervals[curIndex])
  }
  return res
};
// @lc code=end
