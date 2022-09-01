// https://leetcode-cn.com/problems/sorted-matrix-search-lcci/

var searchMatrix = function(matrix, target) {
  let rowLeft = 0
  let colLeft = 0
  let colRight = matrix.length - 1
  if (colRight === -1) {
    return false
  }
  let rowRight = matrix[colLeft].length - 1
  if (rowRight === -1) {
    return false
  }
  let middle = 0
  // let curTarget = 0
  while (rowLeft <= rowRight) {
    middle = rowLeft + Math.floor((rowRight - rowLeft) / 2)
    // curTarget = matrix[colLeft][middle]
    if (matrix[colLeft][middle] < target) {
      rowLeft = middle + 1
    }
    if (matrix[colLeft][middle] > target) {
      rowRight = middle - 1
    }
    if (matrix[colLeft][middle] === target) {
      return true
    }
    if (rowLeft > rowRight && colLeft === colRight) {
      return false
    }
    if (rowLeft > rowRight) {
      colLeft += 1
      rowLeft = 0
    }
  }
  return false
};

console.log(searchMatrix([
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 5))
console.log(searchMatrix([
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 20))
console.log(searchMatrix([], 0))
console.log(searchMatrix([[1]], 31))