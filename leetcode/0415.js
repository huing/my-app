// https://leetcode-cn.com/problems/add-strings/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  const arr1 = num1.split("").map(Number);
  const arr2 = num2.split("").map(Number);
  const sumArr = [];
  let remainder = 0;
  let num3 = 1,
    num4 = 1;
  while (num3 !== undefined || num4 !== undefined) {
    num3 = arr1.pop();
    num4 = arr2.pop();
    const sum = (num3 || 0) + (num4 || 0) + remainder;
    if (num3 === undefined && num4 === undefined && sum === 0) {
      break;
    }
    sumArr.unshift(sum % 10);
    remainder = (sum - (sum % 10)) / 10;
  }
  console.log(sumArr.join(""));
  return sumArr.join("");
};
addStrings("11", "123");
addStrings("456", "77");
addStrings("0", "0");
addStrings("584", "18");
addStrings("0", "1720");
addStrings("9", "9");

// var addStrings = function(num1, num2) {
//   const leng1 = num1.length;
//   const leng2 = num2.length;
//   const diff = leng1 - leng2;
//   let max = Math.max(leng1, leng2);
//   const arr1 = num1.split("").map(Number);
//   const arr2 = num2.split("").map(Number);
//   const sumArr = new Array(max + 1).fill(0);
//   if (diff < 0) {
//     arr1.unshift(...new Array(-diff).fill(0));
//   }
//   if (diff > 0) {
//     arr2.unshift(...new Array(diff).fill(0));
//   }
//   // console.log(arr1, arr2);
//
//   while (max > 0) {
//     const index = max - 1;
//     const sum = String(arr1[index] + arr2[index] + sumArr[max])
//         .split("")
//         .map(Number);
//     const remainder = sum.length === 2 ? sum[0] : 0;
//     // console.log(sum, remainder);
//     // sumArr.unshift(sum[sum.length - 1] + remainder);
//     sumArr[max] = sum[sum.length - 1];
//     sumArr[index] += remainder;
//     // console.log(sumArr);
//     max -= 1;
//   }
//   if (sumArr[0] === 0) {
//     sumArr.shift();
//   }
//   // console.log(sumArr.join(""));
//   return sumArr.join("");
// };
