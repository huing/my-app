function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function getListNode(array) {
  let next = null
  let len = array.length - 1
  let node = null
  for (let index = len; index >= 0; index -= 1) {
    node = new ListNode(array[index], next)
    next = node
  }
  console.log('res', JSON.stringify(node))
  return node
}

getListNode([1, 2, 3, 4, 5])
