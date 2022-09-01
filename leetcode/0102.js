// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

var levelOrder = function (root) {
  let res = [];
  let stack = [];
  let leng = 0;

  // 递归
  // function helpers(root, level) {
  //   if (!root) {
  //     return res;
  //   }
  //   if (res.length === level) {
  //     res[level] = [];
  //   }
  //   res[level].push(root.val);
  //   if (root.left) {
  //     helpers(root.left, level + 1);
  //   }
  //   if (root.right) {
  //     helpers(root.right, level + 1);
  //   }
  // }
  // helpers(root, 0);

  // 迭代
  if (!root) {
    return res;
  }
  stack.push(root);
  while (stack.length !== 0) {
    leng = stack.length;
    res.push([]);
    for (let i = 1; i <= leng; ++i) {
      const node = stack.shift();
      res[res.length - 1].push(node.val);
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

console.log(levelOrder(root));
