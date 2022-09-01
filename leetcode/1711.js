// https://leetcode-cn.com/problems/count-good-meals/

var countPairs = function (deliciousness) {
  const MOD = 1000000007;
  let maxVal = 0;
  for (const val of deliciousness) {
    maxVal = Math.max(maxVal, val);
  }
  const maxSum = maxVal * 2;
  let pairs = 0;
  const map = new Map();

  for (let i = 0; i < deliciousness.length; i++) {
    const val = deliciousness[i];
    for (let sum = 1; sum <= maxSum; sum <<= 1) {
      const count = map.get(sum - val) || 0;
      pairs = (pairs + count) % MOD;
    }
    map.set(val, (map.get(val) || 0) + 1);
  }
  return pairs;
};
console.log(
  countPairs([1, 3, 5, 7, 9]),
  //
  countPairs([1, 1, 1, 3, 3, 3, 7])
);
