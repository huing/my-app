// https://leetcode-cn.com/problems/search-rotate-array-lcci/
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle = right;
  let ans = -1;

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);
    if (arr[middle] === target) {
      ans = middle;
      right = middle - 1;
      continue;
    }
    if (arr[middle] < target && target < arr[right]) {
      left = middle + 1;
      right = right - 1;
      continue;
    }
    if (arr[middle] < target && target === arr[right]) {
      ans = right;
      right = right - 1;
      continue;
    }
    if (arr[middle] < target) {
      right = right - 1;
      continue;
    }
    if (arr[middle] > target && target === arr[right]) {
      ans = right;
      right = middle - 1;
      continue;
    }
    if (arr[middle] > target) {
      right = right - 1;
      continue;
    }
  }
  return ans;
};
console.log(search([4, 5, 6, 7, 8, 9, 1, 2, 3], 9));
console.log(search([1, 3, 3, 1], 1));
console.log(search([5, 5, 5, 1, 2, 3, 4, 5], 5));
console.log(search([2, 2, 2, 0, 1], 0));
console.log(search([2, 2, 2, 0, 1], 1));
console.log(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5));
console.log(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 11));
console.log(search([5], 5));
console.log(search([5], 0));
console.log(search([3, 1, 3], 1));
console.log(search([1, 3, 3], 3));
console.log(search([2, 2, 2, 0, 1], 2));
console.log(search([2, 2, 2, 0, 1], 9));
console.log(search([3, 3, 1, 3], 1));
console.log(search([3, 1, 3, 3, 3], 3));
console.log(search([3, 3, 3, 1, 3, 3, 3], 1));
console.log(search([7, 8, 9, 1, 2, 3, 4, 5, 6], 6));
console.log(search([6, 7, 8, 9, 1, 2, 3, 4, 5], 7));
console.log(search([5, 6, 7, 8, 9, 1, 2, 3, 4], 5));
console.log(search([3, 4, 5, 1, 2], 1));
console.log(search([1, 3, 5], 0));
console.log(search([5, 3, 1], 0));
