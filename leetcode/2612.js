// https://leetcode-cn.com/problems/magic-index-lcci/

var findMagicIndex = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let middle = 0;
  let ans = -1;
  for (let index = 0; index < nums.length; index++) {
    if (index === nums[index]) {
      return index
    }
  }
  return -1
  // while (left <= right) {
  //   middle = left + Math.floor((right - left) / 2);
  //   if (right === nums[right] && ans > right) {
  //     ans = right
  //   }
  //   if (middle === nums[middle] && ans > middle ) {
  //     ans = middle
  //   }
  //   if (left === nums[left] && ans > left) {
  //     ans = left
  //   }
  //   if (middle < nums[middle]) {
  //     left = middle + 1
  //   }
  //   if (middle >= nums[middle]) {
  //     right = middle - 1
  //   }
  // }
  // return ans;
};
console.log(findMagicIndex([0, 2, 3, 3, 4, 5]))
console.log(findMagicIndex([1, 2, 3, 3, 4, 5]))
console.log(findMagicIndex([0, 2, 3, 4, 5]))
console.log(findMagicIndex([1, 1, 1]))
console.log(findMagicIndex([0]))