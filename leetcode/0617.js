// https://leetcode-cn.com/problems/merge-two-binary-trees/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = function (root1, root2) {
  if (root1 === null) {
    return root2
  }
  if (root2 == null) {
    return root1
  }
  root1.val = root1.val + root2.val
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)
  console.log(root1)
  return root1
}
let root1 = {
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
}
let root2 = {
  val: 2,
  left: {
    val: 14,
    left: {
      val: 7,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 1,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
}
mergeTrees(root1, root2)
