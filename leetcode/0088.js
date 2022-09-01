// https://leetcode-cn.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  // nums1.splice(m, nums1.length - m, ...nums2);
  // nums1.sort((a, b) => a - b);

  let p1 = m - 1,
    p2 = n - 1
  let tail = m + n - 1
  let cur
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2--]
    } else if (p2 === -1) {
      cur = nums1[p1--]
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--]
    } else {
      cur = nums2[p2--]
    }
    nums1[tail--] = cur
  }
  console.log(nums1)
}
merge([1, 2, 8, 9, 0, 0, 0], 4, [2, 5, 6], 3)
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
merge([1], 1, [], 0)
merge([0], 0, [1], 1)
merge([2, 0], 1, [1], 1)
