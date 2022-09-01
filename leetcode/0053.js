// https://leetcode-cn.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let pre = 0,
    maxAns = nums[0]
  nums.forEach((x) => {
    pre = Math.max(pre + x, x)
    maxAns = Math.max(maxAns, pre)
  })
  return maxAns
}
console.log(
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]),
  //
  maxSubArray([1]),
  //
  maxSubArray([0]),
  //
  maxSubArray([-1]),
  //
  maxSubArray([-100000]),
)
