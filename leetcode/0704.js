// https://leetcode-cn.com/problems/binary-search/

const search = (nums, target) => {
  let right = nums.length - 1;
  let middle = 0;
  let left = 0;
  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);
    if (target > nums[middle]) {
      left = middle + 1;
    }
    if (target < nums[middle]) {
      right = middle - 1;
    }
    if (target === nums[middle]) {
      return middle;
    }
  }
  return -1;
};
const nums = [2, 5];
const target = 5;
console.log(search(nums, target));
