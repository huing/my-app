// https://leetcode-cn.com/problems/binary-watch/

var readBinaryWatch = function (turnedOn) {
  let ans = [];
  for (let h = 0; h < 12; h++) {
    for (let s = 0; s < 60; s++) {
      if (h.toString(2).split("0").join("").length + s.toString(2).split("0").join("").length === turnedOn) {
        ans.push(`${h}:${s < 10 ? "0" : ""}${s}`);
      }
    }
  }
  return ans;
};

console.log(readBinaryWatch(0));
console.log(readBinaryWatch(1));
console.log(readBinaryWatch(9));
console.log(readBinaryWatch(10));
