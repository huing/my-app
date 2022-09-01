// https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/

const arr = [24,69,100,99,79,78,67,36,26,19];
// const arr = [1, 3, 5, 7, 6, 4, 2, 0];
// const arr = [1,9,3];
const arrFun = (arr) => {
  let index = 0;
  let currentIndex = 0;
  for (index; index < arr.length - 1; index += 1) {
    if (arr[index] > arr[index + 1] && arr[index] > arr[currentIndex]) {
      currentIndex = index;
    }
  }
  return currentIndex;
};
const result1 = arrFun(arr);
console.log(result1);

const peakIndexInMountainArray = (arr) => {
  let right = arr.length - 1;
  let left = 0;
  let middle = 0;
  let ans = 0
  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);
    if (arr[middle] < arr[middle + 1]) {
      left = middle + 1
    }
    if (arr[middle] > arr[middle + 1]) {
      ans = middle
      right = middle -1
    }
  }
  return ans  
};
const result = peakIndexInMountainArray(arr);
console.log(result)
