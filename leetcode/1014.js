// https://leetcode-cn.com/problems/best-sightseeing-pair/
/**
 * @param {number[]} values
 * @return {number}
 */
const maxScoreSightseeingPair = function (values) {
  let ans = 0
  let mx = values[0] + 0
  for (let i = 1; i < values.length; i++) {
    ans = Math.max(ans, mx + values[i] - i)
    mx = Math.max(mx, values[i] + i)
  }
  console.log(ans)
  return ans
}
maxScoreSightseeingPair([8, 1, 5, 2, 6])
maxScoreSightseeingPair([1, 2])
