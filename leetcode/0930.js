// https://leetcode-cn.com/problems/binary-subarrays-with-sum/
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let arr = [1, 2, 3];
  let list = [...arr.slice(1)];
  let list2 = [...arr].slice(1);
  console.log(list, list2);
};
console.log(
  numSubarraysWithSum([1, 0, 1, 0, 1], 2),
  //
  numSubarraysWithSum([0, 0, 0, 0, 0], 0)
);
