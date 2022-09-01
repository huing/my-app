// https://leetcode-cn.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  const numRows = rowIndex + 1
  let ans = new Array(numRows).fill(1).map((item, index) => new Array(index + 1).fill(1))
  for (let i = 2 * numRows + 1; i < numRows * numRows; i++) {
    let x = Math.floor(i / numRows)
    let y = i % numRows
    if (y > 0 && y < x) {
      ans[x][y] = ans[x - 1][y - 1] + ans[x - 1][y]
    }
  }
  //   console.log(ans)
  return ans[rowIndex]
}
getRow(3)
