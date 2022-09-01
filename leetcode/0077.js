// https://leetcode-cn.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  let ans = []
  for (let i = 1; i <= n - k; i++) {
    let item = []
    for (let j = 0; j < k; j++) {
      item.push(i + j)
    }
    ans.push(item)
  }
  console.log(ans)
}
combine(4, 2)
combine(1, 1)

// 1 2 3 4

// 1 2
// 1 3
// 1 4

// 2 3
// 2 4

// 3 4

// 1 2 3
// 1 2 4
// 1 3 4

// 2 3 4
