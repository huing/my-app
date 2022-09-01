// https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/

var averageOfLevels = function (root) {
  let res = [];
  let stack = [];
  let leng = 0;
  let total = 0;
  if (!root) {
    return res;
  }
  stack.push(root);
  while (stack.length !== 0) {
    leng = stack.length;
    total = 0;
    for (let i = 1; i <= leng; ++i) {
      const node = stack.shift();
      total += node.val;
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    res.push(total / leng);
  }
  return res;
};

const root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

console.log(averageOfLevels(root));
