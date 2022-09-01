// https://leetcode-cn.com/problems/maximum-ice-cream-bars/

var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let count = 0;
  for (let index = 0; index < costs.length; index++) {
    if (costs[index] <= coins) {
      count++;
      coins -= costs[index];
    } else {
      break;
    }
  }
  return count;
};
console.log(maxIceCream([1, 3, 2, 4, 1], 7), maxIceCream([10, 6, 8, 7, 7, 8], 5), maxIceCream([1, 6, 3, 1, 2, 5], 20));
