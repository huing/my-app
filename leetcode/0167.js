// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let l = numbers.length
  let i = 0,
    j = 0
  while (i < l) {
    j = i + 1
    while (j < l) {
      if (numbers[i] + numbers[j] > target) {
        break
      }
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1]
      }
      j++
    }
    i++
  }
}
console.log(
  twoSum([2, 7, 11, 15], 9),
  twoSum([2, 3, 4], 6),
  twoSum([-1, 0], -1),
  twoSum([0, 0, 3, 4], 0),
)
