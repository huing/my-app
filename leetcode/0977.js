// https://leetcode-cn.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  return nums.map((item) => item * item).sort((a, b) => a - b)
}

console.log(sortedSquares([-4, -1, 0, 3, 10]), sortedSquares([-7, -3, 2, 3, 11]))
