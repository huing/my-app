// https://leetcode-cn.com/problems/find-majority-element-lcci/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   let map = new Map();
//   let maxLen = nums.length % 2 ? (nums.length + 1) / 2 : nums.length / 2 + 1;
//   console.log(maxLen);
//   for (const item of nums) {
//     map.set(item, (map.get(item) || 0) + 1);
//     if (map.get(item) >= maxLen) {
//       return item;
//     }
//   }
//   return -1;
// };
var majorityElement = function (nums) {
  let candidate = -1;
  let count = 0;
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }
  count = 0;
  const length = nums.length;
  for (const num of nums) {
    if (num === candidate) {
      count++;
    }
  }
  return count * 2 > length ? candidate : -1;
};

console.log(
  majorityElement([1, 2, 5, 9, 5, 9, 5, 5, 5]),
  //
  majorityElement([3, 2]),
  //
  majorityElement([2, 2, 1, 1, 1, 2, 2])
);
