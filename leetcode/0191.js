// https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
// https://leetcode-cn.com/problems/number-of-1-bits/submissions/

var hammingWeight = function (n) {
  let ret = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) {
      ret++;
    }
  }
  return ret;

  // let ret = 0;
  // while (n) {
  //   n &= n - 1;
  //   ret++;
  // }
  // return ret;

  // 虽然感觉哪里怪怪的，但是过了
  // return n.toString(2).split("0").join("").length;
};
// console.log(parseInt("00000000000000000000000000001011", 2));
// console.log(parseInt("00000000000000000000000010000000", 2));
// console.log(parseInt("11111111111111111111111111111101", 2));
console.log(
  hammingWeight(parseInt("00000000000000000000000000001011", 2)),
  hammingWeight(128),
  hammingWeight(parseInt("11111111111111111111111111111101", 2))
);
