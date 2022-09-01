// https://leetcode-cn.com/problems/valid-sudoku/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  let mapx = new Map()
  let mapy = new Map()
  let mapr = new Map()
  for (let k = 0; k < 9; k++) {
    mapx.set(k, new Map())
    mapy.set(k, new Map())
    mapr.set(k, new Map())
  }
  let x = 0
  let y = 0
  for (x = 0; x < 9; x++) {
    for (y = 0; y < 9; y++) {
      if (board[x][y] === '.') {
        console.log('.', x, y)
        continue
      }
      if (mapx.get(x).get(board[x][y])) {
        console.log('x', x, y)
        return false
      } else {
        mapx.get(x).set(board[x][y], 1)
      }
      if (mapy.get(y).get(board[x][y])) {
        console.log('y', x, y)
        return false
      } else {
        mapy.get(y).set(board[x][y], 1)
      }
      const p = Math.floor(x / 3) * 3 + Math.floor(y / 3)
      // console.log(x, y, p)
      if (mapr.get(p).get(board[x][y])) {
        console.log('p')
        return false
      } else {
        mapr.get(p).set(board[x][y], 1)
      }
    }
  }
  return true
}
isValidSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
])
// isValidSudoku([
//   ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
//   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ])
