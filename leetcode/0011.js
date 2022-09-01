// https://leetcode-cn.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;
  while (i < j) {
    if (height[i] < height[j]) {
      max = Math.max(height[i] * (j - i), max);
      i++;
    } else {
      max = Math.max(height[j] * (j - i), max);
      j--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), maxArea([1, 1]), maxArea([4, 3, 2, 1, 4]), maxArea([1, 2, 1]));
