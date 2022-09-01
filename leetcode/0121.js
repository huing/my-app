// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let minprice = Number.MAX_VALUE
  let maxprofit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i]
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice
    }
  }
  console.log(maxprofit)
  return maxprofit
}
maxProfit([7, 1, 5, 3, 6, 4])
maxProfit([7, 6, 4, 3, 1])
maxProfit([2, 4, 1])
