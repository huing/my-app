// https://leetcode-cn.com/problems/delete-and-earn/
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  let maxVal = 0;
  for (const val of nums) {
    maxVal = Math.max(maxVal, val);
  }
  const sum = new Array(maxVal + 1).fill(0);
  console.log(sum, maxVal);
  for (const val of nums) {
    sum[val] += val;
  }
  let first = sum[0],
    second = Math.max(sum[0], sum[1]);
  for (let i = 2; i < sum.length; i++) {
    let temp = second;
    second = Math.max(first + sum[i], second);
    first = temp;
  }
  return second;
};

console.log(
  deleteAndEarn([3, 4, 2]),
  //
  deleteAndEarn([2, 2, 3, 3, 3, 4])
);
