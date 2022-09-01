// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  let map = new Map()
  let arr = []
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], (map.get(nums1[i]) || 0) + 1)
  }
  for (let j = 0; j < nums2.length; j++) {
    if (map.get(nums2[j]) && map.get(nums2[j]) > 0) {
      arr.push(nums2[j])
      map.set(nums2[j], (map.get(nums2[j]) || 0) - 1)
    }
  }
  console.log(arr)
  return arr
}

intersect([1, 2, 2, 1], [2, 2])
intersect([4, 9, 5], [9, 4, 9, 8, 4])
intersect([4, 9, 5, 4, 4], [9, 4, 9, 8, 4, 6])
