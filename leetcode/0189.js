// https://leetcode-cn.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  // while (k > 0) {
  //   nums.unshift(nums.pop())
  //   k--
  // }

  const n = nums.length
  const newArr = new Array(n)
  for (let i = 0; i < n; ++i) {
    newArr[(i + k) % n] = nums[i]
  }
  for (let i = 0; i < n; ++i) {
    nums[i] = newArr[i]
  }
}
rotate([1, 2, 3, 4, 5, 6, 7], 3)
rotate([-1, -100, 3, 99], 2)
