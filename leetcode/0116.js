// https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
// https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/

var connect = function (root) {
  let stack = [];
  let leng = 0;
  if (root === null) {
    return root;
  }
  stack = [root];
  while (stack.length !== 0) {
    leng = stack.length;
    for (let i = 1; i <= leng; ++i) {
      const node = stack.shift();
      if (i < leng) {
        node.next = stack[0];
      }
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }
  return root;
};

// const root = {
//   val: 0,
//   left: {
//     val: -1,
//     left: {
//       val: 15,
//       left: null,
//       right: null,
//     },
//     right: {
//       val: 7,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     val: 20,
//     left: {
//       val: 15,
//       left: null,
//       right: null,
//     },
//     right: {
//       val: 7,
//       left: null,
//       right: null,
//     },
//   },
// };
const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
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

console.log(connect(root));
