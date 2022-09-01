// https://leetcode-cn.com/problems/flood-fill/

function dfs(image, sr, sc, color, newColor) {
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) {
    return
  }
  if (image[sr][sc] === color) {
    image[sr][sc] = newColor
    dfs(image, sr - 1, sc, color, newColor)
    dfs(image, sr, sc - 1, color, newColor)
    dfs(image, sr + 1, sc, color, newColor)
    dfs(image, sr, sc + 1, color, newColor)
  }
}

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, newColor) {
  let color = image[sr][sc]
  if (color !== newColor) {
    dfs(image, sr, sc, color, newColor)
  }
  // console.log(image)
  return image
}
floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2,
)
floodFill(
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  0,
  0,
  2,
)
