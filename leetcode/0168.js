// https://leetcode-cn.com/problems/excel-sheet-column-title/

var convertToTitle = function (columnNumber) {
  // console.log("a".charCodeAt(0), "A".charCodeAt(0), "@".charCodeAt(0));
  // console.log(String.fromCharCode(97), String.fromCharCode(65), String.fromCharCode(64));

  // const sb = [];
  // while (columnNumber !== 0) {
  //     columnNumber--;
  //     sb.push(String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt()));
  //     columnNumber = Math.floor(columnNumber / 26);
  // }

  let s = [];
  let flag = columnNumber;
  while (flag) {
    if (flag % 26 === 0) {
      s.push("Z");
      flag = flag / 26 - 1;
    } else {
      s.push(String.fromCharCode(64 + (flag % 26)));
      flag = Math.floor(flag / 26);
    }
  }
  return s.reverse().join("");
};

console.log(
  convertToTitle(1),
  convertToTitle(26),
  convertToTitle(27),
  convertToTitle(28),
  convertToTitle(701),
  convertToTitle(702)
);
