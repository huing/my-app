// https://leetcode-cn.com/problems/valid-mountain-array/

// const arr = [2,1]
// const arr = [3,5,5]
// const arr = [0,3,2,1]
// const arr = [0,3,3,2,1]
// const arr = [2,0,2]
const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
const validMountainArray = (arr) => {
  if (arr.length < 3) {
    return false
  }
  let ans = false
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === arr[index + 1]) {
      return false
    }
    if (arr[index] < arr[index + 1] && ans) {
      return false
    }
    if (arr[index] > arr[index + 1] && index === 0) {
      return false
    }
    if (arr[index] > arr[index + 1]) {
      ans = true
    }
  }
  return ans
}
const result = validMountainArray(arr)
console.log(result)
