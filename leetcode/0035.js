// https://leetcode-cn.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    middle = 0
  while (left <= right) {
    middle = left + Math.floor((right - left) / 2)
    if (target === nums[middle]) {
      return middle
    } else if (nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return left
}

console.log(
  searchInsert([1, 3, 5, 6], 5),
  searchInsert([1, 3, 5, 6], 2),
  searchInsert([1, 3, 5, 6], 7),
  searchInsert([1, 3, 5, 6], 0),
  searchInsert([1], 0),
)
