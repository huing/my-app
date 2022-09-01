// https://leetcode-cn.com/problems/jump-game/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let reach = 0;
  for (let index = 0; index < nums.length; index++) {
    if (index > reach) {
      return false;
    }
    reach = Math.max(index + nums[index], reach);
  }
  return true;
};
console.log(
  canJump([2, 3, 1, 1, 4]),
  //
  canJump([3, 2, 1, 0, 4])
);

// https://leetcode-cn.com/problems/jump-game-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let reach = 0;
  let count = 0;
  let end = 0;
  for (let index = 0; index < nums.length - 1; index++) {
    reach = Math.max(index + nums[index], reach);
    if (index === end) {
      end = reach;
      count++;
    }
  }
  return count;
};

console.log(
  jump([2, 3, 1, 1, 4]),
  //
  jump([2, 3, 0, 1, 4])
);
