// https://leetcode-cn.com/problems/max-points-on-a-line/

// var maxPoints = function (points) {
//   const karrs = [];
//   let morearr = [];
//   let lessarr = points;
//   let left = 0;
//   let right = points.length - 1;
//   let k = 0;
//   let kflag = 1;
//   let isk1 = 0;
//   let isk2 = 0;
//   let c1 = 0;
//   let c2 = 0;
//   while (left <= right) {
//     morearr = lessarr;
//     lessarr = [];
//     k = morearr[0][0] ? morearr[0][1] / morearr[0][0] : 0;
//     c1 = morearr[0][1] + morearr[0][0];
//     c2 = morearr[0][1] - morearr[0][0];
//     kflag = 1;
//     for (let index = 1; index < morearr.length; index++) {
//       isk1 = morearr[index][0] * k + c2 === morearr[index][1];
//       isk2 = morearr[index][0] * -k + c1 === morearr[index][1];
//       if (isk1 || isk2) {
//         kflag++;
//       } else {
//         lessarr.push(morearr[index]);
//       }
//     }
//     karrs.push(kflag);
//     left = 0;
//     right = lessarr.length - 1;
//   }
//   return Math.max(...karrs);
// };

var maxPoints = function (points) {
  const n = points.length;
  if (n <= 2) {
    return n;
  }
  let ret = 0;
  for (let i = 0; i < n; i++) {
    if (ret >= n - i || ret > n / 2) {
      break;
    }
    const map = new Map();
    for (let j = i + 1; j < n; j++) {
      let x = points[i][0] - points[j][0];
      let y = points[i][1] - points[j][1];
      if (x === 0) {
        y = 1;
      } else if (y === 0) {
        x = 1;
      } else {
        if (y < 0) {
          x = -x;
          y = -y;
        }
        const gcdXY = gcd(Math.abs(x), Math.abs(y));
        x /= gcdXY;
        y /= gcdXY;
      }
      const key = y + x * 20001;
      map.set(key, (map.get(key) || 0) + 1);
    }
    let maxn = 0;
    for (const num of map.values()) {
      maxn = Math.max(maxn, num + 1);
    }
    ret = Math.max(ret, maxn);
  }
  return ret;
};

const gcd = (a, b) => {
  return b !== 0 ? gcd(b, a % b) : a;
};

console.log(
  maxPoints([
    [1, 1],
    [2, 2],
    [3, 3],
  ]),
  maxPoints([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ])
);
