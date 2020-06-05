// High Checker
// Students are asked to stand in non-decreasing order of heights for an annual photo.
// Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.
// Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const heightToFreq = [];
  
  for (let height in heights) {
      heightToFreq[height]++;
  }
  let result = 0;
  let curHeight = 0;
  for (let i = 0; i < heights.length; i++) {
      while (heightToFreq[curHeight] == 0) {
        curHeight++;
      }
      
      if (curHeight != heights[i]) {
        result++;
      }
      heightToFreq[curHeight]--;
  }
  
  return result;
}

const heights = [1, 1, 4, 2, 1, 3]
const minimum = heightChecker(heights)
console.log(minimum)