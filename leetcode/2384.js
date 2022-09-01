// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/

var minArray = function (numbers, target) {
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

    // 有相等值的情况下，这种写法是错的 可以带上 continue
    // if (numbers[middle] < numbers[right]) {
    //   right = middle;
    // }
    // if (numbers[middle] > numbers[right]) {
    //   left = middle + 1;
    // }
    // if (numbers[middle] === numbers[right]) {
    //   right = right - 1;
    // }
  }
  return numbers[left];
};
console.log(minArray([3, 1, 3]));
console.log(minArray([1, 3, 3]));
console.log(minArray([1, 3, 3, 1]));
console.log(minArray([3, 3, 1, 3]));
console.log(minArray([3, 1, 3, 3, 3]));
console.log(minArray([3, 3, 3, 1, 3, 3, 3]));
console.log(minArray([7, 8, 9, 1, 2, 3, 4, 5, 6]));
console.log(minArray([6, 7, 8, 9, 1, 2, 3, 4, 5]));
console.log(minArray([5, 6, 7, 8, 9, 1, 2, 3, 4]));
console.log(minArray([4, 5, 6, 7, 8, 9, 1, 2, 3]));
console.log(minArray([5]));
console.log(minArray([3, 4, 5, 1, 2]));
console.log(minArray([2, 2, 2, 0, 1]));
console.log(minArray([1, 3, 5]));
console.log(minArray([5, 3, 1]));
