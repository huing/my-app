// https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/

var largestValues = function (root) {
  let res = [];
  let stack = [];
  let leng = 0;
  let maxVal = 0;
  if (!root) {
    return res;
  }
  stack.push(root);
  while (stack.length !== 0) {
    leng = stack.length;
    maxVal = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i <= leng; ++i) {
      const node = stack.shift();
      if (node.val > maxVal) {
        maxVal = node.val;
      }
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    res.push(maxVal);
  }
  return res;
};

const root = {
  val: 0,
  left: {
    val: -1,
    left: null,
    right: null,
  },
  // right: {
  //   val: 20,
  //   left: {
  //     val: 15,
  //     left: null,
  //     right: null,
  //   },
  //   right: {
  //     val: 7,
  //     left: null,
  //     right: null,
  //   },
  // },
};

console.log(largestValues(root));
