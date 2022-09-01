// https://leetcode-cn.com/problems/maximum-product-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  let dpMax = new Array(nums.length)
  let dpMin = new Array(nums.length)
  dpMax[0] = nums[0]
  dpMin[0] = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dpMax[i] = Math.max(dpMax[i - 1] * nums[i], nums[i], dpMin[i - 1] * nums[i])
    dpMin[i] = Math.min(nums[i], dpMin[i - 1] * nums[i], dpMax[i - 1] * nums[i])
    max = Math.max(dpMax[i], max)
  }
  // console.log(dp)
  console.log(max)
  return max
}
maxProduct([2, 3, -2, 4])
maxProduct([-2, 0, -1])
maxProduct([1, 1, -2, -2])
// [1, 1, -2, 4]
maxProduct([1, 0, -2, -2])
// [1, 0, -2, 4]
maxProduct([1, -1, -2, -2])
// [1, -1, 2, 4]
maxProduct([1, -12, -2, -2])
// [1, -12, 24, -2]
maxProduct([1, -12, -2, -1, -2])
// [1, -12, 24, -1, 2]
// [1, -12, 24, -24, 48]
maxProduct([1])
maxProduct([2])
maxProduct([3, -1, 4])
// [3, -3, -12]
