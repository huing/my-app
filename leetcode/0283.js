// https://leetcode-cn.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  const l = nums.length
  let i = 0
  let j = 0
  while (j < l) {
    j++
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    } else {
      i++
    }
  }
  // console.log(nums)
}
moveZeroes([0, 1, 0, 3, 12])
moveZeroes([0, 0, 1])
