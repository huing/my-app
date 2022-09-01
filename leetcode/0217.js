// https://leetcode-cn.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  let set = new Set(nums)
  return set.size !== nums.length
}
containsDuplicate([1, 2, 3, 1])
containsDuplicate([1, 2, 3, 4])
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
