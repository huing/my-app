// https://leetcode-cn.com/problems/smallest-good-base/

/**
 * @param {string} n
 * @return {string}
 */
const smallestGoodBase = function (n) {
  const num = Number(n);
  let result = 1;
  for (let index = 2; index < num; index++) {
    // console.log("index", index);
    const list = [];
    let divide = num;
    while (divide > 0) {
      list.push(divide % index);
      divide = Math.floor(divide / index);
    }
    if (/^1+$/.test(list.join(""))) {
      result = index;
      break;
    }
  }
  // console.log("result", result);
  return result;
};
smallestGoodBase("13");
smallestGoodBase("1000000000000000000");
