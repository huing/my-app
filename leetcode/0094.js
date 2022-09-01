// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/

// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// 前 根->左->右
// 中 左->根->右
// 后 左->右->根

var preorderTraversal = function (root) {
  let res = [];
  // 递归
  // function preorder(root, res) {
  //   if (root === null) {
  //     return;
  //   }
  //   res.push(root.val);
  //   preorder(root.left, res);
  //   preorder(root.right, res);
  // }
  // preorder(root, res);

  // 迭代
  let stack = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      res.push(root.val);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  return res;
};

var inorderTraversal = function (root) {
  let res = [];
  let stack = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};

var postorderTraversal = function (root) {
  let res = [];
  let stack = [];
  let prev = null;
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.right === null || root.right === prev) {
      res.push(root.val);
      prev = root;
      root = null;
    } else {
      stack.push(root);
      root = root.right;
    }
  }
  return res;
};
let root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
};
console.log(preorderTraversal(root), inorderTraversal(root), postorderTraversal(root));
