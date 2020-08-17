/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let len = intervals.length
  if (len === 0) return intervals

  quickSort(intervals, 0, intervals.length -1)

  let res = [intervals[0]], curIndex = 0
  for (let i = 0; i < len; i++) {
    if (intervals[i][0] > res[curIndex][1]) {
      curIndex++
      res.push(intervals[i])
    } else {
      res[curIndex][1] = Math.max(intervals[i][1], res[curIndex][1])
    }
  }
  return res
}

function quickSort(a, low, high) {
  if (low >= high) {
    return
  }
  const p = partitionSort(a, low, high)
  quickSort(a, low, p - 1)
  quickSort(a, p + 1, high)
}

function partitionSort(a, low, high) {
  const pivot = a[high]
  let i = low - 1
  for (let j = low; j < high; j++) {
    if (a[j][0] < pivot[0] || (a[j][0] === pivot[0] && a[j][1] < pivot[1])) {
      i++
      [a[j], a[i]] = [a[i], a[j]]
    }
  }
  [a[i + 1], a[high]] = [a[high], a[i + 1]]
  return i + 1
}
// @lc code=end

