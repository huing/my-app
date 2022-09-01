// https://leetcode-cn.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let l = nums.length
  let i = 0,
    j = 0
  while (i < l) {
    j = i + 1
    while (j < l) {
      // if (nums[i] + nums[j] > target) {
      //   break
      // }
      if (nums[i] + nums[j] === target) {
        console.log(i, j)
        return [i, j]
      }
      j++
    }
    i++
  }
  console.log('error')
}
twoSum([2, 7, 11, 15], 9)
twoSum([3, 2, 4], 6)
twoSum([3, 3], 6)
twoSum([-1, 0], -1)
twoSum([0, 0, 3, 4], 0)
twoSum([0, 4, 3, 0], 0)
