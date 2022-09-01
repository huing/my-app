// https://leetcode-cn.com/problems/maximum-sum-circular-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarraySumCircular = function (nums) {
  let dp = new Array(nums.length)
  dp[0] = nums[0]
  let max = nums[0]
  let sum = nums[0]
  let min = 0
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i]
    dp[i] = nums[i] + Math.max(dp[i - 1], 0)
    max = Math.max(dp[i], max)
  }
  // console.log(dp, sum, max)
  for (let i = 1; i < nums.length - 1; i++) {
    dp[i] = nums[i] + Math.min(dp[i - 1], 0)
    min = Math.min(dp[i], min)
  }
  // console.log(dp)
  // console.log(Math.max(sum - min, max))
  return Math.max(sum - min, max)
}
maxSubarraySumCircular([1, -2, 3, -2])
maxSubarraySumCircular([5, -3, 5])
maxSubarraySumCircular([3, -1, 2, -1])
maxSubarraySumCircular([-1, -1, -1, -1])
maxSubarraySumCircular([-2, -3, -1])
