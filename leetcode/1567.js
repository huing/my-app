// https://leetcode-cn.com/problems/maximum-length-of-subarray-with-positive-product/
/**
 * @param {number[]} nums
 * @return {number}
 */
const getMaxLen = function (nums) {
  let positive = new Array(nums.length)
  let negative = new Array(nums.length)
  if (nums[0] > 0) {
    positive[0] = 1
    negative[0] = 0
  } else if (nums[0] < 0) {
    positive[0] = 0
    negative[0] = 1
  } else {
    positive[0] = 0
    negative[0] = 0
  }
  let maxLength = positive[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive[i] = positive[i - 1] + 1
      negative[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0
    } else if (nums[i] < 0) {
      positive[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0
      negative[i] = positive[i - 1] + 1
    } else {
      positive[i] = 0
      negative[i] = 0
    }
    maxLength = Math.max(maxLength, positive[i])
  }
  console.log(positive)
  console.log(negative)
  console.log(maxLength)
  return maxLength
}
getMaxLen([1, -2, -3, 4])
getMaxLen([0, 1, -2, -3, -4])
getMaxLen([-1, -2, -3, 0, 1])
