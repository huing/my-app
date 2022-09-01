// https://leetcode-cn.com/problems/max-area-of-island/

function dfs(grid, sr, sc) {
  if (sr < 0 || sr >= grid.length || sc < 0 || sc >= grid[0].length) {
    return 0
  }
  if (grid[sr][sc] === 1) {
    grid[sr][sc] = 0
    return (
      dfs(grid, sr - 1, sc) +
      dfs(grid, sr, sc - 1) +
      dfs(grid, sr + 1, sc) +
      dfs(grid, sr, sc + 1) +
      1
    )
  }
  return 0
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
  let max = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      max = Math.max(max, dfs(grid, i, j))
    }
  }
  console.log(max)
  return max
}
maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
])
maxAreaOfIsland([
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 0],
])
maxAreaOfIsland([[0, 1, 1, 1, 0, 0, 0, 0]])
