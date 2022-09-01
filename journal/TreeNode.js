function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
function getTreeNode(array) {
  let left = null
  let right = null
  let node = null
  let len = array.length - 1
  // for (let index = len; index >= 0; index -= 1) {
  //   node = new TreeNode(array[index], left, right)
  //   ans = node
  // }
  let index = len
  while (index >= 0) {
    // node = new TreeNode(array[index], left, right)
    // left = node
    // right = node
    // index --
    left = new TreeNode(array[index--], left, right)
    right = new TreeNode(array[index--], left, right)
  }
  console.log(JSON.stringify(node))
  return node
}
getTreeNode([1, 2, 3])
//     1
//  2     3
