// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let ans = 0
  let n = prices.length
  for (let i = 1; i < n; ++i) {
    ans += Math.max(0, prices[i] - prices[i - 1])
  }
  return ans
}
maxProfit([7, 1, 5, 3, 6, 4])
maxProfit([1, 2, 3, 4, 5])
