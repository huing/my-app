// https://leetcode-cn.com/problems/binary-tree-right-side-view/

var rightSideView = function (root) {
  let res = [];
  let stack = [];
  let leng = 0;

  if (!root) {
    return res;
  }
  stack.push(root);
  while (stack.length !== 0) {
    leng = stack.length;
    for (let i = 1; i <= leng; ++i) {
      const node = stack.shift();
      if (i === leng) {
        res.push(node.val);
      }
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }
  return res;
};

// const root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: null,
//     right: {
//       val: 5,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     val: 3,
//     left: null,
//     right: {
//       val: 4,
//       left: null,
//       right: null,
//     },
//   },
// };

const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
};

console.log(rightSideView(root));
