// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let  middle = 0
  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);
    if (nums[left] < target) {
      left = left + 1
    }
    if (nums[right] > target) {
      right = right - 1
    }
    if (nums[middle] > target) {
      right = middle - 1
    }
    if (nums[middle] < target) {
      left = middle + 1
    }
    if (nums[left] === target && target === nums[right]) {
      break
    }
  }
  return nums.length ? right - left + 1 : 0
};

console.log(search([5,7,7,8,8,10], 8))
console.log(search([5,7,7,8,8,10], 6))
console.log(search([6,6,6], 6))
console.log(search([], 0))
console.log(search([1], 1))