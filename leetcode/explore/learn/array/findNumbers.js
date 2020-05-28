// Given an array nums of integers, return how many of them contain an even number of digits.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  const isEvenNum = (num) => {
    let digit = 0
    while (num > 1) {
      num = num / 10
      digit++
    }
    return digit !== 0 && digit % 2 === 0
  }

  let total = 0
  for (const num of nums) {
    total = isEvenNum(num) ? total + 1 : total
  }
  return total
};
