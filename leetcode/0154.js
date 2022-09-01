/**
 * https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array-ii/
 *  */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (numbers) {
  let left = 0;
  let right = numbers.length - 1;
  let middle = right;

  while (left < right) {
    middle = left + Math.floor((right - left) / 2);
    if (numbers[middle] < numbers[right]) {
      right = middle;
    } else if (numbers[middle] > numbers[right]) {
      left = middle + 1;
    } else {
      right = right - 1;
    }
  }
  return numbers[left];
};
