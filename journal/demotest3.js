// 函数签名
function generateMines(M, N, mineCount, firstClickRow, firstClickCol) {
  // YOUR CODE HERE
  // 矩阵
  let ans = new Array(M).fill('O').map(() => new Array(N).fill('O'))
  // 不可用的下标数组
  const extraAns = [
    (firstClickRow - 2) * N + firstClickCol - 2,
    (firstClickRow - 2) * N + firstClickCol - 1,
    (firstClickRow - 2) * N + firstClickCol,
    (firstClickRow - 1) * N + firstClickCol - 2,
    (firstClickRow - 1) * N + firstClickCol - 1,
    (firstClickRow - 1) * N + firstClickCol,
    firstClickRow * N + firstClickCol - 2,
    firstClickRow * N + firstClickCol - 1,
    firstClickRow * N + firstClickCol,
  ].filter((item) => item >= 0 && item < M * N - 1)
  // 可用的下标数组
  let indexAns = new Array(M * N)
    .fill(0)
    .map((item, index) => index)
    .filter((item) => !extraAns.includes(item))
  // console.log(indexAns, extraAns)
  if (indexAns.length < mineCount) {
    return ans
  }
  for (let i = 0; i < mineCount; i++) {
    // 随机下标
    const random = Math.floor(Math.random() * indexAns.length)
    // 随机下标对应的值
    const n = indexAns[random]
    // console.log(n, Math.floor(n / N), n % N)
    ans[Math.floor(n / N)][n % N] = 'X'
    indexAns.splice(random, 1)
  }
  // console.log(ans, indexAns)
  return ans
}

// 输入示例
const output = generateMines(4, 6, 5, 2, 5)
// const output = generateMines(2, 2, 2, 2, 5)
// const output = generateMines(1, 1, 2, 2, 5)
console.log(output)
