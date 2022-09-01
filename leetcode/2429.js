// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let middle = 0;
  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);
    if (nums[middle] === middle) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
};

console.log(missingNumber([0, 1, 3]));
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]));
console.log(missingNumber([0]));
console.log(missingNumber([1]));
