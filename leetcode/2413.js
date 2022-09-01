// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/

// var permutation = function (s) {
//   const masks = {};
//   for (let index = 0; index < s.length; index++) {
//     masks[s[index]] = 1;
//   }
//   const array = Object.keys(masks);
//   const ansArr = [];
//   const perm = [];
//   const cbArr = (arr, index, perm) => {
//     perm.push(arr[index]);
//     if (index === arr.length - 1) {
//       ansArr.push(perm.join(""));
//       return;
//     }
//     for (let i = 0; i < index; i++) {
//       const element = array[i];

//     }
//     cbArr(array, index + 1);
//   };

//   cbArr(array, 0, perm);
//   return ansArr;
// };
var permutation = function (s) {
  const rec = [],
    vis = [];
  const n = s.length;
  const arr = Array.from(s).sort();
  const perm = [];
  const backtrack = (arr, i, n, perm) => {
    if (i === n) {
      rec.push(perm.toString());
      return;
    }
    for (let j = 0; j < n; j++) {
      if (vis[j] || (j > 0 && !vis[j - 1] && arr[j - 1] === arr[j])) {
        continue;
      }
      vis[j] = true;
      perm.push(arr[j]);
      backtrack(arr, i + 1, n, perm);
      perm.pop();
      vis[j] = false;
    }
  };

  backtrack(arr, 0, n, perm);
  const size = rec.length;
  const recArr = new Array(size).fill(0);
  for (let i = 0; i < size; i++) {
    recArr[i] = rec[i].split(",").join("");
  }
  return recArr;
};

// var permutation = function(s) {
//   const ret = [];
//   const arr = Array.from(s).sort();

//   const nextPermutation = (arr) => {
//       let i = arr.length - 2;
//       while (i >= 0 && arr[i] >= arr[i + 1]) {
//           i--;
//       }
//       if (i < 0) {
//           return false;
//       }
//       let j = arr.length - 1;
//       while (j >= 0 && arr[i] >= arr[j]) {
//           j--;
//       }
//       swap(arr, i, j);
//       reverse(arr, i + 1);
//       return true;
//   }

//   const swap = (arr, i, j) => {
//       const temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//   }

//   const reverse = (arr, start) => {
//       let left = start, right = arr.length - 1;
//       while (left < right) {
//           swap(arr, left, right);
//           left++;
//           right--;
//       }
//   }

//   do {
//       ret.push(arr.join(''));
//   } while (nextPermutation(arr));
//   const size = ret.length;
//   const retArr = new Array(size).fill(0);
//   for (let i = 0; i < size; i++) {
//       retArr[i] = ret[i];
//   }
//   return retArr;
// };

console.log(permutation("abc"));
