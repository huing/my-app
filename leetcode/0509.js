// https://leetcode-cn.com/problems/fibonacci-number/

var fib = function (n) {
  if (n < 2) {
    return n
  }
  let p = 0
  let q = 0
  let r = 1
  for (let index = 2; index <= n; index++) {
    p = q
    q = r
    r = p + q
  }
  return r

  // if (n === 0) {
  //   return 0
  // }
  // if (n === 1) {
  //   return 1
  // }
  // return fib(n - 1) + fib(n - 2)
};
console.log(fib(2), fib(3), fib(4), fib(30))

// https://leetcode-cn.com/problems/n-th-tribonacci-number/

var tribonacci = function (n) {
  if (n === 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return 1
  }
  let p = 0
  let q = 0
  let r = 1
  let s = 1
  for (let index = 3; index <= n; index++) {
    p = q
    q = r
    r = s
    s = p + q + r
  }
  return s
};
console.log(tribonacci(4), tribonacci(25))
